import React, { useState, useRef, useEffect } from 'react';
import AnnouncementModal from '../Modal/AnnouncementModal';
import axios from 'axios';
import { format } from 'date-fns';
import DefaultPicture from '../Images/Logo.png';
import Picture from '../Images/About-Picture/bg-Picture.jpg';
import '../App.css'

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

function Announcement() {
  const [isAnnouncement, setIsAnnouncement] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [overflowingAnnouncements, setOverflowingAnnouncements] = useState({});
  const [announcements, setAnnouncements] = useState([]);
  const [selectedAnnouncement, setSelectedAnnouncement] = useState(null);
  const textRefs = useRef([]);
  const [currentPage, setCurrentPage] = useState(1);
  const announcementsPerPage = 10;

  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  // Fetch announcements when component mounts
  useEffect(() => {
    const fetchAnnouncements = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/api/announcements`);

        const sortedAnnouncements = response.data.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );
        setAnnouncements(sortedAnnouncements);
        setIsAnnouncement(sortedAnnouncements.length > 0);
        setLoading(sortedAnnouncements)
      } catch (error) {
        console.error('Error fetching announcements:', error);
        setError("Failed to fetch the Barangay Announcement. Please try again later.")
        setIsAnnouncement(false);
      }
    };

    fetchAnnouncements();
  }, []);

  useEffect(() => {
    const checkOverflow = () => {
      const newOverflowingAnnouncements = {};
      textRefs.current.forEach((ref, index) => {
        if (ref) {
          const { scrollHeight, clientHeight } = ref;
          newOverflowingAnnouncements[index] = scrollHeight > clientHeight;
        }
      });
      setOverflowingAnnouncements(newOverflowingAnnouncements);
    };

    checkOverflow();
    window.addEventListener('resize', checkOverflow);

    return () => window.removeEventListener('resize', checkOverflow);
  }, [announcements]);

  const totalPages = Math.ceil(announcements.length / announcementsPerPage);
  const indexOfLastAnnouncement = currentPage * announcementsPerPage;
  const indexOfFirstAnnouncement = indexOfLastAnnouncement - announcementsPerPage;
  const currentAnnouncements = announcements.slice(indexOfFirstAnnouncement, indexOfLastAnnouncement);

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  if (error) {
    return (
      <div className="flex flex-col justify-center items-center h-screen">
        <p className="font-semibold text-red-500">{error}</p>
      </div>
    );
  }

  if (!loading) {
    return (
      <div className="flex flex-col justify-center items-center h-screen">
        <div className="loading">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <p className='font-semibold text-green-500'>Fetching Data...</p>
      </div>
    );
  }

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
          {currentAnnouncements.map((announcement, index) => (
            <div
              key={index}
              className='flex flex-col sm:flex-row w-full md:w-[500px] bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105'
            >
              <img
                src={announcement.imageUrl || DefaultPicture}
                alt={announcement.title}
                className='w-full sm:w-48 h-48 sm:h-auto object-cover'
              />
              <div className='flex flex-col justify-between p-4 flex-1'>
                <div>
                  <h2 className='text-md font-semibold text-green-500'>{announcement.title}</h2>
                  <p className='text-xs text-gray-400 mb-2'>Posted on: {format(new Date(announcement.createdAt), 'Pp')}</p>
                  <hr />
                </div>
                <div
                  ref={el => (textRefs.current[index] = el)}
                  className='text-sm text-gray-500 overflow-hidden line-clamp-3'
                  dangerouslySetInnerHTML={{ __html: announcement.description }}
                />
                {overflowingAnnouncements[index] && (
                  <button
                    onClick={() => {
                      setSelectedAnnouncement(announcement);
                      setIsModalOpen(true);
                    }}
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

      {totalPages > 1 && (
        <div className="flex justify-center my-4 w-full">
          <button onClick={handlePreviousPage} disabled={currentPage === 1} className={`px-4 py-2 mx-2 rounded ${currentPage === 1 ? 'bg-gray-300 cursor-not-allowed' : 'bg-green-500 text-white hover:bg-green-600'}`}>
            Previous
          </button>

          <span className="px-4 py-2 mx-2">Page {currentPage} of {totalPages}</span>

          <button onClick={handleNextPage} disabled={currentPage === totalPages} className={`px-4 py-2 mx-2 rounded ${currentPage === totalPages ? 'bg-gray-300 cursor-not-allowed' : 'bg-green-500 text-white hover:bg-green-600'}`} >
            Next
          </button>
        </div>
      )}

      <AnnouncementModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        announcement={selectedAnnouncement}
      />
    </section>
  );
}

export default Announcement;
