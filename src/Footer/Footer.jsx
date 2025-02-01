import { FaPhoneAlt, FaWhatsapp, FaArrowUp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[var(--glsr-red)] text-white pt-10">
      <div className="text-center">
        <h2 className="text-2xl font-bold">Surprises That Wow</h2>
        <p className="text-yellow-400">Hear From Our Happy Clients!</p>
      </div>

      <div className="container mx-auto py-6 px-4 text-left grid md:grid-cols-3 gap-6">
        
        <div>
          <h3 className="font-bold text-lg">Ghaziabad</h3>
          <p>B-440A, Sector 7, Pocket B, Nagar 2nd, Patel Nagar Ghaziabad, UttarPradesh 201003</p>
          <p>Contact: 09717559655 / 09717559655</p>
          <p>Email: info@happy_birthday_decoration@gmail.com</p>
        </div>
        <div>
          {/* Add some content or leave it empty for future use */}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="text-white flex justify-between items-center px-4 py-2 fixed bottom-0 w-full ">
       

        {/* Company Name in the Center */}
        <span className="text-sm text-center flex-grow ">Happy Birthday Decoration</span>

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
    </footer>
  );
};

export default Footer;