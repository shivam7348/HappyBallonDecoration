import { FaPhoneAlt } from "react-icons/fa";
import { FaWhatsapp, FaArrowUp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-red-700 text-white pt-10">
      {/* Header Section */}
      <div className="text-center">
        <h2 className="text-2xl font-bold">Surprises That Wow</h2>
        <p className="text-yellow-400">Hear From Our Happy Clients!</p>
      </div>

      {/* Features Section */}
      <div className="flex flex-wrap justify-center bg-gray-100 text-black py-4">
        <div className="flex items-center mx-4">
          <span className="text-yellow-500 text-2xl mr-2">💰</span>
          <p>Best Prices & Offers</p>
        </div>
        <div className="flex items-center mx-4">
          <span className="text-red-500 text-2xl mr-2">🏆</span>
          <p>Unrivaled Quality Services</p>
        </div>
        <div className="flex items-center mx-4">
          <span className="text-blue-500 text-2xl mr-2">📍</span>
          <p>15+ Cities in India</p>
        </div>
        <div className="flex items-center mx-4">
          <span className="text-green-500 text-2xl mr-2">💳</span>
          <p>Secure Payment</p>
        </div>
        <div className="flex items-center mx-4">
          <span className="text-yellow-500 text-2xl mr-2">✅</span>
          <p>Assured Services</p>
        </div>
      </div>

      {/* Branch Details */}
      <div className="container mx-auto py-6 px-4 text-center md:text-left grid md:grid-cols-3 gap-6">
        <div>
          <h3 className="font-bold text-lg">Choudhary Decorators NCR</h3>
          <p>Shop 11, PALIKA KENDRA, Connaught Place, New Delhi 110001</p>
          <p>Contact: 09650291995 / 08287670046</p>
          <p>Email: info@choudharydecoratorsncr.com</p>
        </div>
        <div>
          <h3 className="font-bold text-lg">Gurugram Branch</h3>
          <p>Shop 23, Sector 25, Gurugram, Haryana 122022</p>
          <p>Contact: 09650291995 / 08287670046</p>
          <p>Email: info@choudharydecoratorsncr.com</p>
        </div>
        <div>
          <h3 className="font-bold text-lg">Noida Branch</h3>
          <p>Shop 28, Near Sector 93B, Noida, Uttar Pradesh 201304</p>
          <p>Contact: 09650291995 / 08287670046</p>
          <p>Email: info@choudharydecoratorsncr.com</p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-black text-white flex justify-between px-4 py-2 fixed bottom-0 w-full">
        <span className="text-sm">Choudhary Decorators NCR</span>
        <div className="flex space-x-4">
          <a
            href="tel:09650291995"
            className="bg-green-500 p-3 rounded-full text-white text-xl"
          >
            <FaPhoneAlt />
          </a>
          <a
            href="https://wa.me/09650291995"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 p-3 rounded-full text-white text-xl"
          >
            <FaWhatsapp />
          </a>
          <a
            href="#"
            className="bg-red-500 p-3 rounded-full text-white text-xl"
          >
            <FaArrowUp />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
