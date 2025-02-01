import React, { useState, useEffect } from "react";
import { FaWhatsapp, FaInstagram, FaFacebook } from "react-icons/fa";
import Marquee from "react-fast-marquee";


const Header = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formattedDate = currentTime.toLocaleDateString();
  const formattedTime = currentTime.toLocaleTimeString();

  return (
    <header className="bg-[var(--glsr-red)] text-white p-2">
      <div className="flex flex-col md:flex-row items-center justify-between md:justify-end space-y-2 md:space-y-0 md:space-x-4 md:mr-10">
             <span>
             <Marquee className="  p-2 text-md">
            Welcome to Delhi NCR 
          </Marquee>
             </span>
        {/* Date and Time */}
        <div className="flex flex-col md:flex-row items-center space-y-1 md:space-y-0 md:space-x-4">
          <span className="text-sm md:text-base">{formattedDate}</span>
          <span className="text-sm md:text-base">{formattedTime}</span>
        </div>


        {/* Company Address */}
        <div className="flex items-center">
          <span className="text-sm md:text-base">
            123 Company Street, City, Country
          </span>
        </div>

        {/* Icons */}
        <div className="flex items-center space-x-4">
          <FaInstagram className="h-6 w-6 cursor-pointer text-pink-300 hover:text-pink-400" />
          <FaWhatsapp className="h-6 w-6 cursor-pointer text-green-300 hover:text-green-400" />
          <FaFacebook className="h-6 w-6 cursor-pointer text-blue-500 hover:text-blue-400" />
        </div>
      </div>
    </header>
  );
};

export default Header;
