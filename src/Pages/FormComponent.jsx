

import babyShower from '../assets/birthdayImage/baby.mp4'
import { useState } from 'react';


const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventDate: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
  };

  return (
    <div className=" bg-gray-100 flex items-center justify-center p-6">
      <div className="max-w-4xl w-full bg-white shadow-md rounded-lg overflow-hidden flex flex-col md:flex-row">
        {/* Left Side Content */}
        <div className="w-full md:w-1/2 bg-gray-100 text-black p-8 flex flex-col justify-center opacity-80 shadow-lg mb-6 md:mb-0">
          <h2 className="text-3xl font-bold mb-4">Save Time  <span className="">Book Now!</span></h2>
          <p className="text-lg mb-4">
            Get Callback From Our Event Advisor
          </p>
          <p className="text-sm">
            Don’t waste any more time searching for the perfect balloon decoration for your event. Let our event advisor at Choudhary Decorators NCR take care of it for you! Simply fill out the form and our advisor will contact you shortly.
          </p>
        </div>

        {/* Right Side Form */}
        <div className="w-full md:w-1/2 p-8 bg-indigo-500">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-white">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-3 py-2 border border-white-300 rounded-md shadow-sm focus:outline-none  focus:border-indigo-200"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-white">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-3 py-2 border border-white-300 rounded-md shadow-sm focus:outline-none  focus:border-indigo-200"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-white">Phone:</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-3 py-2 border border-white-300 rounded-md shadow-sm focus:outline-none  focus:border-indigo-200"
              />
            </div>
            <div>
              <label htmlFor="eventDate" className="block text-sm font-medium text-white">Event Date:</label>
              <input
                type="date"
                id="eventDate"
                name="eventDate"
                value={formData.eventDate}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-3 py-2 border border-white-300 rounded-md shadow-sm focus:outline-none  focus:border-indigo-200"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[var(--glsr-red)] text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Submit Form
            </button>
          </form>
        </div>

        {/* Video Container */}
        <div className="w-full md:w-1/2 flex items-center justify-center p-4 ">
          <video
            controls
            autoPlay  // Add this
            muted     // Add this
            className="h-full max-h-[500px] rounded-lg shadow-lg"
            style={{ width: 'auto', height: '100%' }}
          >
            <source src={babyShower} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
};

export default Form;
