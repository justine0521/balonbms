import React from 'react'
import AccomplishmentSection from '../Components/AccomplishmentSection'

const Accomplishment = () => {
    return (
        <div>
            <div className="relative w-full h-72 bg-cover bg-center mb-20 py-8 md:py-16">
                <div className="absolute inset-0 flex items-center justify-center mt-24 lg:mt-28">
                    <div className="text-center px-4">
                        <p className="text-xl mb-4 text-green-700 mt-24">Accomplishments</p>
                        <p className="mt-4 text-2xl md:text-4xl font-bold text-green-700 px-0 lg:px-24">
                            Barangay Balon Anito has been recognized for numerous achievements in recent years,
                            demonstrating its commitment to serving the community. Some of the notable accomplishments
                            include:</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col mx-0 lg:mx-10 wrap mt-24 lg:mt-0 md:flex-row mb-10">
                <AccomplishmentSection />
            </div>
        </div>
    );
}


export default Accomplishment
