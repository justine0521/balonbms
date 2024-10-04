import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../Images/logowhitebg.png'

import { FaFacebookF, FaPhoneAlt } from 'react-icons/fa';
import { FaLocationDot } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

function Footer() {
  const [barangayName, setBarangayName] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [facebook, setFacebook] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    const fetchBarangayInfo = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/api/barangay-info`)
        if (response.ok) {
          const data = await response.json();
          setBarangayName(data.name)
          setContactNumber(data.contactNumber)
          setFacebook(data.facebook)
          setEmail(data.email)
        } else {
          console.log('Failed to fetch barangay info')
        }
      } catch (error) {
        console.error('Error fetching barangay info:', error);
      }
    }
    fetchBarangayInfo();
  }, [])

  return (
    <footer>
      <div className="footer bg-green-500 p-10 text-white">
        <aside>
          <div className='flex items-center gap-2'>
            <img src={Logo} alt="Balon Anito Logo" className='h-24'/>

            <div className='text-xl text-white'>
              <p>Barangay</p>
              <p>{barangayName}</p>
            </div>
          </div>

          <p className='font-dancing text-xl text-white sm:w-full md:w-3/4'>Maayos na Serbisyo Publiko, Susi sa Progresibong Balon Anito</p>
        </aside>

        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover"><NavLink to={'/barangay-clearance-form'}>Barangay Clearance</NavLink></a>
          <a className="link link-hover" href=''><NavLink to={'/business-clearance-form'}>Business Clearance</NavLink></a>
          <a className="link link-hover" href=''><NavLink to={'/travel-permit-form'}>Travel Permit</NavLink></a>
          <a className="link link-hover" href=''><NavLink to={'/job-seeker-form'}>First Time Job Seeker</NavLink></a>
          <a className="link link-hover" href=''><NavLink to={'/common-law-form'}>Certificate of Common Law</NavLink></a>
          <a className="link link-hover" href=''><NavLink to={'/guardianship-form'}>Certificate of Guardianship</NavLink></a>
          <a className="link link-hover" href=''><NavLink to={'/certificate-of-indigency-form'}>Certificate of Indigency</NavLink></a>
          <a className="link link-hover" href=''><NavLink to={'/certificate-of-residency-form'}>Certificate of Residency</NavLink></a>
          <a className="link link-hover" href=''><NavLink to={'/certificate-for-solo-parent-form'}>Certificate of Solo Parent</NavLink></a>
          
        </nav>

        <nav>
          <h6 className="footer-title">Quik Links</h6>
          <a className="link link-hover"><NavLink to={"/"}>Home</NavLink></a>
          <a className="link link-hover"><NavLink to={"/pages/about"}>About</NavLink></a>
          <a className="link link-hover"><NavLink to={"/pages/service"}>Service</NavLink></a>
          <a className="link link-hover"><NavLink to={"/pages/news"}>News</NavLink></a>
          <a className="link link-hover"><NavLink to={"/pages/faq"}>FAQ</NavLink></a>
          <a className="link link-hover"><NavLink to={"/pages/track-request"}>Track Request</NavLink></a>
        </nav>

        <nav>
          <h6 className="footer-title">Contact Us</h6>

          <li className='flex items-center gap-2'>
            <FaPhoneAlt className='text-white text-xl' />
            {contactNumber}
          </li>

          <a href="https://www.facebook.com/profile.php?id=100092042062918" className='flex items-center gap-2 link link-hover'>
            <FaFacebookF className='text-white text-xl' />
            {facebook}
          </a>
          <a href="mailto:betterbalonanito@gmail.com" className='flex items-center gap-2 link link-hover'>
            <SiGmail className='text-white text-xl' />
            {email}
          </a>
        </nav>
      </div>

    <div className="border-t border-white bg-green-500  p-8 text-center">
      <p className='text-white'><strong>&copy;</strong> {new Date().getFullYear()} <strong className="text-white">Balon Anito.</strong> All rights reserved.</p>
    </div>

    </footer>
  );
}

export default Footer;
