import welcomebaby from '../assets/birthdayImage/welcomebaby.mp4'
import { motion } from "framer-motion"; // Import Framer Motion
import { servicescards } from "../utils/serviceData";
const ServiceCards = () => {
  return (
    <div className="container mx-auto px-4 py-8">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Left Side - Services Cards */}
      <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {servicescards.map((service) => (
          <motion.div
            key={service.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col relative group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 * service.id }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="relative h-48 flex-shrink-0">
              <img
                src={service.image}
                // alt={service.name}
                className="w-full h-full object-cover"
              />
            </div>
            <motion.div
              className="absolute inset-0  bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-xl font-semibold text-white text-center">
                {service.name}
              </h3>
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Right Side - Portrait Video */}
      <div className="md:col-span-1 flex justify-center items-center">
        <motion.div
          className="rounded-xl shadow-lg overflow-hidden bg-white"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <video
                     controls
                    autoPlay  // Add this
                     muted     // Add this
                     className="h-full max-h-[500px] rounded-lg shadow-lg"
                     style={{ width: 'auto', height: '100%' }}
                   >
                     <source src={welcomebaby} type="video/mp4" />
                     Your browser does not support the video tag.
                   </video>
        </motion.div>
      </div>
    </div>
  </div>
  );
};

export default ServiceCards;
