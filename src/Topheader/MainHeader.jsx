import React, { useState } from "react";
import logo from "../assets/logo.jpeg";
import { Link } from "react-router-dom";

const MainHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className="w-full bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          {/* Logo */}
          <div>
            <img src={logo} alt="Company Logo" className="h-16 w-auto" />
          </div>

          {/* Hamburger Menu Icon (for mobile) */}
          <button
            onClick={toggleMenu}
            className="lg:hidden focus:outline-none"
            aria-label="Toggle Menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>

          {/* Navigation Menu */}
          <nav
            className={`${
              isMenuOpen ? "block" : "hidden"
            } lg:flex lg:items-center lg:space-x-6 absolute lg:static top-16 left-0 w-full lg:w-auto bg-white shadow-lg lg:shadow-none z-50`}
          >
            <ul className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-6 text-gray-700 font-semibold text-lg p-4 lg:p-0">
              <li>
                <Link to="/" className="hover:text-[var(--glsr-red)] block">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-blue-500 block">
                  About
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-blue-500 block">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-blue-500 block">
                  Products
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default MainHeader;
