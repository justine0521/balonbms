import React, { useState, useEffect, useRef } from 'react';
import Logo from '../Images/Logo.png';
import { FaSpinner } from 'react-icons/fa'; // Import the Font Awesome spinner icon
import BarangayClearance from '../Images/Certificate-Picture/Certificate of Low Income-1.png'
import '../App.css';
import axios from 'axios';

import { MdOutlineContentCopy } from "react-icons/md";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

function CommonLaw() {
  const [male, setMale] = useState('')
  const [female, setFemale] = useState('')
  const [tirahan, setTirahan] = useState('')
  const [yearTogether, setYearTogether] = useState('')
  const [email, setEmail] = useState('')

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

  const handleMale = (event) => {
    const value = event.target.value;
    setMale(value);
  };

  const handleFemale = (event) => {
    const value = event.target.value;
    setFemale(value);
  };

  const handleTirahan = (event) => {
    const value = event.target.value;
    setTirahan(value);
  };

  const handleYearTogether = (event) => {
    const value = event.target.value;
    setYearTogether(value);
  };

  const handleEmail = (event) => {
    const value = event.target.value;
    setEmail(value);
  };

  const resetForm = () => {
    setMale('');
    setFemale('')
    setTirahan('')
    setYearTogether('')
    setEmail('');
    
    const newTrackingCode = generateTrackingCode();
    setTrackingCode(newTrackingCode);
  };

  const hasSpecialCharacters = /[!@#$%^&*(),.?":{}|<>]/;

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    if (male && female === '') {
      alert('Please enter name');
    } else if (!isNaN(male && female)) {
      alert('Please enter a valid name');
    } else if (hasSpecialCharacters.test(male && female)) {
      alert('Please enter a name without special characters');
    } else if (tirahan === '') {
      alert('Please enter tirahan');
    } else if (yearTogether === '') {
      alert('Please enter year together');
    } else {
      const formData = {
        certificateType: 'Common Law',
        male,
        female,
        tirahan,
        yearTogether,
        email,
        trackingCode,
      };

      try {
        const response = await axios.post(`${API_BASE_URL}/api/commonLaw`, formData);
        // alert(response.data);
      } catch (error) {
        console.error('Error submitting the form:', error);
        alert('There was an error submitting the form.');
      }
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
            <img src={BarangayClearance} alt="Common Law" onClick={handleImageClick} className='cursor-pointer w-full h-full object-fit' />
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
          <p className="text-green-500 bg-gray-100 font-semibold p-3 border">COMMON LAW</p>

          <div className="flex flex-col gap-3 mt-2">
            {/* <div className="w-full flex flex-col gap-y-1 px-3 py-3">
              <label className="text-green-500 font-semibold">Tracking Code <span className='text-gray-600 font-normal'>(Copy your tracking code)</span></label>

              <div className='relative'>
                {trackingCode && <input type="text" disabled className="p-2 bg-gray-200 w-full" value={trackingCode} />}

                <MdOutlineContentCopy onClick={handleCopyTracking} className='absolute top-3 right-3 text-lg cursor-pointer text-green-500' />
              </div>
            </div> */}

            <div className="w-full flex flex-col px-3">
              <label htmlFor="male" className='text-gray-700 text-sm'>Pangalan ng Lalaki:</label>
              <input type="text" id='male' placeholder="Pangalan ng Lalaki" className="p-2 border border-black outline-green-500 w-full" value={male} onChange={handleMale} />
            </div>

            <div className="w-full flex flex-col px-3">
              <label htmlFor="female" className='text-gray-700 text-sm'>Pangalan ng Babae:</label>
              <input type="text" id='female' placeholder="Pangalan ng Babae" className="p-2 border border-black outline-green-500 w-full" value={female} onChange={handleFemale} />
            </div>

            <div className="w-full flex flex-col px-3">
              <label htmlFor="tirahan" className='text-gray-700 text-sm'>Tirahan:</label>
              <input type="text" id='tirahan' placeholder="Tirahan" className="p-2 border border-black outline-green-500 w-full" value={tirahan} onChange={handleTirahan} />
            </div>

            <div className="w-full flex flex-col px-3">
              <label htmlFor="taon" className='text-gray-700 text-sm'>Ilang taon / Buwan nang nagsasama:</label>
              <input type="text" id='taon' placeholder="ex. 1 Buwan" className="p-2 border border-black outline-green-500 w-full" value={yearTogether} onChange={handleYearTogether} />
            </div>

            <div className="w-full flex flex-col px-3">
              <label htmlFor="email" className='text-gray-700 text-sm'>Email:</label>
              <input type="email" id='email' placeholder="Email" className="p-2 border border-black outline-green-500 w-full" value={email} onChange={handleEmail} />
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

export default CommonLaw;
