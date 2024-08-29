import React from 'react';
import kap_image from '../Images/kap_image.png';
import kap_image2 from '../Images/kap_image2.png';
import map from '../Images/PHMap.png';

const Captain = () => {
  return (
    <section className="relative flex flex-col lg:flex-row items-center bg-white p-8">
      <div className="lg:w-1/3 w-full flex flex-col items-center">
      <div className="absolute inset-0 z-0 opacity-30">
        <img
          src={map}
          alt="Philippine Map"
          className="w-80 h-80 object-cover"
        />
      </div>
        <img
          src={kap_image}
          alt="Jeffrey P. Campaña"
          className="w-64 h-64 relative" 
        />
        <div className="text-center">
          <img
            src={kap_image2}
            alt="Campaña Natin Pakinggan Natin"
            className="mt-2 w-200"
          />
        </div>
      </div>
      <div className="lg:w-2/3 w-full mt-8 lg:mt-0 lg:pr-8 relative z-10 lg:ml-[-1rem]">
        <h2 className="text-2xl font-bold">Celso M. Solano</h2>
        <p className="text-xl italic mt-4">
            "A true leader does not create separation, A true leader brings people together." - Tendai Ruben Mbofana
        </p>
        <p className="mt-6 text-gray-700">
            Barangay Captain Celso M. Solano, an accomplished advocate for working people and a proud product of the District.
            Barangay Captain Celso M. Solano started serving since 2013. Learn more about Barangay Captain Celso M. Solano and read his blog.
        </p>
        <button className="mt-8 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700 transition duration-200">
            Contact Us
        </button>
    </div>
    </section>
  );
}

export default Captain;
