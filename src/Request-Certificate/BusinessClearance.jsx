import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import BarangayClearance from '../Images/Certificate-Image/BusinessClearance-1.png';
import '../App.css';
import SubmitModal from '../Modal/SubmitModal';
import Swal from 'sweetalert2';

import { MdOutlineContentCopy } from "react-icons/md";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

function BusinessClearance() {
  const [owner, setOwner] = useState('');
  const [business, setBusiness] = useState('')
  const [natureOfBusiness, setNatureOfBusiness] = useState('')
  const [address, setAddress] = useState('')
  const [email, setEmail] = useState('');

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

  const handleOwner = (event) => {
    const value = event.target.value;
    setOwner(value);
  };

  const handleBusiness = (event) => {
    const value = event.target.value;
    setBusiness(value);
  };

  const handleNatureOfBusiness = (event) => {
    const value = event.target.value;
    setNatureOfBusiness(value);
  };

  const handleAddress = (event) => {
    const value = event.target.value;
    setAddress(value);
  };

  const handleEmail = (event) => {
    const value = event.target.value;
    setEmail(value);
  };

  const resetForm = () => {
    setOwner('');
    setBusiness('')
    setNatureOfBusiness('')
    setAddress('')
    setEmail('');
    
    const newTrackingCode = generateTrackingCode();
    setTrackingCode(newTrackingCode);
  };

  const hasSpecialCharacters = /[!@#$%^&*(),.?":{}|<>]/;

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    if (owner === '') {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Please enter the owner name",
        showConfirmButton: false,
        timer: 1500
      });
      return;
    } else if (!isNaN(owner)) {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Please enter a valid name",
        showConfirmButton: false,
        timer: 1500
      });
      return;
    } else if (hasSpecialCharacters.test(owner)) {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Please enter a name without special characters",
        showConfirmButton: false,
        timer: 1500
      });
      return;
    } else if (business === '') {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Please enter your business",
        showConfirmButton: false,
        timer: 1500
      });
      return;
    } else if (natureOfBusiness === '') {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Please enter your nature of business",
        showConfirmButton: false,
        timer: 1500
      });
      return;
    } else if (address === '') {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Please enter your address of business",
        showConfirmButton: false,
        timer: 1500
      });
      return;
    } else {
      setIsLoading(true);
    }
  
    const formData = {
      certificateType: 'Business Clearance',
      owner,
      business,
      natureOfBusiness,
      address,
      email,
      trackingCode,
    };
  
    try {
      const response = await axios.post(`${API_BASE_URL}/api/businessClearance`, formData);
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

          <p className='text-sm flex justify-end font-semibold text-gray-500 italic'>Within the day process</p>

          <div className='my-3 text-gray-600'>
            <p>Magdala po ng valid ID, kapag kukunin na ang certificate sa Barangay, bilang patunay ng inyong pagkakakilanlan.</p>
          </div>

          {isImageEnlarged && (
            <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-10 z-50" onClick={handleImageClick}>
              <img src={BarangayClearance} alt="Barangay Clearance" className="w-auto h-auto max-h-full max-w-full " />
            </div>
          )}
        </div>

        <form className="w-full md:w-1/2 h-fit pb-5 bg-white mt-5 rounded" onSubmit={handleSubmit}>
          <p className="text-green-500 bg-gray-100 font-semibold p-3 border">BUSINESS CLEARANCE</p>

          <div className="flex flex-col gap-3 mt-2">
            {/* <div className="w-full flex flex-col gap-y-1 px-3 py-3">
              <label className="text-green-500 font-semibold">Tracking Code <span className='text-gray-600 font-normal'>(Copy your tracking code)</span></label>

              <div className='relative'>
                {trackingCode && <input type="text" disabled className="p-2 bg-gray-200 w-full" value={trackingCode} />}

                <MdOutlineContentCopy onClick={handleCopyTracking} className='absolute top-3 right-3 text-lg cursor-pointer text-green-500' />
              </div>
            </div> */}

            <div className="w-full flex flex-col px-3">
              <label htmlFor="owner" className='text-gray-700 text-sm'>Name of Owner:</label>
              <input type="text" id='owner' placeholder="Enter Name of Owner" className="p-2 border border-black outline-green-500 w-full" value={owner} onChange={handleOwner} />
            </div>

            <div className="w-full flex flex-col px-3">
              <label htmlFor="business" className='text-gray-700 text-sm'>Name of Business:</label>
              <input type="text" id='business' placeholder="Enter Name of Business" className="p-2 border border-black outline-green-500 w-full" value={business} onChange={handleBusiness} />
            </div>

            <div className="w-full flex flex-col px-3">
              <label htmlFor="natureofbusiness" className='text-gray-700 text-sm'>Nature of Business:</label>
              <input type="text" id='natureofbusiness' placeholder="Enter Nature of Business" className="p-2 border border-black outline-green-500 w-full" value={natureOfBusiness} onChange={handleNatureOfBusiness} />
            </div>

            <div className="w-full flex flex-col px-3">
              <label htmlFor="addressofbusiness" className='text-gray-700 text-sm'>Address of Business:</label>
              <input type="text" id='addressofbusiness' placeholder="Enter Address of Business" className="p-2 border border-black outline-green-500 w-full" value={address} onChange={handleAddress} />
            </div>

            <div className="w-full flex flex-col px-3">
              <label htmlFor="email" className='text-gray-700 text-sm'>Email:</label>
              <input type="email" id='email' placeholder="Enter Email Address" className="p-2 border border-black outline-green-500 w-full" value={email} onChange={handleEmail} />
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

export default BusinessClearance;

