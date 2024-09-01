import React, { useState, useRef, useEffect } from 'react';
import AnnouncementModal from '../Modal/AnnouncementModal';

import DefaultPicture from '../Images/Logo.png';
import Hotspring from '../Images/Hotspring.jpg';
import Picture from '../Images/About-Picture/bg-Picture.jpg';

function Announcement() {
  const [isAnnouncement, SetIsAnnouncement] = useState(true);
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

  // Sample announcement data
  const announcements = [
    {
      title: 'Bigayan ng ayuda',
      content:
        'Bukas po ay bigayan ng ayuda simula 9AM to 12PM. Maaring dalhin po ang mga sumusunod na requirements 1 valid ID, limang manok, limang baka at limang kambing at sabay sabay natin lutuin. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum, maxime! Nobis modi accusamus veniam beatae ex consectetur voluptatibus laboriosam libero assumenda id, quo sed, vitae, laborum optio hic cum voluptatem! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur tempore autem sint. Assumenda autem dolore totam sequi voluptas voluptates consectetur laudantium unde laborum, fuga dolores temporibus beatae quo ipsum quia?',
      date: 'September 2, 2024',
      image: Hotspring,
    },
    {
      title: 'Road Repair Advisory',
      content:
        'Bukas po ay bigayan ng ayuda simula 9AM to 12PM. Maaring dalhin po ang mga sumusunod na requirements 1 valid ID, limang manok, limang baka at limang kambing at sabay sabay natin lutuin. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum, maxime! Nobis modi accusamus veniam beatae ex consectetur voluptatibus laboriosam libero assumenda id, quo sed, vitae, laborum optio hic cum voluptatem! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur tempore autem sint. Assumenda autem dolore totam sequi voluptas voluptates consectetur laudantium unde laborum, fuga dolores temporibus beatae quo ipsum quia?',
      date: 'September 1, 2024',
      image: Hotspring,
    },
    {
      title: 'Road Repair Advisory',
      content:
        'Bukas po ay bigayan ng ayuda simula 9AM to 12PM. Maaring dalhin po ang mga sumusunod na requirements 1 valid ID, limang manok, limang baka at limang kambing at sabay sabay natin lutuin. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum, maxime! Nobis modi accusamus veniam beatae ex consectetur voluptatibus laboriosam libero assumenda id, quo sed, vitae, laborum optio hic cum voluptatem! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur tempore autem sint. Assumenda autem dolore totam sequi voluptas voluptates consectetur laudantium unde laborum, fuga dolores temporibus beatae quo ipsum quia?',
      date: 'September 1, 2024',
      image: Hotspring,
    },
    {
      title: 'Road Repair Advisory',
      content:
        'Bukas po ay bigayan ng ayuda simula 9AM to 12PM. Maaring dalhin po ang mga sumusunod na requirements 1 valid ID, limang manok, limang baka at limang kambing at sabay sabay natin lutuin. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum, maxime! Nobis modi accusamus veniam beatae ex consectetur voluptatibus laboriosam libero assumenda id, quo sed, vitae, laborum optio hic cum voluptatem! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur tempore autem sint. Assumenda autem dolore totam sequi voluptas voluptates consectetur laudantium unde laborum, fuga dolores temporibus beatae quo ipsum quia?',
      date: 'September 1, 2024',
      image: Hotspring,
    },
  ];

  return (
    <section>
      <div className='relative h-96 w-full bg-cover bg-center' style={{ backgroundImage: `url(${Picture})` }}>
        <div className='absolute inset-0 bg-black bg-opacity-50'></div>

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
        <div className='flex flex-wrap justify-center gap-6 p-6'>
          {announcements.map((announcement, index) => (
            <div
              key={index}
              className='flex w-full md:w-[500px] h-48 bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105'
            >
              <img
                src={announcement.image}
                alt={announcement.title}
                className='w-48 h-full object-cover'
              />
              <div className='flex flex-col justify-between p-4'>
                <div>
                  <h2 className='text-md font-semibold text-green-500'>{announcement.title}</h2>
                  <p className='text-xs text-gray-400'>Posted on: {announcement.date}</p>
                </div>
                <p ref={textRef} className='text-sm text-gray-500 overflow-hidden overflow-ellipsis line-clamp-3'>
                  {announcement.content}
                </p>
                {isOverflowing && (
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className='text-sm text-green-500 hover:underline mt-2 self-start'
                  >
                    Read More
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      <AnnouncementModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}

export default Announcement;
