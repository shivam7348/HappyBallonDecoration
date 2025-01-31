import React, { useState, useEffect } from "react";
import { Instagram, Youtube, Facebook, CircleFadingPlus } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const Header = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  const formattedDate = currentTime.toLocaleDateString();
  const formattedTime = currentTime.toLocaleTimeString();

  return (
    <header className="bg-[var(--glsr-red)] text-white p-4">
      <div className="flex flex-col md:flex-row items-center justify-between md:justify-end space-y-2 md:space-y-0 md:space-x-4 md:mr-10">
        {/* Date and Time */}
        <div className="flex flex-col md:flex-row items-center space-y-1 md:space-y-0 md:space-x-4">
          <span className="text-sm md:text-base">{formattedDate}</span>
          <span className="text-sm md:text-base">{formattedTime}</span>
        </div>

        {/* Icons */}
        <div className="flex items-center space-x-4">
          <Instagram className="h-4 w-5 cursor-pointer hover:text-gray-400" />
          <FaWhatsapp className="h-4 w-5 cursor-pointer hover:text-gray-400" />
          <Facebook className="h-4 w-5 cursor-pointer hover:text-gray-400" />
          <CircleFadingPlus className="h-4 w-5 cursor-pointer hover:text-gray-400" />
        </div>
      </div>
    </header>
  );
};

export default Header;
