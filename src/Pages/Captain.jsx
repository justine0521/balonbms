import React, { useState, useEffect } from 'react';
import axios from 'axios';
import kap_image2 from '../Images/kap_image2.png'; // Still using local image for secondary display
import map from '../Images/PHMap.png';
import '../App.css'

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const Captain = () => {
  const [captain, setCaptain] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCaptain = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/api/officials`);
        // Filter the official who is the Barangay Captain
        const barangayCaptain = response.data.find(
          official => official.position.toLowerCase() === 'barangay captain' || official.position.toLowerCase() === 'punong barangay'
        );
        setCaptain(barangayCaptain);
      } catch (error) {
        console.error("Error fetching the barangay captain data:", error);
        setError("Failed to fetch the Barangay Captain's data. Please try again later."); 
      }
    };

    fetchCaptain();
  }, []);

  if (error) {
    return (
      <div className="flex flex-col justify-center items-center h-screen">
        <p className="font-semibold text-red-500">{error}</p>
      </div>
    );
  }

  if (!captain) {
    return (
      <div className="flex flex-col justify-center items-center h-screen">
        <div className="loading">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <p className='font-semibold text-green-500'>Loading...</p>
      </div>
    );
  }

  return (
    <section className="relative flex flex-col lg:flex-row items-center bg-white p-8 max-w-screen-xl mx-auto">
      <div className="lg:w-1/3 w-full flex flex-col items-center">
        <div className="absolute inset-0 z-0 opacity-30">
          <img
            src={map}
            alt="Philippine Map"
            className="w-80 h-80 object-cover"
          />
        </div>
        <img
          src={captain.imageUrl} // Use the S3 image URL
          alt={captain.fullname}
          className="w-64 h-64 relative object-cover"
        />
        <div className="text-center">
          <img
            src={kap_image2}
            alt="Campaña Natin Pakinggan Natin"
            className="mt-2 w-200"
          />
        </div>
      </div>
      <div className="lg:w-2/3 w-full mt-8 lg:mt-0 lg:pr-8 relative z-10 lg:ml-[-1rem]">
        <h2 className="text-2xl font-bold">{captain.fullname}</h2>
        <p className="text-xl italic mt-4">
          "A true leader does not create separation, A true leader brings people together." - Tendai Ruben Mbofana
        </p>
        <p className="mt-6 text-gray-700">
          {`Barangay Captain ${captain.fullname}, an accomplished advocate for working people and a proud product of the District.
          Barangay Captain ${captain.fullname} started serving since ${captain.startYear}. Learn more about Barangay Captain ${captain.fullname} and read his blog.`}
        </p>
        <button className="mt-8 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700 transition duration-200">
          Contact Us
        </button>
      </div>
    </section>
  );
};

export default Captain;
