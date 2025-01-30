import React from "react";
import logo from "../assets/logo.jpeg";
import { Link, Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Services from "../Pages/Services";
import Products from "../Pages/Products";

const MainHeader = () => {
  return (
    <>
      <header className="w-full bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div>
            <img src={logo} alt="Company Logo" className="h-16 w-auto" />
          </div>

          <nav>
            <ul className="flex space-x-6 text-gray-700 font-semibold">
              <li>
                <Link to="/" className="hover:text-blue-500">
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

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </>
  );
};

export default MainHeader;
