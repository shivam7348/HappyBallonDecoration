import { services } from '../utils/MockData'
import { Link } from 'react-router-dom'

function ServiceDetail() {
  return (
    <div>
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
  )
}

export default ServiceDetail