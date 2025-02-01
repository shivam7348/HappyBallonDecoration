import React from "react";
import { services } from "../utils/MockData";

const OurServicesCards = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Heading */}
      <div className="text-center mb-16">
  <h3 className="text-4xl font-bold text-red-400 mb-4 mx-">
    Welcome to Our  Happy  Balloon Decoration Services in Ghaziabad
  </h3>
  <p className="text-lg text-gray-700 mx-auto max-w-3xl">
    Transform your events with our stunning balloon decorations. Whether it’s a birthday, wedding, or corporate event, we provide custom designs that leave a lasting impression. Located in Ghaziabad, we cater to all your celebration needs.
  </p>
</div>

{/* <div className="text-center mb-16">
  <h3 className="text-3xl font-bold text-green-400 mb-4">
    Providing Excellent Happy  Balloon Decoration Services for Every Event
  </h3>
  <p className="text-lg text-gray-700 mx-auto max-w-3xl">
    Our team specializes in creating beautiful, personalized balloon decor that will make your event unforgettable. From elegant wedding setups to fun birthday themes, we ensure that your event is decorated to perfection with creativity and style.
  </p>
</div>

      <div>

      </div> */}

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 mx-4 sm:mx-6 md:mx-12 lg:mx-20">
        {services.map((service) => (
          <div
            key={service.id}
            className="rounded shadow-lg overflow-hidden group relative cursor-pointer transform transition-all duration-300 hover:scale-105"
          >
            {/* Image Section */}
            <div className="relative h-60">
              <img
                src={service.image}
                alt={service.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              {/* Overlay */}
              <div className="absolute inset bg-black bg-opacity-50 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                <h3 className="text-lg font-semibold text-white text-center">
                  {/* {service.name} */}
                </h3>
              </div>
            </div>

            {/* Content Section */}
            <div className="p-2 flex flex-col items-center justify-center bg-[var(--glsr-red)] opacity">
              <h3 className="text-lg font-semibold text-white text-center transform group-hover:translate-y-0 transition-transform duration-300">
                {service.name}
              </h3>
              <p className="text-sm text-gray-600 text-center mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurServicesCards;
