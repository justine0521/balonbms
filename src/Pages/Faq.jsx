import React, { useState } from 'react';
import { MdOutlineArrowDropDown } from "react-icons/md";
import faq_image from '../Images/annie_faq.png';

const Faq = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };
    return (
        <div className='max-w-5xl mx-auto p-6 mt-5'>
            <p className='mt-16 text-l text-green-500 text-center'>Barangay Balon Common FAQ'S</p>
            <p className='text-5xl mt-2 text-green-500 font-semibold text-center'>Frequently Asked Question</p>

            <div className='mt-12 flex flex-col md:flex-row gap-8'>
                <div className='w-full md:w-1/2'>
                    <img src={faq_image} alt='FAQ Image' className='w-full h-auto rounded-lg' />
                </div>

                <div className='w-full md:w-1/2'>
                    <div className='faq-container'>
                        <hr className='-mt-2 border-t border-gray-300' />
                        <div className='faq-box mb-6 '>
                            <h3
                                className={`flex items-center text-2xl font-semibold text-gray-800 cursor-pointer ${activeIndex === 0 ? 'active' : ''}`}
                                onClick={() => toggleAccordion(0)}
                            >
                                Paano ako makakapag-request ng Certificate?
                                <MdOutlineArrowDropDown className={`ml-1 flex-shrink-0 transition-transform duration-300 ${activeIndex === 0 ? 'rotate-180' : ''}`} />
                            </h3>
                            {activeIndex === 0 && (
                                <p className='text-gray-600 mt-2'>
                                    Puwede kang mag-request ng certification sa aming website. Pindutin lamang ang "Services" sa navigation bar ng website, piliin kung anong uri ng certificate ang iyong kailangan, punan ang kinakailangang impormasyon, at i-submit ang iyong request.
                                </p>
                            )}
                        </div>

                        <hr className='-mt-2 border-t border-gray-300' />
                        <div className='faq-box mb-6'>
                            <h3
                                className={`flex items-center text-2xl font-semibold text-gray-800 cursor-pointer ${activeIndex === 1 ? 'active' : ''}`}
                                onClick={() => toggleAccordion(1)}
                            >
                                Ano-anong uri ng mga certification ang pwedeng i-request sa website na ito?
                                <MdOutlineArrowDropDown className={`ml-1 flex-shrink-0 transition-transform duration-300 ${activeIndex === 1 ? 'rotate-180' : ''}`} />
                            </h3>
                            {activeIndex === 1 && (
                                <p className='text-gray-600 mt-2'>
                                    Ang mga residente ay maaaring mag-request ng Barangay Clearance, Certificate of Residency, Indigency Certificate, at iba pang certification na inaalok ng barangay. Pindutin lamang ang "Services" sa navigation bar oh sa loob ng menubar ng website.
                                </p>
                            )}
                        </div>

                        <hr className='-mt-2 border-t border-gray-300' />
                        <div className='faq-box mb-6'>
                            <h3
                                className={`flex items-center text-2xl font-semibold text-gray-800 cursor-pointer ${activeIndex === 2 ? 'active' : ''}`}
                                onClick={() => toggleAccordion(2)}
                            >
                                May bayad ba ang pag-request ng certificate?
                                <MdOutlineArrowDropDown className={`ml-1 flex-shrink-0 transition-transform duration-300 ${activeIndex === 2 ? 'rotate-180' : ''}`} />
                            </h3>
                            {activeIndex === 2 && (
                                <p className='text-gray-600 mt-2'>
                                    Opo, mayroong kaukulang bayad para sa bawat certification. Makikita mo ito bago ka magsubmit ng iyong request.
                                </p>
                            )}
                        </div>

                        <hr className='-mt-2 border-t border-gray-300' />
                        <div className='faq-box mb-6'>
                            <h3
                                className={`flex items-center text-2xl font-semibold text-gray-800 cursor-pointer ${activeIndex === 3 ? 'active' : ''}`}
                                onClick={() => toggleAccordion(3)}
                            >
                                Paano ko mababayaran ang aking request?
                                <MdOutlineArrowDropDown className={`ml-1 flex-shrink-0 transition-transform duration-300 ${activeIndex === 3 ? 'rotate-180' : ''}`} />
                            </h3>
                            {activeIndex === 3 && (
                                <p className='text-gray-600 mt-2'>
                                    Para sa proseso ng pagbabayad ng inyong request, inaanyayahan namin kayong bumisita sa Barangay Hall. Dito, maaaring pag-usapan ang kabuuang halaga ng bayad kasama ang mga opisyal ng barangay upang matiyak na maayos at transparent ang transaksyon.
                                </p>
                            )}
                        </div>

                        <hr className='-mt-2 border-t border-gray-300' />
                        <div className='faq-box mb-6'>
                            <h3
                                className={`flex items-center text-2xl font-semibold text-gray-800 cursor-pointer ${activeIndex === 4 ? 'active' : ''}`}
                                onClick={() => toggleAccordion(4)}
                            >
                                Ano ang gagawin ko kung sakaling may problema sa aking request?
                                <MdOutlineArrowDropDown className={`ml-1 flex-shrink-0 transition-transform duration-300 ${activeIndex === 4 ? 'rotate-180' : ''}`} />
                            </h3>
                            {activeIndex === 4 && (
                                <p className='text-gray-600 mt-2'>
                                    Kung may anumang problema o katanungan, puwede kang magtanong muna sa aming chatbot na matatagpuan sa website. Kung hindi pa rin maresolba ang iyong concern, maaari kang makipag-ugnayan sa barangay office gamit ang contact details na nasa website.
                                </p>
                            )}
                        </div>
                        <hr className='-mt-2 border-t border-gray-300' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Faq;
