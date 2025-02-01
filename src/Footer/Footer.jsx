import { FaPhoneAlt, FaWhatsapp, FaArrowUp, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black text-white relative">
      {/* Top Section with Testimonial Call */}
      <div className="text-center py-8 bg-[var(--glsr-red)] ">
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
                  <p className="text-gray-200">B/440 Near Matero Station Ghaziabad 
                  pin-201003</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <FaPhoneAlt className="text-yellow-300" />
                <p>7678433751  /7678433751 </p>
              </div>
              <div className="flex items-center space-x-3">
                <FaEnvelope className="text-yellow-300" />
                <p>info@happybirthdaydecoration@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Map Section */}
          
        </div>
      </div>

      {/* Fixed Bottom Bar */}
      <div className="bg-black backdrop-blur-sm fixed bottom-0 w-full py-3 px-4 flex justify-between items-center z-50">
      

        <span className="text-sm font-medium text-center">Happy Birthday Decoration</span>

        {/* Fixed Action Buttons */}
        <div className="fixed bottom-33 right-4 space-y-3">
          <a
            href="https://wa.me/7678433751"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 p-3 rounded-full flex items-center justify-center hover:bg-green-600 transition-all shadow-lg"
          >
            <FaWhatsapp className="text-xl" />
          </a>
          
          <a
            href="tel:7678433751"
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