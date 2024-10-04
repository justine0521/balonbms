import React from 'react'
import Logo from '../Images/Logo2.png'
import { NavLink } from 'react-router-dom'

const Service = () => {
    return (
        <section className='w-full flex flex-col justify-center bg-slate-50'>
            <div className='mt-8 text-center'>
                <p className='mt-16 text-xl text-green-500'>Services</p>
                {/* <br /> Note that the cash on delivery will may vary on type of certificate you're requesting because some certificate need a documents requirements. */}
                <p className='py-5 mb-10 px-10 md:px-32 text-4xl font-bold text-green-500'>We now offer online certificate. <br /> Thru online you may now request a certificate and deliver it to your home safely and faster. </p>
            </div>

            <div className='flex flex-col md:flex-row flex-wrap justify-center gap-5 mb-10'>
                {/* <div className='bg-white flex flex-col md:flex-row w-full lg:w-2/6 h-fit justify-center md:justify-start items-center md:items-start py-5 px-5 rounded-md shadow-md transition-transform duration-200 transform hover:scale-105'>
                    <img src={Logo} alt='' className='h-24 mb-4 md:mb-0 md:mr-4' />
                    <div className='flex flex-col items-center md:items-start text-center md:text-left'>
                        <p className='font-semibold text-green-500'>Certificate of Indigency</p>
                        <p className='text-gray-600'>View the requirements needed for Barangay Clearance and acquire online now.</p>
                    </div>
                </div> */}

                <NavLink
                    to={'/barangay-clearance-form'}
                    className=' bg-white flex flex-col scale-95 lg:transform-none md:flex-row w-full lg:w-2/6 h-fit justify-center md:justify-start items-center md:items-start py-5 px-5 rounded-md shadow-md transition-transform duration-200 transform hover:scale-105'>
                    <div className='flex flex-col md:flex-row w-full h-fit justify-center md:justify-start items-center md:items-start'>
                        <img src={Logo} alt='' className='h-24 mb-4 md:mb-0 md:mr-4' />
                        <div className='flex flex-col w-full items-center md:items-start text-center md:text-left'>
                            <p className='font-semibold text-green-500'>Barangay Clearance</p>
                            <p className='text-gray-600'>View the requirements needed for Barangay Clearance and acquire online now.</p>
                        </div>
                    </div>
                </NavLink>

                <NavLink
                    to={'/certificate-of-residency-form'}
                    className=' bg-white flex flex-col scale-95 lg:transform-none md:flex-row w-full lg:w-2/6 h-fit justify-center md:justify-start items-center md:items-start py-5 px-5 rounded-md shadow-md transition-transform duration-200 transform hover:scale-105'>
                    <div className='flex flex-col md:flex-row w-full h-fit justify-center md:justify-start items-center md:items-start'>
                        <img src={Logo} alt='' className='h-24 mb-4 md:mb-0 md:mr-4' />
                        <div className='flex flex-col items-center md:items-start text-center md:text-left'>
                            <p className='font-semibold text-green-500'>Certificate of Residency</p>
                            <p className='text-gray-600'>View the requirements needed for Certificate of Residency and acquire online now.</p>
                        </div>
                    </div>
                </NavLink>
                <NavLink
                    to={'/certificate-of-indigency-form'}
                    className=' bg-white flex flex-col scale-95 lg:transform-none md:flex-row w-full lg:w-2/6 h-fit justify-center md:justify-start items-center md:items-start py-5 px-5 rounded-md shadow-md transition-transform duration-200 transform hover:scale-105'>
                    <div className='flex flex-col md:flex-row w-full h-fit justify-center md:justify-start items-center md:items-start'>
                        <img src={Logo} alt='' className='h-24 mb-4 md:mb-0 md:mr-4' />
                        <div className='flex flex-col items-center md:items-start text-center md:text-left'>
                            <p className='font-semibold text-green-500'>Certificate of Indigency</p>
                            <p className='text-gray-600'>View the requirements needed for Certificate of Indigency and acquire online now.</p>
                        </div>
                    </div>
                </NavLink>
                <NavLink
                    to={'/certificate-for-solo-parent-form'}
                    className=' bg-white flex flex-col scale-95 lg:transform-none md:flex-row w-full lg:w-2/6 h-fit justify-center md:justify-start items-center md:items-start py-5 px-5 rounded-md shadow-md transition-transform duration-200 transform hover:scale-105'>
                    <div className='flex flex-col md:flex-row w-full h-fit justify-center md:justify-start items-center md:items-start'>
                        <img src={Logo} alt='' className='h-24 mb-4 md:mb-0 md:mr-4' />
                        <div className='flex flex-col items-center md:items-start text-center md:text-left'>
                            <p className='font-semibold text-green-500'>Certificate For Solo Parent</p>
                            <p className='text-gray-600'>View the requirements needed for Certificate of Low Income and acquire online now.</p>
                        </div>
                    </div>
                </NavLink>
                <NavLink
                    to={'/business-clearance-form'}
                    className=' bg-white flex flex-col scale-95 lg:transform-none md:flex-row w-full lg:w-2/6 h-fit justify-center md:justify-start items-center md:items-start py-5 px-5 rounded-md shadow-md transition-transform duration-200 transform hover:scale-105'>
                    <div className='flex flex-col md:flex-row w-full h-fit justify-center md:justify-start items-center md:items-start'>
                        <img src={Logo} alt='' className='h-24 mb-4 md:mb-0 md:mr-4' />
                        <div className='flex flex-col items-center md:items-start text-center md:text-left'>
                            <p className='font-semibold text-green-500'>Business Clearance</p>
                            <p className='text-gray-600'>View the requirements needed for Business Clearance and acquire online now.</p>
                        </div>
                    </div>
                </NavLink>
                <NavLink
                    to={'/guardianship-form'}
                    className=' bg-white flex flex-col scale-95 lg:transform-none md:flex-row w-full lg:w-2/6 h-fit justify-center md:justify-start items-center md:items-start py-5 px-5 rounded-md shadow-md transition-transform duration-200 transform hover:scale-105'>
                    <div className='flex flex-col md:flex-row w-full h-fit justify-center md:justify-start items-center md:items-start'>
                        <img src={Logo} alt='' className='h-24 mb-4 md:mb-0 md:mr-4' />
                        <div className='flex flex-col items-center md:items-start text-center md:text-left'>
                            <p className='font-semibold text-green-500'>Guardianship</p>
                            <p className='text-gray-600'>View the requirements needed for Guardianship and acquire online now.</p>
                        </div>
                    </div>
                </NavLink>
                <NavLink
                    to={'/job-seeker-form'}
                    className=' bg-white flex flex-col scale-95 lg:transform-none md:flex-row w-full lg:w-2/6 h-fit justify-center md:justify-start items-center md:items-start py-5 px-5 rounded-md shadow-md transition-transform duration-200 transform hover:scale-105'>
                    <div className='flex flex-col md:flex-row w-full h-fit justify-center md:justify-start items-center md:items-start'>
                        <img src={Logo} alt='' className='h-24 mb-4 md:mb-0 md:mr-4' />
                        <div className='flex flex-col items-center md:items-start text-center md:text-left'>
                            <p className='font-semibold text-green-500'>First Time Job Seeker</p>
                            <p className='text-gray-600'>View the requirements needed for First Time Job Seeker and acquire online now.</p>
                        </div>
                    </div>
                </NavLink>
                <NavLink
                    to={'/common-law-form'}
                    className=' bg-white flex flex-col scale-95 lg:transform-none md:flex-row w-full lg:w-2/6 h-fit justify-center md:justify-start items-center md:items-start py-5 px-5 rounded-md shadow-md transition-transform duration-200 transform hover:scale-105'>
                    <div className='flex flex-col md:flex-row w-full h-fit justify-center md:justify-start items-center md:items-start'>
                        <img src={Logo} alt='' className='h-24 mb-4 md:mb-0 md:mr-4' />
                        <div className='flex flex-col items-center md:items-start text-center md:text-left'>
                            <p className='font-semibold text-green-500'>Common Law</p>
                            <p className='text-gray-600'>View the requirements needed for Common Law and acquire online now.</p>
                        </div>
                    </div>
                </NavLink>
                <NavLink
                    to={'/travel-permit-form'}
                    className=' bg-white flex flex-col scale-95 lg:transform-none md:flex-row w-full lg:w-2/6 h-fit justify-center md:justify-start items-center md:items-start py-5 px-5 rounded-md shadow-md transition-transform duration-200 transform hover:scale-105'>
                    <div className='flex flex-col md:flex-row w-full h-fit justify-center md:justify-start items-center md:items-start'>
                        <img src={Logo} alt='' className='h-24 mb-4 md:mb-0 md:mr-4' />
                        <div className='flex flex-col items-center md:items-start text-center md:text-left'>
                            <p className='font-semibold text-green-500'>Travel Permit</p>
                            <p className='text-gray-600'>View the requirements needed for Travel Permit and acquire online now.</p>
                        </div>
                    </div>
                </NavLink>

            </div>


        </section>
    )
}

export default Service
