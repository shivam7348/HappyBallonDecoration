import React from "react";
import logo from '../assets/logo.jpeg'

const MainHeader = () => {
  return (
    <header className="w-full bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-center items-center">
          <img
            src={logo}
            alt="Company Logo"
            className="h-34 w-auto"
          />
        </div>
      </div>
    </header>
  );
};

export default MainHeader;
