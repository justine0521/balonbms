import React, { useState, useEffect } from 'react';
import { MdOutlineArrowDropDown } from "react-icons/md";
import faq_image from '../Images/annie_faq.png';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const Faq = () => {
    const [activeIndex, setActiveIndex] = useState(null);
    const [faqs, setFaqs] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [loading, setLoading] = useState(true); // New state for loading
    const itemsPerPage = 5;

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    useEffect(() => {
        const fetchFaqs = async () => {
            setLoading(true); // Set loading to true while fetching data
            try {
                const response = await fetch(`${API_BASE_URL}/api/faqs`);
                if (response.ok) {
                    const data = await response.json();
                    setFaqs(data);
                } else {
                    console.error('Failed to fetch FAQs');
                }
            } catch (error) {
                console.error('Error fetching FAQs:', error);
            } finally {
                setLoading(false); // Set loading to false after data is fetched
            }
        };

        fetchFaqs();
    }, []);

    const totalPages = Math.ceil(faqs.length / itemsPerPage);
    const paginatedFaqs = faqs.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    const handleNext = () => {
        if (currentPage < totalPages) {
            setCurrentPage((prev) => prev + 1);
        }
    };

    const handlePrevious = () => {
        if (currentPage > 1) {
            setCurrentPage((prev) => prev - 1);
        }
    };

    return (
        <div className='max-w-5xl mx-auto p-6 mt-5'>
            <p className='mt-16 text-xl text-green-700 text-center'>Barangay Balon Common FAQ'S</p>
            <p className='text-5xl mt-2 text-green-700 font-semibold text-center'>Frequently Asked Questions</p>

            <div className='mt-12 flex flex-col md:flex-row gap-8'>
                <div className='w-full md:w-1/2'>
                    <img src={faq_image} alt='FAQ Image' className='w-full h-auto rounded-lg' />
                </div>

                <div className='w-full md:w-1/2'>
                    {loading ? (
                        <p className="text-gray-500 text-center">Loading...</p>
                    ) : faqs.length === 0 ? (
                        <p className="text-gray-500 text-center">No FAQ's available at the moment.</p>
                    ) : (
                        <>
                            <div className='faq-container'>
                                {paginatedFaqs.map((faq, index) => (
                                    <div key={index} className='faq-box mb-6'>
                                        <hr className='-mt-2 border-t border-gray-300' />
                                        
                                        <h3 className={`flex items-center text-2xl font-semibold text-gray-800 cursor-pointer ${ activeIndex === index ? 'active' : '' }`} onClick={() => toggleAccordion(index)}>
                                            <p>{faq.question}</p>
                                            <MdOutlineArrowDropDown className={`ml-1 flex-shrink-0 transition-transform duration-300 ${ activeIndex === index ? 'rotate-180' : '' }`}/>
                                        </h3>

                                        {activeIndex === index && (
                                            <p className='text-gray-600 mt-2'>{faq.answer}</p>
                                        )}
                                    </div>
                                ))}
                                <hr className='-mt-2 border-t border-gray-300' />
                            </div>

                            {faqs.length > itemsPerPage && (
                                <div className="flex justify-center items-center gap-4 my-6 w-full px-5">
                                    <button onClick={handlePrevious} disabled={currentPage === 1} className={`flex items-center gap-2 px-5 py-2 rounded-full border text-sm font-medium transition-colors duration-200 ${ currentPage === 1 ? 'bg-gray-200 text-gray-400 cursor-not-allowed border-gray-300' : 'bg-green-700 text-white hover:bg-green-800 border-green-00' }`}>
                                        <FaChevronLeft /> Previous
                                    </button>
                                
                                    <div className="flex items-center gap-2 text-sm">
                                        <span className="text-gray-500">Page</span>
                                        <span className="font-semibold text-gray-800">{currentPage}</span>
                                        <span className="text-gray-500">of</span>
                                        <span className="font-semibold text-gray-800">{totalPages}</span>
                                    </div>
                                
                                    <button onClick={handleNext} disabled={currentPage === totalPages} className={`flex items-center gap-2 px-5 py-2 rounded-full border text-sm font-medium transition-colors duration-200 ${ currentPage === totalPages ? 'bg-gray-200 text-gray-400 cursor-not-allowed border-gray-300' : 'bg-green-700 text-white hover:bg-green-800 border-green-700' }`}>
                                        Next <FaChevronRight />
                                    </button>
                                </div>
                            )}
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Faq;
