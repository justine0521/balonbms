import React from 'react'
import HistoryImage from '../Images/BalonHistory.png';

const HistorySection = () => {
    return (
        <div className="bg-white p-4 lg:mr-10 lg:flex lg:items-center lg:gap-10 mb-10">

            {/* PLAYFUL SECTIONS */}
            <div className="w-full lg:w-1/2 flex flex-col gap-8">
                <h1 className="text-green-700 text-2xl font-semibold">History</h1>
                <p className="text-sm">
                    Barangay Balon Anito has a rich history that dates back several decades. The name “Balon Anito”
                    originates from local folklore, where "Balon" means "spring" or "well," and "Anito" refers to the
                    ancestral spirits worshipped by early settlers in the region. According to tradition, the barangay was
                    named after a sacred spring where ancestors gathered to honor the spirits, seeking guidance,
                    protection, and prosperity.
                </p>
                <p className="text-sm">
                    As the years passed, Barangay Balon Anito developed from a small, close-knit community into a
                    vibrant and diverse neighborhood. Known for its resilient and industrious people, the barangay has
                    grown and adapted, preserving its cultural heritage while embracing progress and modernization.
                    Today, Barangay Balon Anito stands as a symbol of unity, bridging past and present to create a
                    bright future for its residents.
                </p>
                <div className="inline-block">
                    <button className="mt-2 bg-green-700 text-white px-4 py-2 rounded hover:bg-green-700 transition duration-200 w-auto">
                        More Details
                    </button>
                </div>


            </div>

            <div className="w-full lg:w-1/2 lg:mt-0 mt-8 flex justify-center rounded">
                <img
                    src={HistoryImage}
                    alt="History"
                    className="max-w-full rounded-sm"
                    width={900}
                    height={900}
                />
            </div>

        </div>

    )
}

export default HistorySection