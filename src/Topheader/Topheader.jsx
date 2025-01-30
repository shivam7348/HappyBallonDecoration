import React, { useState, useEffect } from "react";
import { Instagram, Youtube, Facebook, CircleFadingPlus } from "lucide-react";

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
    <header className="bg-pink-800 text-white p-4">
      <div className="flex items-center justify-end space-x-4 mr-10">
        {/* Date and Time */}
        <span>{formattedDate}</span>
        <span>{formattedTime}</span>

        {/* Icons */}
        <Instagram className="h-5 w-5 cursor-pointer hover:text-gray-400" />
        <Youtube className="h-5 w-5 cursor-pointer hover:text-gray-400" />
        <Facebook className="h-5 w-5 cursor-pointer hover:text-gray-400" />
        <CircleFadingPlus className="h-5 w-5 cursor-pointer hover:text-gray-400" />
      </div>
    </header>
  );
};

export default Header;
