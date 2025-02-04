import React from "react";
import { motion } from "framer-motion"; // Import Framer Motion
import { servicescards } from "../utils/serviceData";
const ServiceCards = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
        {servicescards.map((service) => (
          <motion.div
            key={service.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col relative group"
            initial={{ opacity: 0, y: 20 }} // Initial animation state
            whileInView={{ opacity: 1, y: 0 }} // Animate when in view
            viewport={{ once: true }} // Only animate once
            transition={{ duration: 0.5, delay: 0.1 * service.id }} // Staggered delay
            whileHover={{ scale: 1.05 }} // Scale up on hover
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
            <motion.div
              className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              initial={{ opacity: 0 }} // Initial state for hover overlay
              whileHover={{ opacity: 1 }} // Animate opacity on hover
              transition={{ duration: 0.3 }} // Smooth transition
            >
              <h3 className="text-xl font-semibold text-white text-center">
                {service.name}
              </h3>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ServiceCards;
