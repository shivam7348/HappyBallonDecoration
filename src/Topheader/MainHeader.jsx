import { useState } from "react";
// import logo from "../assets/logo.jpeg";

import logo from "../assets/logo.jpg"
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
      <header className="w-full bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto my-auto py-4 flex justify-between items-center">
          <div>
           <Link to="/">
           <img
              src={logo}
              alt="Company Logo"
              className="h-12 sm:h-10 lg:h-12 xl:h-16"
            />
           </Link>
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
  className={`${isMenuOpen ? "block" : "hidden"
    } lg:flex lg:items-center lg:space-x-6 absolute lg:static top-16 left-0 w-full lg:w-auto bg-white shadow-lg lg:shadow-none z-50`}
>
  {/* Close Button (Visible only on mobile) */}
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
  <ul className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-12 text-gray-800 font-semibold text-xl p-4 lg:p-0 lg:mr-5">
    <li>
      <Link
        to="/"
        className="relative group text-gray-600 pb-2 lg:pb-6"
        onClick={closeMenu}
      >
        Home
        <span className="absolute left-0 bottom-[-6px] lg:bottom-[-4px] w-full h-[3px] bg-pink-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
      </Link>
    </li>
    <li>
      <Link
        to="/about"
        className="relative group text-gray-600 pb-2 lg:pb-6"
        onClick={closeMenu}
      >
        About us
        <span className="absolute left-0 bottom-[-6px] lg:bottom-[-4px] w-full h-[3px] bg-pink-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
      </Link>
    </li>
    <li>
      <Link
        to="/services"
        className="relative group text-gray-600 pb-2 lg:pb-6"
        onClick={closeMenu}
      >
        Services & Area
        <span className="absolute left-0 bottom-[-6px] lg:bottom-[-4px] w-full h-[3px] bg-pink-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
      </Link>
    </li>
   
    <li>
      <Link
        to="/gallery"
        className="relative group text-gray-600 pb-2 lg:pb-6"
        onClick={closeMenu}
      >
        Gallery
        <span className="absolute left-0 bottom-[-6px] lg:bottom-[-4px] w-full h-[3px] bg-pink-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
      </Link>
    </li>
     <li>
      <Link
        to="/contact"
        className="relative group text-gray-600 pb-2 lg:pb-6"
        onClick={closeMenu}
      >
        Contact us
        <span className="absolute left-0 bottom-[-6px] lg:bottom-[-4px] w-full h-[3px] bg-pink-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
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
