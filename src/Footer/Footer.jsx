import { FaPhoneAlt } from "react-icons/fa";
import { FaWhatsapp, FaArrowUp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[var(--glsr-red)] text-white pt-10">
      {/* Header Section */}
      <div className="text-center">
        <h2 className="text-2xl font-bold">Surprises That Wow</h2>
        <p className="text-yellow-400">Hear From Our Happy Clients!</p>
      </div>

      {/* Features Section */}
      {/* <div className="flex flex-wrap justify-center bg-gray-100 text-black py-4">
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
      </div> */}

      {/* Branch Details */}
      <div className="container mx-auto py-6 px-4 text-center md:text-left grid md:grid-cols-3 gap-6">
        <div>
          <h3 className="font-bold text-lg">Happy Ballon Decorations</h3>
          <p>Shop 11, PALIKA KENDRA, Connaught Place, New Delhi 110001</p>
          <p>Contact: 09717559655 / 09717559655</p>
          <p>Email: info@happy_birthday_decoration@gmail.com</p>
        </div>
        <div>
          <h3 className="font-bold text-lg text-center">Ghaziabad </h3>
          <p>Shop 23, Sector 25, Gurugram, Haryana 122022</p>
          <p>Contact: 09717559655 / 09717559655</p>
          <p>Email: info@happy_birthday_decoration@gmail.com</p>
        </div>
        <div>
          <h3 className="font-bold text-lg">Noida Branch</h3>
          <p>Shop 28, Near Sector 93B, Ghaziabad, Uttar Pradesh 201304</p>
          {/* <p>Contact: 09650291995 / 08287670046</p> */}
          {/* <p>Email: info@choudharydecoratorsncr.com</p> */}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="text-white flex justify-between items-center px-4 py-2 fixed bottom-0 w-full  ">
  {/* Phone Call Button on the Left Side */}
  <div>
    {/* <a
      href="tel:09717559655"
      className="bg-green-500 w-16 h-16 rounded-full text-white text-xl flex items-center justify-center"
    >
      <FaPhoneAlt />
    </a> */}
  </div>

  {/* Company Name in the Center */}
  <span className="text-sm text-center flex-grow">Happy Birthday Decoration</span>

  <div>
  {/* WhatsApp & Phone Buttons - Positioned Slightly Above the Up Button */}
  <div className="fixed bottom-16 right-4 space-y-4">
    <a
      href="https://wa.me/09717559655"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-green-500 p-3 rounded-full text-white text-xl flex items-center justify-center shadow-lg"
    >
      <FaWhatsapp />
    </a>
    
    <a
      href="tel:09717559655"
      className="bg-blue-500 p-3 rounded-full text-white text-xl flex items-center justify-center shadow-lg"
    >
      <FaPhoneAlt />
    </a>
  </div>

  {/* Up Button - Stays at the Bottom-Right */}
  <div className="fixed bottom-4 right-4">
    <a
      href="#"
      className="bg-red-500 p-3 rounded-full text-white text-xl flex items-center justify-center shadow-lg"
    >
      <FaArrowUp />
    </a>
  </div>
</div>


</div>

    </footer>
  );
};

export default Footer;
