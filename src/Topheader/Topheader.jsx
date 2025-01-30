import React, { useState, useEffect } from "react";
import { Bell, Settings, User } from "lucide-react";

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
      <div className="flex items-center justify-end space-x-4">
        {/* Date and Time */}
        <span>{formattedDate}</span>
        <span>{formattedTime}</span>

        {/* Icons */}
        <Bell className="h-5 w-5 cursor-pointer hover:text-gray-400" />
        <Settings className="h-5 w-5 cursor-pointer hover:text-gray-400" />
        <User className="h-5 w-5 cursor-pointer hover:text-gray-400" />
      </div>
    </header>
  );
};

export default Header;
