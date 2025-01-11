import { HashLink } from 'react-router-hash-link';
import { useContext, useEffect, useState } from 'react';
// import { ActiveSectionContext } from './ActiveSectionContext';
import { NavLink } from 'react-router-dom';

const Navbar = ({ containerStyles }) => {

  return (
    <nav className={containerStyles}>
      <NavLink to={'/'}>
        {({ isActive }) => (
          <button className={`${isActive ? 'text-green-700 text-sm  flex-1 border-b-2 border-b-green-700' : 'hover:text-green-500'} font-medium p-2`}>
            Home
          </button>
        )}
      </NavLink>

      <NavLink to={'/pages/service'}>
        {({ isActive }) => (
          <button className={`${isActive ? 'text-green-700 text-sm flex-1 border-b-2 border-b-green-700' : 'hover:text-green-500'} font-medium p-2`}>
            Services
          </button>
        )}
      </NavLink>

      <NavLink to={'/pages/about'}>
        {({ isActive }) => (
          <button className={`${isActive ? 'text-green-700 text-sm flex-1 border-b-2 border-b-green-700' : 'hover:text-green-500'} font-medium p-2`}>
            History
          </button>
        )}
      </NavLink>

      <NavLink to={'/pages/news'}>
        {({ isActive }) => (
          <button className={`${isActive ? 'text-green-700 text-sm flex-1 border-b-2 border-b-green-700' : 'hover:text-green-500'} font-medium p-2`}>
            Announcement
          </button>
        )}
      </NavLink>

      <NavLink to={'/pages/faq'}>
        {({ isActive }) => (
          <button className={`${isActive ? 'text-green-700 text-sm flex-1 border-b-2 border-b-green-700' : 'hover:text-green-500'} font-medium p-2`}>
            FAQ's
          </button>
        )}
      </NavLink>

      {/* <NavLink to={'/pages/track-request'}>
        {({ isActive }) => (
          <button className={`${isActive ? 'text-green-400 text-sm font-semibold flex-1 border-b-2 border-b-green-400' : 'hover:text-green-500'} p-2`}>
            Track Request
          </button>
        )}
      </NavLink> */}

    </nav>
  );
};

export default Navbar;
