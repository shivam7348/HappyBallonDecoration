import { useEffect } from 'react';
import { Link } from 'react-router-dom'
import birthday1 from "../assets/birthdayImage/birthday1.jpg"
import birthday2 from '../assets/birthdayImage/birthday2.jpg'
import birthday3 from '../assets/birthdayImage/birthday3.jpg'
import birthday4 from '../assets/birthdayImage/birthday4.jpg'
import birthday5 from '../assets/birthdayImage/birthday5.jpg'
import birthday6 from '../assets/birthdayImage/birthday6.jpg'
import birthday7 from '../assets/birthdayImage/birthday7.jpg'
import birthday8 from '../assets/birthdayImage/birthday8.jpg'
import birthday9 from '../assets/birthdayImage/birthday9.jpg'
import birthday10 from '../assets/birthdayImage/birthday10.jpg'
import birthday11 from '../assets/birthdayImage/birthday11.jpg'
import birthday12 from '../assets/birthdayImage/birthday12.jpg'
import birthday13 from '../assets/birthdayImage/birthday13.jpg'
import birthday14 from '../assets/birthdayImage/birthday14.jpg'
import birthday15 from '../assets/birthdayImage/birthday15.jpg'
import birthday16 from '../assets/birthdayImage/birthday16.jpg'
import birthday17 from '../assets/birthdayImage/birthday17.jpg'
import happyanniversery2 from '../assets/birthdayImage/happyanniversery2.jpg'
import Marquee from 'react-fast-marquee';



const services = [
   {
     id: 1,
     name: "Birthday Decorations",
     image:
       birthday1,
   },
   {
    id: 2,
    name: "Birthday Decorations",
    image:
    birthday2,

   },
   {
    id: 3,
    name: "Birthday Decorations",
    image:
    birthday3,
   },
   {
    id: 4,
    name: "Birthday Decorations",
    image:
    birthday4,
   },
   {
    id: 5,
    name: "Birthday Decorations",
    image:
    birthday5,
   },
   {
    id: 6,
    name: "Birthday Decorations",
    image:
    birthday6,
   },
   {
    id: 7,
    name: "Birthday Decorations",
    image:
    birthday7,
   },
   {
    id: 8,
    name: "Birthday Decorations",
    image:
    birthday8,
   },
   {
    id: 9,
    name: "Birthday Decorations",
    image:
    birthday9,
   },
   {
    id: 10,
    name: "Birthday Decorations",
    image:
    birthday10,
   },
   {
    id: 11,
    name: "Birthday Decorations",
    image:
    birthday11,
   },
   {
    id: 12,
    name: "Birthday Decorations",
    image:
    birthday12,
   },
   {
    id: 13,
    name: "Birthday Decorations",
    image:
    birthday13,
   },
   {
    id: 14,
    name: "Birthday Decorations",
    image:
    birthday14,
   }

]
function ServiceDetail() {

    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top when component mounts
      }, []);
  return (
    <div className='text-center'>
      <h3 className="text-4xl font-bold text-red-500 mb-4">
      Welcome to Our Happy Balloon Decoration Services in Ghaziabad
    </h3>
    <div>
    

    </div>
     <div className="max-w-6xl my-5 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
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