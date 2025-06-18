import React, { useState } from "react";
import { HashLink } from "react-router-hash-link";
import Barangay from "../Images/barangay.png";
import Hotline from "../Images/Hotline.jpg";
import SplitText from "../Text-Styling/SplitText";

import { FaPhoneSquareAlt } from "react-icons/fa";
import { IoIosClock } from "react-icons/io";
import { TiInfoLarge } from "react-icons/ti";
import { IoMdClose } from "react-icons/io";

function Hero2() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="h-screen mt-16 relative">
      <img src={Barangay} alt="Barangay" className="h-[70%] w-full object-cover opacity-75"/>

      <div className="absolute top-0 left-0 w-full h-[70%] bg-gradient-to-b from-green-700/90 to-black/80"></div>

      <div className="absolute w-full top-[35%] mt-5 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
        <p className="text-xl">Welcome to</p>

        <SplitText text="BARANGAY BALON ANITO" className="md:text-6xl text-5xl font-semibold text-center" delay={100} animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }} animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }} easing="easeOutCubic" threshold={0.2} rootMargin="-50px" />

        <p className="mt-3 px-3 md:text-2xl text-lg font-dancing">
          Maayos na Serbisyo Publiko, Susi sa Progresibong Balon Anito
        </p>

        <div className="mt-10 w-full flex flex-wrap gap-3 items-center justify-center">
          <HashLink smooth to={`#captain`}>
            <button className="border border-white text-white px-5 py-2 rounded-lg bg-transparent hover:bg-white hover:text-green-500">
              Learn More
            </button>
          </HashLink>

          <HashLink to={"/pages/service"}>
            <button className="border border-white text-white px-5 py-2 rounded-lg bg-transparent hover:bg-white hover:text-green-500">
              Services
            </button>
          </HashLink>
        </div>
      </div>

      <div className="absolute flex items-center justify-center w-full z-20">
        <div className="bg-white w-4/5 h-auto md:-mt-14 -mt-6 shadow-xl max-w-screen-xl mx-auto flex flex-wrap gap-5 justify-evenly items-center px-5 md:py-5 py-3">
          <div className="flex flex-col items-center gap-2 text-center">
            <FaPhoneSquareAlt className="text-5xl text-red-500" />
            
            <p className="text-lg font-semibold text-red-600">
              Emergency Hotline
            </p>
            
            <button onClick={() => setIsModalOpen(true)} className="text-gray-600 text-sm hover:underline">
              View Hotlines
            </button>
          </div>

          <div className="flex flex-col items-center gap-2 text-center">
            <IoIosClock className="text-5xl text-blue-500" />
            
            <p className="text-lg font-semibold text-blue-600">
              Barangay Open Hours
            </p>
            
            <p className="text-gray-600 text-sm">Monday - Friday: 8 AM - 5 PM</p>
          </div>

          <div className="flex flex-col items-center gap-2 text-center">
            <TiInfoLarge className="text-5xl text-yellow-500" />
            
            <p className="text-lg font-semibold text-yellow-500">
              Other Information
            </p>
            
            <p className="text-gray-600 text-sm">Details to be added soon.</p>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50 animate-fadeIn">
          <div className="absolute top-5 right-5">
            <button onClick={() => setIsModalOpen(false)} className="text-white text-4xl hover:text-gray-300">
              <IoMdClose />
            </button>
          </div>
          
          <div className="w-full h-full flex items-center justify-center p-5">
            <img src={Hotline} alt="Emergency Hotline" className="max-w-full max-h-full rounded-md" />
          </div>
        </div>
      )}
    </section>
  );
}

export default Hero2;
