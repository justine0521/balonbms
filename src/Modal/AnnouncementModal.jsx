import React from 'react';
import { IoMdClose } from 'react-icons/io';
import '../App.css'; // Assuming you have global styles in App.css

import Hotspring from '../Images/Hotspring.jpg';

function AnnouncementModal({ isOpen, onClose }) {
    if (!isOpen) return null;

    return (
        <section className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-60 z-50 overflow-auto">
            <div className="relative bg-white w-[90%] max-w-[750px] max-h-[90%] m-4 rounded-2xl shadow-xl overflow-y-auto no-scrollbar">
                <div className="relative">
                    {/* Header Image */}
                    <img
                        src={Hotspring}
                        alt="Hotspring"
                        className="w-full h-72 object-cover rounded-t-2xl"
                    />

                    {/* Close Button */}
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 text-red-500 bg-white rounded-full p-2 shadow-md transition-all duration-300 hover:bg-red-500 hover:text-white focus:outline-none"
                    >
                        <IoMdClose size={20} />
                    </button>
                </div>

                {/* Content */}
                <div className="w-full p-6">
                    <h1 className="text-2xl text-green-600 mb-4 font-bold">Bigayan ng ayuda</h1>
                    <p className="text-sm text-gray-600 leading-relaxed mb-4">
                        Bukas po ay bigayan ng ayuda simula 9AM to 12PM. Maaring dalhin po ang mga sumusunod na requirements 1 valid ID, limang manok, limang baka at limang kambing at sabay sabay natin lutuin. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum, maxime! Nobis modi accusamus veniam beatae ex consectetur voluptatibus laboriosam libero assumenda id, quo sed, vitae, laborum optio hic cum voluptatem! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur tempore autem sint. Assumenda autem dolore totam sequi voluptas voluptates consectetur laudantium unde laborum, fuga dolores temporibus beatae quo ipsum quia?
                        Ut atque corporis veritatis corrupti facere ab odit nulla ducimus suscipit? Nihil, veritatis eligendi? Aliquam rerum culpa distinctio ratione enim, doloribus nostrum voluptate ea, laborum eaque veniam inventore porro error?
                    </p>
                </div>
            </div>
        </section>
    );
}

export default AnnouncementModal;
