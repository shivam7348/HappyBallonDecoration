import React from "react";
import logo from "../assets/logo.jpeg";
import { Link } from "react-router-dom";

const MainHeader = () => {
  return (
    <>
      <header className="w-full bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div>
            <img src={logo} alt="Company Logo" className="h-16 w-auto ml-22" />
          </div>

          <nav>
            <ul className="flex space-x-6 text-gray-700 font-semibold mr-13 text-lg">
              <li>
                <Link to="/" className="hover:text-bg-[var(--glsr-red)]">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-blue-500">
                  About
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-blue-500">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-blue-500">
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
