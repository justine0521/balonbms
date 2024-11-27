import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const Service = () => {
    const [barangayLogo, setBarangayLogo] = useState("");

    useEffect(() => {
        const fetchBarangayInfo = async () => {
          try {
            const response = await fetch(`${API_BASE_URL}/api/barangay-info`);
            if (response.ok) {
              const data = await response.json();
              setBarangayLogo(data.logoUrl || "");
            } else {
              console.error("Failed to fetch Barangay Logo");
            }
          } catch (error) {
            console.error("Error fetching barangay info:", error);
          }
        };
    
        fetchBarangayInfo();
      }, []);
    
    return (
        <section className='w-full flex flex-col justify-center bg-slate-50 '>
            <div className='max-w-screen-2xl mx-auto mt-8'>
                <div className='text-center'>
                    <p className='mt-16 text-xl text-green-500'>Services</p>
                    <p className='py-5 mb-10 px-10 md:px-32 text-4xl font-bold text-green-500'>We now offer online certificates. <br /> You can now easily request a certificate online, making the process faster and more convenient.</p>
                </div>

                <div className='flex flex-col md:flex-row flex-wrap justify-center gap-5 mb-10'>
  
                    <NavLink
                        to={'/barangay-clearance-form'}
                        className=' bg-white flex flex-col scale-95 lg:transform-none md:flex-row w-full lg:w-2/6 h-fit justify-center md:justify-start items-center md:items-start py-5 px-5 rounded-md shadow-md transition-transform duration-200 transform hover:scale-105'>
                        <div className='flex flex-col md:flex-row w-full h-fit justify-center md:justify-start items-center md:items-start'>
                            <img src={barangayLogo} alt='' className='h-24 mb-4 md:mb-0 md:mr-4' />
                            <div className='flex flex-col w-full items-center md:items-start text-center md:text-left'>
                                <p className='font-semibold text-green-500'>Barangay Clearance</p>
                                <p className='text-gray-600'>View the requirements needed for Barangay Clearance and request online now.</p>
                            </div>
                        </div>
                    </NavLink>

                    <NavLink
                        to={'/certificate-of-residency-form'}
                        className=' bg-white flex flex-col scale-95 lg:transform-none md:flex-row w-full lg:w-2/6 h-fit justify-center md:justify-start items-center md:items-start py-5 px-5 rounded-md shadow-md transition-transform duration-200 transform hover:scale-105'>
                        <div className='flex flex-col md:flex-row w-full h-fit justify-center md:justify-start items-center md:items-start'>
                            <img src={barangayLogo} alt='' className='h-24 mb-4 md:mb-0 md:mr-4' />
                            <div className='flex flex-col items-center md:items-start text-center md:text-left'>
                                <p className='font-semibold text-green-500'>Certificate of Residency</p>
                                <p className='text-gray-600'>View the requirements needed for Certificate of Residency and request online now.</p>
                            </div>
                        </div>
                    </NavLink>
                    <NavLink
                        to={'/certificate-of-indigency-form'}
                        className=' bg-white flex flex-col scale-95 lg:transform-none md:flex-row w-full lg:w-2/6 h-fit justify-center md:justify-start items-center md:items-start py-5 px-5 rounded-md shadow-md transition-transform duration-200 transform hover:scale-105'>
                        <div className='flex flex-col md:flex-row w-full h-fit justify-center md:justify-start items-center md:items-start'>
                            <img src={barangayLogo} alt='' className='h-24 mb-4 md:mb-0 md:mr-4' />
                            <div className='flex flex-col items-center md:items-start text-center md:text-left'>
                                <p className='font-semibold text-green-500'>Certificate of Indigency</p>
                                <p className='text-gray-600'>View the requirements needed for Certificate of Indigency and request online now.</p>
                            </div>
                        </div>
                    </NavLink>
                    <NavLink
                        to={'/certificate-for-solo-parent-form'}
                        className=' bg-white flex flex-col scale-95 lg:transform-none md:flex-row w-full lg:w-2/6 h-fit justify-center md:justify-start items-center md:items-start py-5 px-5 rounded-md shadow-md transition-transform duration-200 transform hover:scale-105'>
                        <div className='flex flex-col md:flex-row w-full h-fit justify-center md:justify-start items-center md:items-start'>
                            <img src={barangayLogo} alt='' className='h-24 mb-4 md:mb-0 md:mr-4' />
                            <div className='flex flex-col items-center md:items-start text-center md:text-left'>
                                <p className='font-semibold text-green-500'>Certificate For Solo Parent</p>
                                <p className='text-gray-600'>View the requirements needed for Certificate of Low Income and request online now.</p>
                            </div>
                        </div>
                    </NavLink>
                    <NavLink
                        to={'/business-clearance-form'}
                        className=' bg-white flex flex-col scale-95 lg:transform-none md:flex-row w-full lg:w-2/6 h-fit justify-center md:justify-start items-center md:items-start py-5 px-5 rounded-md shadow-md transition-transform duration-200 transform hover:scale-105'>
                        <div className='flex flex-col md:flex-row w-full h-fit justify-center md:justify-start items-center md:items-start'>
                            <img src={barangayLogo} alt='' className='h-24 mb-4 md:mb-0 md:mr-4' />
                            <div className='flex flex-col items-center md:items-start text-center md:text-left'>
                                <p className='font-semibold text-green-500'>Business Clearance</p>
                                <p className='text-gray-600'>View the requirements needed for Business Clearance and request online now.</p>
                            </div>
                        </div>
                    </NavLink>
                    <NavLink
                        to={'/guardianship-form'}
                        className=' bg-white flex flex-col scale-95 lg:transform-none md:flex-row w-full lg:w-2/6 h-fit justify-center md:justify-start items-center md:items-start py-5 px-5 rounded-md shadow-md transition-transform duration-200 transform hover:scale-105'>
                        <div className='flex flex-col md:flex-row w-full h-fit justify-center md:justify-start items-center md:items-start'>
                            <img src={barangayLogo} alt='' className='h-24 mb-4 md:mb-0 md:mr-4' />
                            <div className='flex flex-col items-center md:items-start text-center md:text-left'>
                                <p className='font-semibold text-green-500'>Guardianship</p>
                                <p className='text-gray-600'>View the requirements needed for Guardianship and request online now.</p>
                            </div>
                        </div>
                    </NavLink>
                    <NavLink
                        to={'/job-seeker-form'}
                        className=' bg-white flex flex-col scale-95 lg:transform-none md:flex-row w-full lg:w-2/6 h-fit justify-center md:justify-start items-center md:items-start py-5 px-5 rounded-md shadow-md transition-transform duration-200 transform hover:scale-105'>
                        <div className='flex flex-col md:flex-row w-full h-fit justify-center md:justify-start items-center md:items-start'>
                            <img src={barangayLogo} alt='' className='h-24 mb-4 md:mb-0 md:mr-4' />
                            <div className='flex flex-col items-center md:items-start text-center md:text-left'>
                                <p className='font-semibold text-green-500'>First Time Job Seeker</p>
                                <p className='text-gray-600'>View the requirements needed for First Time Job Seeker and request online now.</p>
                            </div>
                        </div>
                    </NavLink>
                    <NavLink
                        to={'/common-law-form'}
                        className=' bg-white flex flex-col scale-95 lg:transform-none md:flex-row w-full lg:w-2/6 h-fit justify-center md:justify-start items-center md:items-start py-5 px-5 rounded-md shadow-md transition-transform duration-200 transform hover:scale-105'>
                        <div className='flex flex-col md:flex-row w-full h-fit justify-center md:justify-start items-center md:items-start'>
                            <img src={barangayLogo} alt='' className='h-24 mb-4 md:mb-0 md:mr-4' />
                            <div className='flex flex-col items-center md:items-start text-center md:text-left'>
                                <p className='font-semibold text-green-500'>Common Law</p>
                                <p className='text-gray-600'>View the requirements needed for Common Law and request online now.</p>
                            </div>
                        </div>
                    </NavLink>
                    <NavLink
                        to={'/travel-permit-form'}
                        className=' bg-white flex flex-col scale-95 lg:transform-none md:flex-row w-full lg:w-2/6 h-fit justify-center md:justify-start items-center md:items-start py-5 px-5 rounded-md shadow-md transition-transform duration-200 transform hover:scale-105'>
                        <div className='flex flex-col md:flex-row w-full h-fit justify-center md:justify-start items-center md:items-start'>
                            <img src={barangayLogo} alt='' className='h-24 mb-4 md:mb-0 md:mr-4' />
                            <div className='flex flex-col items-center md:items-start text-center md:text-left'>
                                <p className='font-semibold text-green-500'>Travel Permit</p>
                                <p className='text-gray-600'>View the requirements needed for Travel Permit and request online now.</p>
                            </div>
                        </div>
                    </NavLink>

                </div>
            </div>
        </section>
    )
}

export default Service
