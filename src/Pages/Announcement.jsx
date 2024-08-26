import React, { useState, useRef, useEffect } from 'react';
import AnnouncementModal from '../Modal/AnnouncementModal';

import DefaultPicture from '../Images/Logo.png';
import Hotspring from '../Images/Hotspring.jpg'
import Picture from '../Images/About-Picture/bg-Picture.jpg';

function Announcement() {

    const [isAnnouncement, SetIsAnnouncement] = useState(true)
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isOverflowing, setIsOverflowing] = useState(false);
    const textRef = useRef(null);

    useEffect(() => {
        const checkOverflow = () => {
        if (textRef.current) {
            const { scrollHeight, clientHeight } = textRef.current;
            setIsOverflowing(scrollHeight > clientHeight);
        }
        };

        checkOverflow();
        window.addEventListener('resize', checkOverflow);

        return () => window.removeEventListener('resize', checkOverflow);
    }, []);

  return (
    <section>
      <div className='relative h-96 w-full bg-cover bg-center' style={{ backgroundImage: `url(${Picture})` }}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        <div className="relative flex justify-center items-center h-full z-10 p-4 text-white">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mt-20">ANNOUNCEMENT</h1>
        </div>
      </div>

      {!isAnnouncement && (
        <div className='h-96 w-full flex justify-center items-center'>
            <h1 className='text-5xl font-semibold text-green-500'>There is no Announcement</h1>
        </div>
      )}

      {isAnnouncement && (
        <div className='flex flex-wrap justify-center gap-10 h-fit m-8 mx-10'>
            <div className='flex flex-wrap md:flex-nowrap justify-center relative rounded shadow-xl drop-shadow-xl'>
                <img src={Hotspring} alt="Hotspring" className='w-full md:w-96 h-56 object-fit p-1 rounded-lg' />

                <div className='w-full md:w-[450px] px-3'>
                    <h1 className='text-lg text-green-500 font-semibold'>Bigayan ng ayuda</h1>

                    <p ref={textRef} className='text-sm  text-gray-500 overflow-hidden overflow-ellipsis line-clamp-6'>
                        Bukas po ay bigayan ng ayuda simula 9AM to 12PM. Maaring dalhin po ang mga sumusunod na requirements 1 valid ID, limang manok, limang baka at limang kambing at sabay sabay natin lutuin. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum, maxime! Nobis modi accusamus veniam beatae ex consectetur voluptatibus laboriosam libero assumenda id, quo sed, vitae, laborum optio hic cum voluptatem! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur tempore autem sint. Assumenda autem dolore totam sequi voluptas voluptates consectetur laudantium unde laborum, fuga dolores temporibus beatae quo ipsum quia?
                        Ut atque corporis veritatis corrupti facere ab odit nulla ducimus suscipit? Nihil, veritatis eligendi? Aliquam rerum culpa distinctio ratione enim, doloribus nostrum voluptate ea, laborum eaque veniam inventore porro error?
                    </p>

                    {isOverflowing && (
                        <button onClick={() => setIsModalOpen(true)} className='flex items-center text-sm float-end p-2 mt-2 text-green-500 hover:underline'>
                            Read More
                        </button>
                    )}
                </div>
            </div>
        </div>
      )}

      <AnnouncementModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}

export default Announcement;
