import React from 'react';
import '../App.css';

import DefaultPicture from '../Images/Logo.png';
import Hotspring from '../Images/Hotspring.jpg';

import { IoMdClose } from 'react-icons/io';

function AnnouncementModal({ isOpen, onClose }) {
    if (!isOpen) return null;

    return (
        <section className="fixed inset-0 flex justify-center items-center bg-gray-800 bg-opacity-75 z-50 overflow-auto">
            <div className="relative bg-white w-[90%] max-w-[750px] max-h-[90%] m-4 rounded-xl overflow-y-auto no-scrollbar">
                <div className="relative">
                    <img src={Hotspring} alt="Hotspring" className="w-full h-80 rounded-t-xl" />
                    
                    <button onClick={onClose} className="absolute top-3 right-3 text-red-500 text-2xl p-1 bg-white rounded-lg">
                        <IoMdClose />
                    </button>
                </div>

                <div className="w-full p-5">
                    <h1 className="text-lg text-green-500 mb-3 font-semibold">Bigayan ng ayuda</h1>
                    
                    <p className="text-sm text-gray-500">
                        Bukas po ay bigayan ng ayuda simula 9AM to 12PM. Maaring dalhin po ang mga sumusunod na requirements 1 valid ID, limang manok, limang baka at limang kambing at sabay sabay natin lutuin. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum, maxime! Nobis modi accusamus veniam beatae ex consectetur voluptatibus laboriosam libero assumenda id, quo sed, vitae, laborum optio hic cum voluptatem! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur tempore autem sint. Assumenda autem dolore totam sequi voluptas voluptates consectetur laudantium unde laborum, fuga dolores temporibus beatae quo ipsum quia?
                        Ut atque corporis veritatis corrupti facere ab odit nulla ducimus suscipit? Nihil, veritatis eligendi? Aliquam rerum culpa distinctio ratione enim, doloribus nostrum voluptate ea, laborum eaque veniam inventore porro error?
                    </p>
                </div>
            </div>
        </section>
    );
}

export default AnnouncementModal;
