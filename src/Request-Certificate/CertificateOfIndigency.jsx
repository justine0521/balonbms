import React, { useState, useEffect, useRef } from 'react';
import BarangayClearance from '../Images/Certificate-Image/Indigency-1.png'
import '../App.css';
import axios from 'axios';
import SubmitModal from '../Modal/SubmitModal';
import Swal from 'sweetalert2';

import { MdOutlineContentCopy } from "react-icons/md";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

function CertificateOfIndigency() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('')
  const [civilStatus, setCivilStatus] = useState('')
  const [purpose, setPurpose] = useState('');

  const [trackingCode, setTrackingCode] = useState('');
  const [isImageEnlarged, setIsImageEnlarged] = useState(false);
  const [showSubmitModal, setShowSubmitModal] = useState(false);
  const [showCopyTrackingModal, setShowCopyTrackingModal] = useState(false);
  const [timer, setTimer] = useState(3);
  const [isLoading, setIsLoading] = useState(false);
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

  const handleAddress = (event) => {
    const value = event.target.value;
    setAddress(value);
  };

  const handleCivilStatus = (event) => {
    const value = event.target.value;
    setCivilStatus(value);
  };

  const handlePurposeChange = (event) => {
    const value = event.target.value;
    setPurpose(value);
  };

  const resetForm = () => {
    setFullName('');
    setEmail('');
    setAddress('')
    setCivilStatus('')
    setPurpose('');
    const newTrackingCode = generateTrackingCode();
    setTrackingCode(newTrackingCode);
  };

  const hasSpecialCharacters = /[!@#$%^&*(),.?":{}|<>]/;

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    if (fullName === '') {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Please enter your full name",
        showConfirmButton: false,
        timer: 1500
      });
      return;
    } else if (!isNaN(fullName)) {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Please enter a valid name",
        showConfirmButton: false,
        timer: 1500
      });
      return;
    } else if (hasSpecialCharacters.test(fullName)) {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Please enter a name without special characters",
        showConfirmButton: false,
        timer: 1500
      });
      return;
    } else if (address === '') {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Please enter your address",
        showConfirmButton: false,
        timer: 1500
      });
      return;
    } else if (civilStatus === '') {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Please select your Civil Status",
        showConfirmButton: false,
        timer: 1500
      });
      return;
    } else if (purpose === '') {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Please enter the purpose for the certificate",
        showConfirmButton: false,
        timer: 1500
      });
      return;
    } else {
      setIsLoading(true);
    }
  
    const formData = {
      certificateType: 'Certificate of Indigency',
      fullName,
      address,
      civilStatus,
      email,
      purpose,
      trackingCode,
    };
  
    try {
      const response = await axios.post(`${API_BASE_URL}/api/indigency`, formData);
    } catch (error) {
      console.error('Error submitting the form:', error);
      alert('There was an error submitting the form.');
    } finally {
      setIsLoading(false);
      resetForm();
      setShowSubmitModal(true);
    }
  };

  return (
    <section className='mt-24 mb-10'>
      <div className='h-fit flex justify-center flex-wrap gap-10'>
        <div className='w-96 h-fit mt-5 p-5 shadow-lg '>
          <div className='w-full h-96 bg-white '>
            <img src={BarangayClearance} alt="Barangay Clearance" onClick={handleImageClick} className='cursor-pointer w-full h-full object-fit' />
          </div>

          <p className='text-sm flex justify-end font-semibold text-gray-500 italic'>Within the day Process</p>

          <div className='my-3 text-gray-600'>
            <p>Magdala po ng valid ID, kapag kukunin na ang certificate sa Barangay, bilang patunay ng inyong pagkakakilanlan.
            </p>
          </div>

          {isImageEnlarged && (
            <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-10 z-50" onClick={handleImageClick}>
              <img src={BarangayClearance} alt="Barangay Clearance" className="w-auto h-auto max-h-full max-w-full " />
            </div>
          )}
        </div>

        <form className="w-full md:w-1/2 h-fit pb-5 bg-white mt-5 rounded" onSubmit={handleSubmit}>
          <p className="text-green-500 bg-gray-100 font-semibold p-3 border">CERTIFICATE OF INDIGENCY</p>

          <div className="flex flex-col gap-3 mt-2">
            {/* <div className="w-full flex flex-col gap-y-1 px-3 py-3">
              <label className="text-green-500 font-semibold">Tracking Code <span className='text-gray-600 font-normal'>(Copy your tracking code)</span></label>

              <div className='relative'>
                {trackingCode && <input type="text" disabled className="p-2 bg-gray-200 w-full" value={trackingCode} />}

                <MdOutlineContentCopy onClick={handleCopyTracking} className='absolute top-3 right-3 text-lg cursor-pointer text-green-500' />
              </div>
            </div> */}

            <div className="w-full flex flex-col px-3">
              <label htmlFor="name" className='text-gray-700 text-sm'>Name:</label>
              <input type="text" id='name' placeholder="Enter Full Name" className="p-2 border border-black outline-green-500 w-full" value={fullName} onChange={handleFullName} />
            </div>

            <div className="w-full flex flex-col px-3">
              <label htmlFor="address" className='text-gray-700 text-sm'>Address:</label>
              <input type="text" id='address' placeholder="House No. / Street / Subd Village" className="p-2 border border-black outline-green-500 w-full" value={address} onChange={handleAddress} />
            </div>

            <div className="w-full flex flex-col px-3">
              <label htmlFor="civilStatus" className='text-gray-700 text-sm'>Civil Status:</label>
              <select name="" id="civilStatus" className="p-2 border border-black outline-green-500 w-full" value={civilStatus} onChange={handleCivilStatus}>
                <option value="" disabled>Civil Status</option>
                <option value="Single">Single</option>
                <option value="Married">Married</option>
                <option value="Widowed">Widowed</option>
                <option value="Divorced">Divorced</option>
                <option value="Seperated">Seperated</option>
                <option value="Annulled">Annulled</option>
              </select>
            </div>

            <div className="w-full flex flex-col px-3">
              <label htmlFor="email" className='text-gray-700 text-sm'>Email:</label>
              <input type="email" id='email' placeholder="Enter Email Address" className="p-2 border border-black outline-green-500 w-full" value={email} onChange={handleEmail} />
            </div>

            <div className="w-full flex flex-col gap-y-1 px-3">
              <label htmlFor="purpose" className='text-gray-700 text-sm'>Purpose / Saan Gagamitin</label>
              <textarea name="" id="purpose" rows={6} placeholder="Purpose (Saan Gagamitin)" className="noResize border border-black p-2 outline-green-500 w-full" style={{ resize: 'none' }} value={purpose} onChange={handlePurposeChange}></textarea>
            </div>

            <div className="px-3 w-full">
              <button className={`bg-green-500 text-white w-full p-1 font-semibold hover:bg-green-400 ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`} disabled={isLoading}>
                {isLoading ? 'Submitting' : 'Submit'}
              </button>
            </div>
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
        <SubmitModal progressBarRef={progressBarRef}/>
      )}
    </section>
  );
}

export default CertificateOfIndigency;
