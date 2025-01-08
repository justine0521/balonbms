import React, { useEffect, useState } from 'react';
import DefaultProfile from '../Images/defaultProfile.png';
import axios from 'axios';
import { FaUserCircle } from 'react-icons/fa';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const Officials = () => {
  const [officials, setOfficials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOfficials = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`${API_BASE_URL}/api/officials`);
        setOfficials(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchOfficials();
  }, []);

  if (loading) return <p className="text-center text-gray-600">Loading...</p>;
  if (error) return <p className="text-center text-red-500">Error: {error}</p>;

  const punongBarangay = officials.find((official) => official.position === 'Punong Barangay');
  const secretary = officials.find((official) => official.position === 'Barangay Secretary');
  const treasurer = officials.find((official) => official.position === 'Barangay Treasurer');
  const kagawad = officials.filter((official) => official.position === 'Barangay Kagawad');
  const chairperson = officials.find((official) => official.position === 'SK Chairperson');

  return (
    <section className="flex flex-col items-center mb-5 max-w-screen-xl mx-auto px-4 py-20">
      <div className="text-center text-black py-10">
        <h1 className="text-5xl font-bold text-green-700">Meet Our Barangay Officials</h1>
        <p className="text-xl text-gray-600 mt-4">Dedicated individuals leading our community with passion and service.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-10">
        {punongBarangay && (
          <div className="group space-y-3 bg-white bg-opacity-70 rounded-xl shadow-xl overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
            <div className="flex justify-center pt-6 rounded-t-xl">
              <img
                src={punongBarangay.imageUrl || DefaultProfile}
                alt={punongBarangay.fullname}
                className="w-28 h-28 rounded-full border-4 border-white object-cover"
              />
            </div>
            <div className="p-4 text-center">
              <FaUserCircle className="mx-auto text-3xl text-gray-700" />
              <p className="font-semibold text-xl text-gray-800">{punongBarangay.fullname}</p>
              <p className="text-sm text-gray-500">{punongBarangay.position}</p>
            </div>
          </div>
        )}

        {secretary && (
          <div className="group space-y-3 bg-white bg-opacity-70 rounded-xl shadow-xl overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
            <div className="flex justify-center pt-6 rounded-t-xl">
              <img
                src={secretary.imageUrl || DefaultProfile}
                alt={secretary.fullname}
                className="w-28 h-28 rounded-full border-4 border-white object-cover"
              />
            </div>
            <div className="p-4 text-center">
              <FaUserCircle className="mx-auto text-3xl text-gray-700" />
              <p className="font-semibold text-xl text-gray-800">{secretary.fullname}</p>
              <p className="text-sm text-gray-500">{secretary.position}</p>
            </div>
          </div>
        )}

        {treasurer && (
          <div className="group space-y-3 bg-white bg-opacity-70 rounded-xl shadow-xl overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
            <div className="flex justify-center pt-6 rounded-t-xl">
              <img
                src={treasurer.imageUrl || DefaultProfile}
                alt={treasurer.fullname}
                className="w-28 h-28 rounded-full border-4 border-white object-cover"
              />
            </div>
            <div className="p-4 text-center">
              <FaUserCircle className="mx-auto text-3xl text-gray-700" />
              <p className="font-semibold text-xl text-gray-800">{treasurer.fullname}</p>
              <p className="text-sm text-gray-500">{treasurer.position}</p>
            </div>
          </div>
        )}

        {kagawad.map((official) => (
          <div key={official.id} className="group space-y-3 bg-white bg-opacity-70 rounded-xl shadow-xl overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
            <div className="flex justify-center pt-6 rounded-t-xl">
              <img
                src={official.imageUrl || DefaultProfile}
                alt={official.fullname}
                className="w-28 h-28 rounded-full border-4 border-white object-cover"
              />
            </div>
            <div className="p-4 text-center">
              <FaUserCircle className="mx-auto text-3xl text-gray-700" />
              <p className="font-semibold text-xl text-gray-800">{official.fullname}</p>
              <p className="text-sm text-gray-500">{official.position}</p>
            </div>
          </div>
        ))}

        {chairperson && (
          <div className="group space-y-3 bg-white bg-opacity-70 rounded-xl shadow-xl overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
            <div className="flex justify-center pt-6 rounded-t-xl">
              <img
                src={chairperson.imageUrl || DefaultProfile}
                alt={chairperson.fullname}
                className="w-28 h-28 rounded-full border-4 border-white object-cover"
              />
            </div>
            <div className="p-4 text-center">
              <FaUserCircle className="mx-auto text-3xl text-gray-700" />
              <p className="font-semibold text-xl text-gray-800">{chairperson.fullname}</p>
              <p className="text-sm text-gray-500">{chairperson.position}</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Officials;
