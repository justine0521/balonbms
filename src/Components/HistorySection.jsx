import React from 'react';
import HistoryImage from '../Images/BalonSpring.jpg';
import SpringImage from '../Images/picture1.jpg';

const HistorySection = () => {
    return (
        <div>
            <div className="bg-white p-4 lg:mr-10 lg:flex lg:items-center lg:gap-10">

                {/* FIRST HISTORY SECTION */}
                <div className="w-full lg:w-1/2 flex flex-col gap-8">
                    <h1 className="text-green-700 text-2xl font-semibold">History of Barangay Balon Anito</h1>
                    <p className="text-sm">
                        Barangay Balon Anito has a rich and fascinating history that stretches back over several centuries. The name “Balon Anito” is deeply rooted in local folklore. The word "Balon" refers to a spring or a well, a vital resource for early settlers, while "Anito" is a term that refers to the ancestral spirits revered by the community. This sacred spring, according to local tradition, was the gathering place where the ancestors would honor these spirits, seeking their wisdom, protection, and blessings for prosperity.
                    </p>
                    <p className="text-sm">
                        Over the years, Barangay Balon Anito evolved from a small, tight-knit community into a vibrant and dynamic neighborhood. The people of Balon Anito are known for their resilience, hard work, and strong sense of community. As the barangay expanded, it managed to preserve its rich cultural heritage while embracing the changes brought about by modernization. Today, Barangay Balon Anito serves as a living testament to the harmonious balance between honoring the past and progressing towards a brighter future.
                    </p>
                </div>

                <div className="w-full lg:w-1/2 lg:mt-0 mt-8 flex justify-center rounded">
                    <img
                        src={HistoryImage}
                        alt="History"
                        className="max-w-full rounded-2xl"
                        width={900}
                        height={900}
                    />
                </div>

            </div>

            <div className="bg-white p-4 lg:mr-10 lg:flex lg:items-center lg:gap-10 mb-10">

                {/* SECOND HISTORY SECTION */}
                <div className="w-full lg:w-1/2 lg:mt-0 mt-8 flex justify-center rounded">
                    <img
                        src={SpringImage}
                        alt="Sacred Spring"
                        className="max-w-full rounded-2xl"
                        width={900}
                        height={900}
                    />
                </div>

                <div className="w-full lg:w-1/2 flex flex-col gap-8">
                    <h1 className="text-green-700 text-2xl font-semibold">Sacred Spring and its Significance</h1>
                    <p className="text-sm">
                        The sacred spring, which is the origin of the name "Balon," has long been an essential part of the barangay’s identity. The spring was once a source of life for the early settlers who relied on it for water. It was not only a physical resource but also held a spiritual significance. People would visit the spring to honor the Anito spirits, believing that their offerings would ensure the community’s safety and prosperity. This tradition continues to be a cornerstone of the barangay's cultural practices today.
                    </p>
                    <p className="text-sm">
                        As Barangay Balon Anito grew, the spring remained a revered site, embodying the enduring connection between the people and their ancestral roots. It symbolizes the barangay's values of unity, spirituality, and resilience, bridging the gap between past and present. Today, the spring is not just a historical landmark but a reminder of the enduring strength of the community and its deep respect for nature and heritage.
                    </p>
                    <div className="inline-block">
                        <a href='https://www.philatlas.com/luzon/r03/bataan/mariveles/balon-anito.html?' target='blank'>
                            <button className="mt-2 bg-green-700 text-white px-4 py-2 rounded hover:bg-green-700 transition duration-200 w-auto">
                                Learn More
                            </button>
                        </a>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default HistorySection;
