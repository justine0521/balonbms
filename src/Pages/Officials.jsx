import React, { useEffect, useState } from 'react';
import DefaultProfile from '../Images/defaultProfile.png';
import Logo from '../Images/Logo.png'
import axios from 'axios';

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

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  const punongBarangay = officials.find((official) => official.position === 'Punong Barangay');
  const secretary = officials.find((official) => official.position === 'Barangay Secretary')
  const treasurer = officials.find((official) => official.position === 'Barangay Treasurer')
  const kagawad = officials.filter((official) => official.position === 'Barangay Kagawad');
  const chairperson = officials.find((official) => official.position === 'SK Chairperson');

  return (
    <section className="flex flex-col items-center mb-5 max-w-screen-xl mx-auto">
      <div className="relative w-full bg-cover bg-center">
        <div className="relative inset-0 flex items-center justify-center">
          <div className="text-center text-black px-10 pt-10">
            <h1 className="text-5xl font-bold mb-4 text-green-500">Our Officials</h1>
          </div>
        </div>
      </div>

      <div className="h-fit px-4 pb-12 w-[90%] relative">

        {punongBarangay && (
          <div className="text-center mb-10 z-10">
            <img  src={punongBarangay.imageUrl || DefaultProfile } alt={punongBarangay.fullname} className="w-24 h-24 mx-auto rounded border border-gray-400"/>
            <p className="font-medium">{punongBarangay.fullname}</p>
            <p className="text-gray-600 text-sm">{punongBarangay.position}</p>
          </div>
        )}

        <div className='flex flex-wrap justify-around items-center mb-10 gap-10'>
          {secretary && (
            <div>
              <img  src={secretary.imageUrl || DefaultProfile } alt={secretary.fullname} className="w-24 h-24 mx-auto rounded border border-gray-400"/>
              <p className="font-medium">{secretary.fullname}</p>
              <p className="text-gray-600 text-sm text-center">{secretary.position}</p>
            </div>
          )}

          {treasurer && (
            <div>
              <img src={treasurer.imageUrl || DefaultProfile } alt={treasurer.fullname} className="w-24 h-24 mx-auto rounded border border-gray-400"/>
              <p className="font-medium">{treasurer.fullname}</p>
              <p className="text-gray-600 text-sm text-center">{treasurer.position}</p>
            </div>
          )}
        </div>

        <div className="flex flex-wrap justify-evenly text-center gap-10 mt-10">
          {kagawad.map((official) => (
            <div key={official.id} className="text-center">
              <img src={official.imageUrl || DefaultProfile} alt={official.fullname} className="w-24 h-24 mx-auto rounded border border-gray-400"/>
              <p className="font-medium">{official.fullname}</p>
              <p className="text-gray-600 text-sm">{official.position}</p>
            </div>
          ))}

          {chairperson && (
            <div className="text-center">
              <img src={chairperson.imageUrl || DefaultProfile} alt={chairperson.fullname} className="w-24 h-24 mx-auto rounded border border-gray-400" />
              <p className="font-medium">{chairperson.fullname}</p>
              <p className="text-gray-600 text-sm">{chairperson.position}</p>
            </div>
          )}

          {/* <div className='flex items-center justify-center absolute top-0 h-full'>
            <img src={Logo} alt="" className='w-full h-full opacity-20'/>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Officials;
