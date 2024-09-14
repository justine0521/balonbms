import React, { useRef, useState, useEffect } from 'react';
import { IoMdClose } from 'react-icons/io';
import { BsFullscreen, BsFullscreenExit } from 'react-icons/bs';
import '../App.css'; // Assuming you have global styles in App.css
import { format } from 'date-fns';

import Hotspring from '../Images/Hotspring.jpg';

function AnnouncementModal({ isOpen, onClose, announcement }) {
    const imageRef = useRef(null); // Reference to the image
    const [isFullscreen, setIsFullscreen] = useState(false); 

    const handleFullscreen = () => {
        if (imageRef.current) {
            if (imageRef.current.requestFullscreen) {
                imageRef.current.requestFullscreen();
            } else if (imageRef.current.webkitRequestFullscreen) {
                imageRef.current.webkitRequestFullscreen();
            } else if (imageRef.current.msRequestFullscreen) {
                imageRef.current.msRequestFullscreen();
            }
        }
    };

    const handleExitFullscreen = () => {
        if (document.fullscreenElement) {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            } else if (document.webkitExitFullscreen) {
                document.webkitExitFullscreen();
            } else if (document.msExitFullscreen) {
                document.msExitFullscreen();
            }
        }
    };

    useEffect(() => {
        const handleFullscreenChange = () => {
            setIsFullscreen(!!document.fullscreenElement);
        };

        document.addEventListener('fullscreenchange', handleFullscreenChange);

        return () => {
            document.removeEventListener('fullscreenchange', handleFullscreenChange);
        };
    }, []);

    if (!isOpen || !announcement) return null;

    return (
        <section className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-60 z-50 overflow-auto">
            <div className="relative bg-white w-[90%] max-w-[750px] max-h-[90%] m-4 rounded-2xl shadow-xl overflow-y-auto no-scrollbar">
                <div className="relative">
                    {/* Header Image */}
                    <img
                        ref={imageRef} // Attach the ref to the image element
                        src={announcement.imageUrl || Hotspring}
                        alt={announcement.title}
                        className={`w-full h-96 rounded-t-2xl ${isFullscreen ? 'object-contain' : 'object-cover'}`}
                    />

                    {!isFullscreen && (
                        <button onClick={handleFullscreen} className="absolute top-4 left-4 text-blue-500 bg-white rounded-full p-2 shadow-md transition-all duration-300 hover:bg-blue-500 hover:text-white focus:outline-none">
                            <BsFullscreen size={20} />
                        </button>
                    )}

                    {isFullscreen && (
                        <button onClick={handleExitFullscreen} className="fixed top-4 right-4 z-50 text-red-500 bg-white rounded-full p-2 shadow-md transition-all duration-300 hover:bg-red-500 hover:text-white focus:outline-none">
                            <BsFullscreenExit size={20} />
                        </button>
                    )}

                    {!isFullscreen && (
                        <button onClick={onClose} className="fixed top-4 right-4 text-red-500 bg-white rounded-full p-2 shadow-md transition-all duration-300 hover:bg-red-500 hover:text-white focus:outline-none" >
                            <IoMdClose size={20} />
                        </button>
                    )}
                </div>

                <div className="w-full p-6">
                    <h1 className="text-2xl text-green-600 font-bold">{announcement.title}</h1>
                    <p className='text-xs text-gray-400 mb-4'>Posted on: {format(new Date(announcement.createdAt), 'Pp')}</p>
                    <hr />
                    <br />
                    <div
                        className="text-sm text-gray-600 leading-relaxed mb-4"
                        dangerouslySetInnerHTML={{ __html: announcement.description }}
                    />
                </div>
            </div>
        </section>
    );
}

export default AnnouncementModal;
