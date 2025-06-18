import React, { useState } from 'react';
import '../App.css';

import HistorySection from '../Components/HistorySection';
import AccomplishmentSection from '../Components/AccomplishmentSection';

function About() {

    return (
        <section className='mb-10 h-fit lg:mx-20 mt-10 lg:mt-0'>
            <div className='max-w-screen-xl mx-auto'>
                <div className="relative w-full mt-0 lg:mt-24 h-72 bg-cover bg-center">
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center text-white px-10 mt-48 lg:mt-0">
                            <p className="mt-4 text-2xl md:text-xl  mb-4 text-green-700">History of Barangay Balon Anito</p>
                            <p className="text-4xl text-green-700 font-semibold">Welcome to Barangay Balon Anito, a vibrant and inclusive community.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col mx-0 lg:mx-10 wrap mb-0 md:flex-row border-b-2 border-green-700">
                <HistorySection />
            </div>
        </section>



    );
}

export default About;
