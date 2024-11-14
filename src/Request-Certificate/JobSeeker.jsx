import React, { useState, useEffect, useRef } from 'react';
import Logo from '../Images/Logo.png';
import { FaSpinner } from 'react-icons/fa'; // Import the Font Awesome spinner icon
import BarangayClearance from '../Images/Certificate-Picture/Certificate for New Resident-1.png'
import '../App.css';
import axios from 'axios';

import { MdOutlineContentCopy } from "react-icons/md";
import { add } from 'date-fns';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

function FirtsTimeJobSeeker() {
  const [fullName, setFullName] = useState('');
  const [address, setAddress] = useState('')
  const [birthday, setBirthday] = useState('')
  const [age, setAge] = useState('')
  const [gender, setGender] = useState('')
  const [civilStatus, setCivilStatus] = useState('')
  const [contactNumber, setContactNumber] = useState('')
  const [education, setEducation] = useState('')
  const [course, setCourse] = useState('')
  const [email, setEmail] = useState('');

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

  const handleAddress = (event) => {
    const value = event.target.value;
    setAddress(value);
  };

  const handleBirthday = (event) => {
    const value = event.target.value;
    setBirthday(value);
  };

  const handleAge = (event) => {
    const value = event.target.value;
    setAge(value);
  };

  const handleGender = (event) => {
    const value = event.target.value;
    setGender(value);
  };

  const handleCivilStatus = (event) => {
    const value = event.target.value;
    setCivilStatus(value);
  };

  const handleContactNumber = (event) => {
    const value = event.target.value;
    setContactNumber(value);
  };

  const handleEducation = (event) => {
    const value = event.target.value;
    setEducation(value);
  };

  const handleCourse = (event) => {
    const value = event.target.value;
    setCourse(value);
  };

  const handleEmail = (event) => {
    const value = event.target.value;
    setEmail(value);
  };

  const resetForm = () => {
    setFullName('');
    setAddress('')
    setBirthday('')
    setAge('')
    setGender('')
    setCivilStatus('')
    setContactNumber('');
    setEducation('')
    setCourse('')
    setEmail('');
    
    const newTrackingCode = generateTrackingCode();
    setTrackingCode(newTrackingCode);
  };

  const hasSpecialCharacters = /[!@#$%^&*(),.?":{}|<>]/;

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true); // Set loading to true when submitting the form

    const dateRequest = new Date().toISOString(); 

    if (fullName === '') {
      alert('Please enter your name');
    } else if (!isNaN(fullName)) {
      alert('Please enter a valid name');
    } else if (isNaN(contactNumber)) {
      alert('Please enter a valid contact number');
    } else if (contactNumber.length <= 10 || contactNumber.length > 12) {
      alert('Please enter exact 11 numbers');
    } else if (hasSpecialCharacters.test(fullName)) {
      alert('Please enter a name without special characters');
    } else if (address === '') {
      alert('Please enter your address');
    } else if (birthday === '') {
      alert('Please enter your birhtday');
    } else if (age === '') {
      alert('Please enter your age');
    } else if (gender === '') {
      alert('Please enter your gender');
    } else if (civilStatus === '') {
      alert('Please enter your civil status');
    } else if (education === '') {
      alert('Please enter your education');
    } else if (course === '') {
      alert('Please enter your course');
    } else {
      const formData = {
        certificateType: 'First Time Job Seeker',
        dateRequest,
        fullName,
        address,
        birthday,
        age,
        gender,
        civilStatus,
        contactNumber,
        education,
        course,
        email,
        trackingCode,
      };

      try {
        const response = await axios.post(`${API_BASE_URL}/api/jobSeeker`, formData);
        // alert(response.data);
      } catch (error) {
        console.error('Error submitting the form:', error);
        alert('There was an error submitting the form.');
      }
      resetForm();
      setIsSubmitting(false); // Set loading to false after submitting the form
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
          <p className="text-green-500 bg-gray-100 font-semibold p-3 border">FIRST TIME JOB SEEKER</p>

          <div className="flex flex-col gap-2 mt-2">
            {/* <div className="w-full flex flex-col gap-y-1 px-3 py-3">
              <label className="text-green-500 font-semibold">Tracking Code <span className='text-gray-600 font-normal'>(Copy your tracking code)</span></label>

              <div className='relative'>
                {trackingCode && <input type="text" disabled className="p-2 bg-gray-200 w-full" value={trackingCode} />}

                <MdOutlineContentCopy onClick={handleCopyTracking} className='absolute top-3 right-3 text-lg cursor-pointer text-green-500' />
              </div>
            </div> */}

            <div className="w-full flex flex-col px-3">
              <label htmlFor="" className="text-gray-700 text-sm">Name:</label>
              <input type="text" placeholder="Enter Name" className="p-2 border border-black outline-green-500 w-full" value={fullName} onChange={handleFullName} />
            </div>

            <div className="w-full flex flex-col px-3">
              <label htmlFor="" className="text-gray-700 text-sm">Address:</label>
              <input type="text" placeholder="House No. / Street / Subd Village" className="p-2 border border-black outline-green-500 w-full" value={address} onChange={handleAddress} />
            </div>

            <div className="w-full flex gap-5 px-3">
              <div className='w-full'>
                <label htmlFor="" className='text-gray-700 text-sm'>Birthday:</label>
                <input type="date" className="p-2 border border-black outline-green-500 w-full" value={birthday} onChange={handleBirthday} />
              </div>

              <div className="w-full">
                <label htmlFor="" className='text-gray-700 text-sm'>Age:</label>
                <input type="text" placeholder="Enter Age" className="p-2 border border-black outline-green-500 w-full" value={age} onChange={handleAge} />
              </div>
            </div>

            <div className="w-full flex gap-5 px-3">
              <div className='w-full'>
                <label htmlFor="" className='text-gray-700 text-sm'>Gender:</label>
                <select name="" id="" className="p-2 border border-black outline-green-500 w-full" value={gender} onChange={handleGender}>
                  <option value="" disabled>Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>

              <div className="w-full">
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
            </div>

            

            <div className="w-full flex gap-5 px-3">
              <div className="w-full ">
                <label htmlFor="education" className="text-gray-700 text-sm">Educational Attainment:</label>
                <select id="education" className="p-2 border border-black outline-green-500 w-full" value={education} onChange={handleEducation}>
                  <option value="" disabled>Educational Attainment</option>
                  <option value="No Formal Education">No Formal Education</option>
                  <option value="Elementary/Primary School">Elementary/Primary School</option>
                  <option value="High School/Secondary Education">High School/Secondary Education</option>
                  <option value="Vocational/Technical Education">Vocational/Technical Education</option>
                  <option value="Associate Degree">Associate Degree</option>
                  <option value="Bachelor’s Degree">Bachelor’s Degree</option>
                  <option value="Postgraduate">Postgraduate</option>
                  <option value="Post-Doctoral Studies">Post-Doctoral Studies</option>
                </select>
              </div>

              <div className="w-full">
                <label htmlFor="" className="text-gray-700 text-sm">Course:</label>
                <input type="text" placeholder="Enter Course" className="p-2 border border-black outline-green-500 w-full" value={course} onChange={handleCourse} />
              </div>
            </div>

            <div className="w-full flex gap-5 px-3">
              <div className="w-full ">
                <label htmlFor="" className="text-gray-700 text-sm">Contact Number:</label>
                <input type="text" placeholder="Enter Contact Number" className="p-2 border border-black outline-green-500 w-full" value={contactNumber} onChange={handleContactNumber} />
              </div>

              <div className="w-full">
                <label htmlFor="" className="text-gray-700 text-sm">Email:</label>
                <input type="email" placeholder="Enter Email Address" className="p-2 border border-black outline-green-500 w-full" value={email} onChange={handleEmail} />
              </div>
            </div>

            <div className="px-3 w-full my-3">
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

export default FirtsTimeJobSeeker;
