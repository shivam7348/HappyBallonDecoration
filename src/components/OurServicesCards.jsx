import React from "react";
import { services } from "../utils/MockData";

const OurServicesCards = () => {
 

  return (
    <div className="container mx-auto px-4 py-8">
      <div>
        <h3 className="text-4xl font-bold text-center text-red-400 mb-6">
          OUR SERVICES
        </h3>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 mx-20">
        {services.map((service) => (
          <div
            key={service.id}
            className="rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2 hover:scale-105"
          >
            <div className="relative h-48">
              <img
                src={service.image}
                alt={service.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4 flex flex-col items-center justify-center">
              <h3 className="text-lg font-semibold text-gray-800 text-center">
                {service.name}
              </h3>
              <p className="text-sm text-gray-600 text-center mt-2">
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
