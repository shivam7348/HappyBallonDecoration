import React from 'react';
import { FaPhoneAlt, FaWhatsapp, FaArrowUp, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-b from-red-600 to-red-800 text-white relative">
      {/* Top Section with Testimonial Call */}
      <div className="text-center py-8 bg-red-700/30">
        <h2 className="text-3xl font-bold mb-2">Surprises That Wow</h2>
        <p className="text-yellow-300 text-lg font-medium">Hear From Our Happy Clients!</p>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Company Information */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-4">About Us</h3>
            <p className="text-gray-200">
              Making your special moments unforgettable with creative and personalized birthday decorations. 
              We bring your celebrations to life!
            </p>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <FaMapMarkerAlt className="text-yellow-300 text-xl mt-1" />
                <div>
                  <h4 className="font-semibold text-lg">Ghaziabad</h4>
                  <p className="text-gray-200">B-440A, Sector 7, Pocket B,<br />Nagar 2nd, Patel Nagar<br />Ghaziabad, UttarPradesh 201003</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <FaPhoneAlt className="text-yellow-300" />
                <p>09717559655 / 09717559655</p>
              </div>
              <div className="flex items-center space-x-3">
                <FaEnvelope className="text-yellow-300" />
                <p>info@happy_birthday_decoration@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Map Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold mb-4">Find Us</h3>
            <div className="rounded-lg overflow-hidden shadow-lg h-64">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.123456789012!2d77.12345678901234!3d28.123456789012345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDA3JzI0LjQiTiA3N8KwMDcnMjQuNCJF!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Fixed Bottom Bar */}
      <div className="bg-red-900/90 backdrop-blur-sm fixed bottom-0 w-full py-3 px-4 flex justify-between items-center z-50">
      

        <span className="text-sm font-medium text-center">Happy Birthday Decoration</span>

        {/* Fixed Action Buttons */}
        <div className="fixed bottom-33 right-4 space-y-3">
          <a
            href="https://wa.me/09717559655"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 p-3 rounded-full flex items-center justify-center hover:bg-green-600 transition-all shadow-lg"
          >
            <FaWhatsapp className="text-xl" />
          </a>
          
          <a
            href="tel:09717559655"
            className="bg-blue-500 p-3 rounded-full flex items-center justify-center hover:bg-blue-600 transition-all shadow-lg"
          >
            <FaPhoneAlt className="text-xl" />
          </a>
        </div>

        <button
          onClick={scrollToTop}
          className="fixed bottom-20 right-4 bg-red-500 p-3 rounded-full flex items-center justify-center hover:bg-red-600 transition-all shadow-lg"
        >
          <FaArrowUp className="text-xl" />
        </button>
      </div>
    </footer>
  );
};

export default Footer;