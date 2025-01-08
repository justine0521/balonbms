import React, { useState } from 'react';
import '../App.css';

import HistorySection from '../Components/HistorySection';
import AccomplishmentSection from '../Components/AccomplishmentSection';

function About() {


    return (
        <section className='mb-10 h-fit lg:mx-20 mt-10 lg:mt-0'>
            <div className='max-w-screen-xl mx-auto'>
                <div className="relative w-full h-72 bg-cover bg-center">
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center text-white px-10 mt-48 lg:mt-0">
                            <h1 className="text-5xl font-bold mb-4 text-green-700">About Barangay Balon Anito</h1>
                            <p className="text-2xl text-green-700">Welcome to Barangay Balon Anito, a vibrant and inclusive community.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col mx-0 lg:mx-10 wrap mb-0 md:flex-row border-b-2 border-green-700">
                <HistorySection />
            </div>

            <div className="relative w-full h-72 bg-cover bg-center mb-20">
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white px-10 pt-10 mt-48 lg:mt-0">
                        <h1 className="text-2xl font-bold mb-4 text-green-700">Accomplishments</h1>
                        <p className="text-lg text-black">
                            Barangay Balon Anito has been recognized for numerous achievements in recent years,
                            demonstrating its commitment to serving the community. Some of the notable accomplishments
                            include:</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col mx-0 lg:mx-10 wrap mt-0 md:flex-row mb-10">
                <AccomplishmentSection />
            </div>

        </section>



    );
}

export default About;
