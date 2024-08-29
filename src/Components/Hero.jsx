import React from 'react';
import { NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import Balon from '../Images/Balon-Logo.jpg';
import Logo from '../Images/Logo.png'
import Picture0 from "../Images/picture0.png";
import Picture1 from '../Images/picture1.png'
import Picture2 from '../Images/picture2.png'
import Picture3 from '../Images/picture3.png'
import '../App.css';

function Hero() {
  return (

    <section className='relative flex justify-center items-center min-h-screen bg-white px-6'>
      <div className='absolute inset-0 bg-green-500 clip-slant'></div>

      <div className='relative flex flex-col md:flex-row-reverse justify-between items-center max-w-screen-xl mx-auto z-10'>

        <div className='flex flex-col justify-center items-center md:items-start text-center md:text-left w-full md:w-auto order-1 md:order-2 mt-20'>
          <p className='text-4xl font-semibold text-white'>Dedicated to Serving You</p>
          <p className='text-6xl font-semibold text-white mt-4'>BARANGAY <br />BALON ANITO</p>
          <p className='mt-5 text-white text-xl'>Reliable Public Service, Strengthening Our Community's Foundation </p>

          <div className='mt-5'>
            <NavLink to={'/#learn-more'}>
              <button className='bg-white text-green-500 px-5 py-2 rounded-lg hover:bg-green-100'>Learn More</button>
            </NavLink>

            <NavLink to={'/pages/service'}>
              <button className='ml-4 border border-white text-white px-5 py-2 rounded-lg bg-transparent hover:bg-white hover:text-green-500'>Services</button>
            </NavLink>
          </div>
        </div>

        <div className='flex flex-wrap md:flex-nowrap items-center gap-5 w-full md:w-3/6 h-fit justify-center md:justify-end order-2 md:order-1 mt-10 md:mt-0'>

          <div className='w-full md:w-64 mt-12'>
            <img src={Picture0} alt='Image 1' className='w-full h-40 object-cover rounded-2xl shadow-2xl transition-transform duration-200 transform hover:scale-105' />
            <img src={Picture1} alt='Image 1' className='w-full h-40 mt-5 object-cover rounded-2xl shadow-2xl transition-transform duration-200 transform hover:scale-105' />
          </div>

          <div className='flex flex-wrap md:flex-col gap-5'>
            <div className='w-full h-40 transition-transform duration-200 transform hover:scale-105'>
              <img src={Picture2} alt='Image 2' className='w-full h-full object-cover rounded-2xl shadow-2xl' />
            </div>

            <div className='w-full h-40 transition-transform duration-200 transform hover:scale-105'>
              <img src={Picture3} alt='Image 3' className='w-full h-full object-cover rounded-2xl shadow-2xl' />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;
