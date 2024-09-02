import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../Images/logowhitebg.png'

import { FaFacebookF, FaPhoneAlt } from 'react-icons/fa';
import { FaLocationDot } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";

function Footer() {
  return (
    <footer className="bg-green-500 text-white py-10">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-5">
        {/* Logo Section */}
        <div className="flex flex-col space-y-4">
          <div className='flex items-center gap-1'>
            <img src={Logo} alt="" className='h-20' />
            <h2 className="text-xl text-white font-semibold">Barangay <br /> Balon Anito</h2>
          </div>

          <p className='font-dancing text-xl'>
            Maayos na Serbisyo Publiko, <br />Susi sa Progresibong Balon Anito
          </p>
        </div>

        {/* Links Section */}
        <div>
          <h3 className="text-xl text-white font-semibold mb-4 mt-4 lg:mt-0">Quick Links</h3>
          <div className='flex space-x-10'>
            <ul className="space-y-2">
              <li className="hover:underline"><NavLink to={"/"}>Home</NavLink></li>
              <li className="hover:underline"><NavLink to={"/pages/about"}>About</NavLink></li>
              <li className="hover:underline"><NavLink to={"/pages/service"}>Service</NavLink></li>
              <li className="hover:underline"><NavLink to={"/pages/news"}>News</NavLink></li>
            </ul>

            <ul className='space-y-2'>
              <li className="hover:underline"><NavLink to={"/pages/faq"}>FAQ</NavLink></li>
              <li className="hover:underline"><NavLink to={"/pages/track-request"}>Track Request</NavLink></li>
            </ul>
          </div>
        </div>

        {/* Community Section */}
        <div>
          <h3 className="text-xl text-white font-semibold mb-4 mt-4 lg:mt-0">Community</h3>
          <ul className="space-y-2">
            <li className='flex items-center gap-2'>National Road, Barangay Hall, Balon Anito, Mariveles Bataan</li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="text-xl text-white font-semibold mb-4 mt-4 lg:mt-0">Contact Us</h3>
          <ul className="space-y-2">
            <li className='flex items-center gap-2'><FaPhoneAlt className='text-white text-xl' />(047) 240-5500</li>
            <li><a href="https://www.facebook.com/profile.php?id=100092042062918" className='flex items-center gap-2 hover:underline'><FaFacebookF className='text-white text-xl' />Better Balon Anito</a></li>
            <li><a href="mailto:betterbalonanito@gmail.com" className='flex items-center gap-2 hover:underline'><SiGmail className='text-white text-xl' />betterbalonanito@gmail.com</a></li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-white mt-8 pt-8 text-center">
        <p><strong>&copy;</strong>2024 <strong className="text-white">Balon Anito</strong> || All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
