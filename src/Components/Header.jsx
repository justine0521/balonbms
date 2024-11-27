import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import { MdMenu, MdClose } from "react-icons/md";
import { useLocation } from "react-router-dom";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

function Header() {
  const [menuOpened, setMenuOpened] = useState(false);
  const [barangayName, setBarangayName] = useState("");
  const [barangayLogo, setBarangayLogo] = useState("");
  const location = useLocation();

  const toggleMenu = () => setMenuOpened(!menuOpened);

  useEffect(() => {
    const fetchBarangayInfo = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/api/barangay-info`);
        if (response.ok) {
          const data = await response.json();
          setBarangayLogo(data.logoUrl || "");
          setBarangayName(data.name);
        } else {
          console.error("Failed to fetch barangay info");
        }
      } catch (error) {
        console.error("Error fetching barangay info:", error);
      }
    };

    fetchBarangayInfo();
  }, []);

  useEffect(() => {
    setMenuOpened(false);
  }, [location]);

  return (
    <header className="bg-white fixed top-0 left-0 w-screen h-fit max-w-screen-xxl mx-auto px-10 z-50 border-b-2">
      <div className="flex justify-between items-center py-3">
        <div className="flex items-center justify-center gap-x-1">
          <img src={barangayLogo} alt="Logo" className="h-10" />
          <p className="text-xl text-green-500">{barangayName}</p>
        </div>

        <Navbar containerStyles="hidden md:flex gap-x-3 xl:gap-x-10 medium-15" />

        <div
          className={`md:hidden fixed top-0 left-0 w-full h-full z-40 flex flex-col items-center justify-center gap-y-8 transition-transform duration-500 ease-in-out ${
            menuOpened
              ? "translate-x-0 opacity-100"
              : "-translate-x-full opacity-0"
          }`}
          style={{
            backdropFilter: "blur(10px)",
            backgroundColor: "rgba(255, 255, 255, 0.7)",
          }}
        >
          <Navbar containerStyles="flex flex-col items-center gap-y-5 medium-16 animate-fade-in" />

          <MdClose
            onClick={toggleMenu}
            className="absolute top-5 right-5 cursor-pointer text-green-500 hover:ring-orange-400 p-2 h-10 w-10 rounded-full transition-transform duration-300 hover:scale-110"
          />
        </div>

        {!menuOpened && (
          <MdMenu
            onClick={toggleMenu}
            className="md:hidden cursor-pointer text-green-500 hover:ring-orange-400 p-2 h-10 w-10 rounded-full transition-transform duration-300 hover:scale-110"
          />
        )}
      </div>
    </header>
  );
}

export default Header;
