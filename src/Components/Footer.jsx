import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../Images/Logo2.png'

import { FaFacebookF, FaPhoneAlt } from 'react-icons/fa';
import { FaLocationDot } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";

function Footer() {
    return (
        <footer className="bg-green-100 text-gray-600 py-10">
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-5">
                {/* Logo Section */}
                <div className="flex flex-col space-y-4">
                    <div className='flex items-center gap-1'>
                      <img src={Logo} alt="" className='h-20'/>
                      <h2 className="text-xl text-green-500 font-semibold">Barangay <br /> Balon Anito</h2>
                    </div>

                    <p className='font-dancing text-xl'>
                      Maayos na Serbisyo Publiko, Susi sa Progresibong Balon Anito
                    </p>
                </div>

                {/* Links Section */}
                <div>
                    <h3 className="text-xl text-green-500 font-semibold mb-4">Quick Links</h3>
                    <div className='flex space-x-10'>
                      <ul className="space-y-2">
                        <li className="hover:underline"><NavLink to={"/pages/home"}>Home</NavLink></li>
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
                    <h3 className="text-xl text-green-500 font-semibold mb-4">Community</h3>
                    <ul className="space-y-2">
                        <li className='flex gap-2'><FaLocationDot className='text-green-500 text-xl'/>National Road, Barangay Hall, Balon Anito, Mariveles Bataan</li>
                    </ul>
                </div>

                {/* Contact Section */}
                <div>
                    <h3 className="text-xl text-green-500 font-semibold mb-4">Contact Us</h3>
                    <ul className="space-y-2">
                        <li className='flex items-center gap-2'><FaPhoneAlt className='text-green-500 text-xl'/>(047) 240-5500</li>
                        <li><a href="https://www.facebook.com/profile.php?id=100092042062918" className='flex items-center gap-2 hover:underline'><FaFacebookF className='text-green-500 text-xl'/>Better Balon Anito</a></li>
                        <li><a href="mailto:betterbalonanito@gmail.com" className='flex items-center gap-2 hover:underline'><SiGmail className='text-green-500 text-xl'/>betterbalonanito@gmail.com</a></li>
                    </ul>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p><strong>&copy;</strong>2024 <strong className="text-green-500">Balon Anito</strong> || All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
