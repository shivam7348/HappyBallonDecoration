import React from "react";
import { servicescards } from "../utils/MockData";

const ServiceCards = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
        {servicescards.map((service) => (
          <div
            key={service.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col relative group" // Added group class
          >
            {/* Image container with fixed height */}
            <div className="relative h-48 flex-shrink-0">
              <img
                src={service.image}
                alt={service.name}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Text container - hidden by default, visible on hover */}
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h3 className="text-xl font-semibold text-white text-center">
                {service.name}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceCards;
