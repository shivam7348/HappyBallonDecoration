import { Link } from "react-router-dom";
import { services } from "../utils/MockData";
import { useEffect } from "react";

const serviceAreaPairs = [
  { names: ["RDC & Kavi Nagar"], description: "We provide balloon decoration services in RDC and Kavi Nagar for all occasions." },
  { names: ["Vasundhara & Indirapuram"], description: "Celebrate your events with our stunning balloon decorations in Vasundhara and Indirapuram." },
  { names: ["Noida & New Delhi"], description: "Make your events memorable with our creative balloon decorations in Noida and New Delhi." },
  { names: ["Raj Nagar Extension & Shastri Nagar"], description: "Professional balloon decoration services available in Raj Nagar Extension and Shastri Nagar." },
];

const OurServicesCards = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top when component mounts
  }, []);
  return (
    
<div className="container mx-auto px-4 py-12">
  {/* Heading */}
  <div className="text-center mb-12">
    <h3 className="text-4xl font-bold text-red-500 mb-4">
      Welcome to Our Happy Balloon Decoration Services in Ghaziabad
    </h3>
    <p className="text-lg text-gray-700 max-w-2xl mx-auto">
      Transform your events with our stunning balloon decorations. Whether it’s a birthday, wedding, or corporate event, we provide custom designs that leave a lasting impression.
    </p>
  </div>

  {/* Service Area Pairs */}
  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
    {serviceAreaPairs.map((pair, index) => (
      <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200">
        <h2 className="text-2xl font-semibold text-red-500 mb-2">
          {pair.names.join(" & ")}
        </h2>
        <p className="text-gray-600">{pair.description}</p>
      </div>
    ))}
  </div>

  {/* Services Cards */}
  <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    {services.map((service) => (
      <Link
        key={service.id}
        to={`/service/${service.id}`} // Dynamic route based on service ID
        className="rounded-lg shadow-lg overflow-hidden group relative cursor-pointer transform transition-all duration-300 hover:scale-105"
      >
        <div className="relative h-56">
          <img
            src={service.image}
            alt={service.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-opacity-50 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
            {/* Optional: Add overlay content here */}
          </div>
        </div>

        <div className="p-3 flex flex-col items-center justify-center bg-[var(--glsr-red)] text-white">
          <h3 className="text-lg font-semibold text-center">
            {service.name}
          </h3>
          <p className="text-sm text-center mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {service.description}
          </p>
        </div>
      </Link>
    ))}
  </div>
</div>
  );
};

export default OurServicesCards;
