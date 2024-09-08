import React, { useState, useEffect, useRef } from 'react';
import Logo from '../Images/Logo.png';
import BarangayClearance from '../Images/Certificate-Picture/Barangay Clearance.jpg';
import { FaSpinner } from 'react-icons/fa'; // Import the Font Awesome spinner icon
import '../App.css';
import axios from 'axios';

import { MdOutlineContentCopy } from "react-icons/md";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

function CertificateOfGoodMoral() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [pickUp, setPickUp] = useState(false);
  const [pickUpDate, setPickupDate] = useState('');  // State for Pickup Date
  const [paymentMethod, setPaymentMethod] = useState('');
  const [referenceNo, setReferenceNo] = useState('');
  const [selectedPurpose, setSelectedPurpose] = useState('');
  const [selectType, setSelectType] = useState('');
  const [trackingCode, setTrackingCode] = useState('');
  const [isImageEnlarged, setIsImageEnlarged] = useState(false);
  const [showSubmitModal, setShowSubmitModal] = useState(false);
  const [showCopyTrackingModal, setShowCopyTrackingModal] = useState(false);
  const [timer, setTimer] = useState(3);
  const [isSubmitting, setIsSubmitting] = useState(false); // New state for loading
  const progressBarRef = useRef(null);

  const handleImageClick = () => {
    setIsImageEnlarged(!isImageEnlarged);
  };

  useEffect(() => {
    const fetchTrackingCode = () => {
      const generatedCode = generateTrackingCode();
      setTrackingCode(generatedCode);
    };

    fetchTrackingCode();
  }, []);

  useEffect(() => {
    if (showCopyTrackingModal || showSubmitModal) {
      progressBarRef.current.style.animation = `shrink ${timer}s linear forwards`;

      setTimeout(() => {
        setShowCopyTrackingModal(false);
        setShowSubmitModal(false);
      }, timer * 1000);
    }
  }, [showCopyTrackingModal, showSubmitModal, timer]);

  const generateTrackingCode = () => {
    const chars = '0123456789';
    let code = '';
    for (let i = 0; i < 16; i++) {
      if (i > 0 && i % 4 === 0) {
        code += '-';
      }
      code += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return code;
  };

  const handleCopyTracking = () => {
    navigator.clipboard.writeText(trackingCode).then(() => {
      setShowCopyTrackingModal(true);
    }).catch(err => {
      console.error('Failed to copy: ', err);
    });
  };

  const handleFullName = (event) => {
    const value = event.target.value;
    setFullName(value);
  };

  const handleEmail = (event) => {
    const value = event.target.value;
    setEmail(value);
  };

  const handleContactNumber = (event) => {
    const value = event.target.value;
    setContactNumber(value);
  };

  const handleSelectType = (event) => {
    const value = event.target.value;
    setSelectType(value);
    setPickUp(value === 'For-Pickup');
    setPaymentMethod('');
  };

  const handlePickupDateChange = (event) => {
    setPickupDate(event.target.value);  // Bind input to state
    console.log(event.target.value);
  };

  const handlePaymentMethod = (event) => {
    const value = event.target.value;
    setPaymentMethod(value);
  };

  const handleReferenceNoChange = (event) => {
    const value = event.target.value;
    setReferenceNo(value);
  };

  const handlePurposeChange = (event) => {
    const value = event.target.value;
    setSelectedPurpose(value);
  };

  const resetForm = () => {
    setFullName('');
    setEmail('');
    setContactNumber('');
    setPickUp(false);
    setPickupDate('');  // Reset pickup date
    setPaymentMethod('');
    setReferenceNo('');
    setSelectedPurpose('');
    setSelectType('');
    const newTrackingCode = generateTrackingCode();
    setTrackingCode(newTrackingCode);
  };

  const hasSpecialCharacters = /[!@#$%^&*(),.?":{}|<>]/;

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    if (fullName === '') {
      alert('Please enter your full name');
    } else if (!isNaN(fullName)) {
      alert('Please enter a valid name');
    } else if (isNaN(contactNumber)) {
      alert('Please enter a valid contact number');
    } else if (contactNumber.length <= 10 || contactNumber.length > 12) {
      alert('Please enter exact 11 numbers');
    } else if (hasSpecialCharacters.test(fullName)) {
      alert('Please enter a name without special characters');
    } else if (selectType === '') {
      alert('Please select Type');
    } else if (selectType === 'For-Pickup' && !pickUp) {
      alert('Please select a Pickup Date');
    } else if (paymentMethod === 'G-Cash' && !referenceNo) {
      alert('Please enter your Gcash Reference No.');
    } else if (paymentMethod === '') {
      alert('Please select a Payment Method');
    } else if (selectedPurpose === '') {
      alert('Please enter on what purpose you need the certificate');
    } else {
      // Include pickupDate in formData
      const formData = {
        certificateType: 'Certificate of Good Moral',
        certId: '8',
        fullName,
        email,
        contactNumber,
        pickUp,
        pickUpDate,  // Add pickup date to form data
        paymentMethod,
        referenceNo,
        selectedPurpose,
        selectType,
        trackingCode,
      };

      try {
        const response = await axios.post(`${API_BASE_URL}/submit-request`, formData);
        // alert(response.data);
      } catch (error) {
        console.error('Error submitting the form:', error);
        alert('There was an error submitting the form.');
      }
      console.log('Form submitted');
      setIsSubmitting(false);
      resetForm();
      setShowSubmitModal(true);
    }
  };

  return (
    <section className='mt-24 mb-10'>
      <div className='px-5 h-fit flex justify-center flex-wrap gap-10'>
        <div className='w-96 h-fit mt-5 p-5 shadow-lg '>
          <div className='w-full h-96 bg-white '>
            <img src={BarangayClearance} alt="Barangay Clearance" onClick={handleImageClick} className='cursor-pointer w-full h-full object-fit' />
          </div>

          <p className='text-sm flex justify-end font-semibold text-gray-500 italic'>1 to 2 Days Processing</p>

          <div className='my-3 text-gray-600'>
            <p>This further certifies that he is a law abiding pupil with good moral character and that he bears no record of misdemeanor.</p>
          </div>

          {isImageEnlarged && (
            <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-10 z-50" onClick={handleImageClick}>
              <img src={BarangayClearance} alt="Barangay Clearance" className="w-auto h-auto max-h-full max-w-full " />
            </div>
          )}
        </div>

        <form className="w-full md:w-1/2 h-fit pb-5 bg-white mt-5 rounded" onSubmit={handleSubmit}>
          <p className="text-green-500 bg-gray-100 font-semibold p-3 border">Certificate Of Good Moral</p>

          <div className="flex flex-col gap-3">
            <div className="w-full flex flex-col gap-y-1 px-3 py-3">
              <label className="text-green-500 font-semibold">Tracking Code <span className='text-gray-600 font-normal'>(Copy your tracking code)</span></label>

              <div className='relative'>
                {trackingCode && <input type="text" disabled className="p-2 bg-gray-200 w-full" value={trackingCode} />}

                <MdOutlineContentCopy onClick={handleCopyTracking} className='absolute top-3 right-3 text-lg cursor-pointer text-green-500' />
              </div>
            </div>

            <div className="w-full flex flex-col px-3">
              <input type="text" placeholder="Enter Full Name" className="p-2 border border-black outline-green-500 w-full" value={fullName} onChange={handleFullName} />
            </div>

            <div className="w-full flex flex-col px-3">
              <input type="email" placeholder="Enter Email Address" className="p-2 border border-black outline-green-500 w-full" value={email} onChange={handleEmail} />
            </div>

            <div className="w-full flex flex-col px-3">
              <input type="text" placeholder="Enter Contact Number" className="p-2 border border-black outline-green-500 w-full" value={contactNumber} onChange={handleContactNumber} />
            </div>

            <div className="w-full flex flex-col gap-y-1 px-3">
              <select name="" id="" className="p-2 border border-black outline-green-500 w-full" value={selectType} onChange={handleSelectType}>
                <option value="">Select Type</option>
                <option value="For-Delivery">For Delivery</option>
                <option value="For-Pickup">For Pickup (in Barangay)</option>
              </select>
            </div>

            {selectType === 'For-Pickup' && (
              <div className="w-full flex flex-col gap-y-1 px-3">
                <label className="text-green-500">Pickup Date</label>
                <input type="date" name="pickupDate" className="p-2 border border-black outline-green-500 w-full" value={pickUpDate} onChange={handlePickupDateChange} />
              </div>
            )}

            <div className="w-full flex flex-col gap-y-1 px-3">
              <select name="" id="" className="p-2 border border-black outline-green-500 w-full" value={paymentMethod} onChange={handlePaymentMethod}>
                <option value="">Select Payment Method</option>
                {selectType === 'For-Pickup' ? (
                  <>
                    <option value="G-Cash">Pay Online (G-Cash)</option>
                    <option value="COP">Cash on Pickup</option>
                  </>
                ) : (
                  <>
                    <option value="G-Cash">Pay Online (G-Cash)</option>
                    <option value="COD">Cash on Delivery</option>
                  </>
                )}
              </select>
            </div>

            {paymentMethod === 'G-Cash' && (
              <div className="w-full flex flex-col gap-y-1 px-3">
                <label className="text-green-500">Reference No. (Please enter a valid reference number)</label>
                <input type="text" name="reference" placeholder="Enter Gcash Reference No." className="p-2 border w-full" value={referenceNo} onChange={handleReferenceNoChange} />
              </div>
            )}

            <div className="w-full flex flex-col gap-y-1 px-3">
              <textarea name="" id="" rows={6} placeholder="Please state the purpose on what purpose you need the certificate." className="noResize border border-black p-2 outline-green-500 w-full" style={{ resize: 'none' }} value={selectedPurpose} onChange={handlePurposeChange}></textarea>
            </div>

            <div className="px-3 w-full">
              <button className="bg-green-500 text-white w-full p-1 font-semibold hover:bg-green-400">Submit</button>
            </div>
            {/* Loading animation */}
            {isSubmitting && (
              <div className="flex justify-center items-center mt-3">
                <FaSpinner className="animate-spin text-blue-500" /> {/* Font Awesome spinner */}
              </div>
            )}
          </div>
        </form>
      </div>

      {showCopyTrackingModal && (
        <div className="fixed right-5 top-5 flex items-center justify-center z-50">
          <div className="bg-green-100 p-5 rounded shadow-lg w-80">
            <p className="text-center text-gray-600 mb-4">Tracking Code copied successfully!</p>
            <div ref={progressBarRef} className="h-1 bg-green-500"></div>
          </div>
        </div>
      )}

      {showSubmitModal && (
        <div className="fixed right-5 top-5 flex items-center justify-center z-50">
          <div className="bg-green-100 p-5 rounded shadow-lg w-80">
            <p className="text-center text-gray-600 mb-4">Form Submitted Successfully!</p>
            <div ref={progressBarRef} className="h-1 bg-green-500"></div>
          </div>
        </div>
      )}
    </section>
  );
}

export default CertificateOfGoodMoral;
