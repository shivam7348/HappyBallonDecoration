import React, { useState } from "react";
import logo from "../assets/logo.jpeg";
import { Link } from "react-router-dom";

const MainHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className="w-full bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div>
            <img
              src={logo}
              alt="Company Logo"
              className="h-12 w-auto sm:h-16" // Smaller size on mobile, larger on larger screens
            />
          </div>

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
            {/* Close Button (visible only on mobile) */}
            <button
              onClick={closeMenu}
              className="lg:hidden absolute top-4 right-4 focus:outline-none"
              aria-label="Close Menu"
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
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Menu Links */}
            <ul className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-6 text-gray-800 font-semibold text-xl p-4 lg:p-0 lg:mr-5">
              <li>
                <Link
                  to="/"
                  className="relative group hover:text-[var(--glsr-red)] block"
                  onClick={closeMenu}
                >
                  Home
                  <span className="absolute left-0 bottom-0 h-0.5 bg-[var(--glsr-red)] w-0 group-hover:w-full transition-all duration-300"></span>
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="relative group hover:text-[var(--glsr-red)] block"
                  onClick={closeMenu}
                >
                  About
                  <span className="absolute left-0 bottom-0 h-0.5 bg-[var(--glsr-red)] w-0 group-hover:w-full transition-all duration-300"></span>
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="relative group hover:text-[var(--glsr-red)] block"
                  onClick={closeMenu}
                >
                  Services
                  <span className="absolute left-0 bottom-0 h-0.5 bg-[var(--glsr-red)] w-0 group-hover:w-full transition-all duration-300"></span>
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className="relative group hover:text-[var(--glsr-red)] block"
                  onClick={closeMenu}
                >
                  Products
                  <span className="absolute left-0 bottom-0 h-0.5 bg-[var(--glsr-red)] w-0 group-hover:w-full transition-all duration-300"></span>
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
