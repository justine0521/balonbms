import React, { useState } from 'react';
import { IoMdSearch } from "react-icons/io";
import { FaRegCalendarAlt, FaRegClock, FaRegListAlt, FaCertificate } from "react-icons/fa";
import axios from 'axios';

function TrackRequest() {
  // State for tracking input and request details
  const [trackingCode, setTrackingCode] = useState('');
  const [requestDetails, setRequestDetails] = useState(null);
  const [error, setError] = useState('');

  // Function to handle the search button click
  const handleSearch = async () => {
    if (!trackingCode) {
      setError('Please enter a tracking number.');
      setRequestDetails(null);
      return;
    }

    try {
      const response = await axios.get(`http://localhost:5000/api/track-request/${trackingCode}`);
      setRequestDetails(response.data);
      setError('');
    } catch (err) {
      setError('Tracking code not found or server error.');
      setRequestDetails(null);
    }
  };

  return (
    <section className='bg-white w-full px-10 py-24 min-h-screen flex flex-col justify-center'>
      <div className='flex flex-col h-auto justify-center lg:mx-28'>
        <div className='w-fit'>
          <p className='text-4xl text-green-500 font-semibold'>Track Requested Certificate</p>
          <p className='mt-3 text-gray-600'>Enter your Tracking Number below to track your certificate.</p>
        </div>

        {/* Input and Button */}
        <div className='flex gap-x-5 mt-10'>
          <input
            type="text"
            name='tracking'
            id='tracking'
            value={trackingCode}
            onChange={(e) => setTrackingCode(e.target.value)}
            className='p-2 w-3/4 border-2 rounded outline-green-500 focus:ring-2 focus:ring-green-400'
            placeholder="Enter Tracking Code"
          />
          <button
            className='text-white py-2 px-5 rounded flex items-center justify-center gap-x-1 bg-green-500 hover:bg-green-400 shadow-md'
            onClick={handleSearch}
          >
            <IoMdSearch />
            Search
          </button>
        </div>

        {/* Error Message */}
        {error && <p className='mt-4 text-red-500 font-semibold'>{error}</p>}

        {/* Display Request Details */}
        {requestDetails && (
          <div className='mt-10 p-6 rounded-lg bg-white shadow-md border border-gray-200'>
            <h3 className='text-2xl font-semibold text-green-500 mb-4'>Request Details</h3>
            <div className='flex items-center mb-3'>
              <FaRegListAlt className='text-green-500 mr-2' />
              <p className='text-gray-700 font-medium'>Tracking Code: <span className='font-normal'>{trackingCode}</span></p>
            </div>
            <div className='flex items-center mb-3'>
              <FaCertificate className='text-green-500 mr-2' />
              <p className='text-gray-700 font-medium'>Document: <span className='font-normal'>{requestDetails.certificateType}</span></p>
            </div>
            <div className='flex items-center mb-3'>
              <FaRegCalendarAlt className='text-green-500 mr-2' />
              <p className='text-gray-700 font-medium'>Date Requested: <span className='font-normal'>{new Date(requestDetails.dateRequested).toLocaleDateString()}</span></p>
            </div>
            <div className='flex items-center mb-3'>
              <FaRegClock className='text-green-500 mr-2' />
              <p className='text-gray-700 font-medium'>Current Status: <span className={`font-normal ${requestDetails.currentStatus === 'Completed' ? 'text-green-500' : 'text-yellow-500'}`}>{requestDetails.currentStatus}</span></p>
            </div>
            <div className='flex items-center'>
              <FaRegClock className='text-green-500 mr-2' />
              <p className='text-gray-700 font-medium'>Last Update: <span className='font-normal'>{new Date(requestDetails.lastUpdate).toLocaleDateString()}</span></p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default TrackRequest;
