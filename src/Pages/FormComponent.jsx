import React, { useState } from "react";

const FormComponent = () => {
  const [formData, setFormData] = useState({
    occasion: "",
    decorationItem: "",
    name: "",
    contact: "",
    pincode: "",
    dateTime: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.contact.trim()) {
      newErrors.contact = "Contact number is required";
    } else if (!/^\d{10}$/.test(formData.contact)) {
      newErrors.contact = "Please enter a valid 10-digit contact number";
    }

    if (!formData.pincode.trim()) {
      newErrors.pincode = "Pincode is required";
    } else if (!/^\d{6}$/.test(formData.pincode)) {
      newErrors.pincode = "Please enter a valid 6-digit pincode";
    }

    if (!formData.dateTime) {
      newErrors.dateTime = "Date and time are required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form Submitted:", formData);
      setSubmitted(true);
      setFormData({
        occasion: "",
        decorationItem: "",
        name: "",
        contact: "",
        pincode: "",
        dateTime: "",
      });
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-pink-100 p-6 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-repeat opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 30c2.5-2.5 6.5-2.5 9 0s2.5 6.5 0 9-6.5 2.5-9 0-2.5-6.5 0-9zm0-10c2.5-2.5 6.5-2.5 9 0s2.5 6.5 0 9-6.5 2.5-9 0-2.5-6.5 0-9zm10 0c2.5-2.5 6.5-2.5 9 0s2.5 6.5 0 9-6.5 2.5-9 0-2.5-6.5 0-9zm-10 20c2.5-2.5 6.5-2.5 9 0s2.5 6.5 0 9-6.5 2.5-9 0-2.5-6.5 0-9z' fill='%23FF69B4' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E")`,
        }}
      ></div>

      <div className="w-full max-w-lg mx-auto bg-white/95 backdrop-blur-sm shadow-xl rounded-lg border border-pink-200 p-8">
        <div className="text-center mb-8">
          <div className="mx-auto w-20 h-1 bg-gradient-to-r from-pink-200 to-pink-400 rounded-full mb-6"></div>
          <h2 className="text-3xl font-bold text-pink-700 mb-2">Save Time!</h2>
          <p className="text-lg text-pink-600 mb-2">
            Get Callback From Our Event Advisor
          </p>
          <p className="text-sm text-gray-600">
            Don't waste time searching for the perfect decoration for your
            event. Fill out the form below and our advisor will contact you
            shortly.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label className="block text-pink-700 text-sm font-medium">
              Occasion
            </label>
            <select
              name="occasion"
              value={formData.occasion}
              onChange={handleChange}
              className="w-full p-3 rounded-lg border border-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-500 bg-white"
            >
              <option value="">Select Occasion</option>
              <option value="birthday">Birthday</option>
              <option value="wedding">Wedding</option>
              <option value="anniversary">Anniversary</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="block text-pink-700 text-sm font-medium">
              Decoration Items
            </label>
            <select
              name="decorationItem"
              value={formData.decorationItem}
              onChange={handleChange}
              className="w-full p-3 rounded-lg border border-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-500 bg-white"
            >
              <option value="">Select Decoration Items</option>
              <option value="balloons">Balloons</option>
              <option value="flowers">Flowers</option>
              <option value="lights">Lights</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="block text-pink-700 text-sm font-medium">
              Name *
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className={`w-full p-3 rounded-lg border focus:outline-none focus:ring-2 ${
                errors.name
                  ? "border-red-500"
                  : "border-pink-200 focus:ring-pink-500"
              }`}
            />
            {errors.name && (
              <p className="text-sm text-red-500">{errors.name}</p>
            )}
          </div>

          <div className="space-y-2">
            <label className="block text-pink-700 text-sm font-medium">
              Contact Number *
            </label>
            <input
              type="text"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
              placeholder="Your Contact No."
              className={`w-full p-3 rounded-lg border focus:outline-none focus:ring-2 ${
                errors.contact
                  ? "border-red-500"
                  : "border-pink-200 focus:ring-pink-500"
              }`}
            />
            {errors.contact && (
              <p className="text-sm text-red-500">{errors.contact}</p>
            )}
          </div>

          <div className="space-y-2">
            <label className="block text-pink-700 text-sm font-medium">
              Pincode *
            </label>
            <input
              type="text"
              name="pincode"
              value={formData.pincode}
              onChange={handleChange}
              placeholder="Enter Pincode"
              className={`w-full p-3 rounded-lg border focus:outline-none focus:ring-2 ${
                errors.pincode
                  ? "border-red-500"
                  : "border-pink-200 focus:ring-pink-500"
              }`}
            />
            {errors.pincode && (
              <p className="text-sm text-red-500">{errors.pincode}</p>
            )}
          </div>

          <div className="space-y-2">
            <label className="block text-pink-700 text-sm font-medium">
              Event Date & Time *
            </label>
            <input
              type="datetime-local"
              name="dateTime"
              value={formData.dateTime}
              onChange={handleChange}
              className={`w-full p-3 rounded-lg border focus:outline-none focus:ring-2 ${
                errors.dateTime
                  ? "border-red-500"
                  : "border-pink-200 focus:ring-pink-500"
              }`}
            />
            {errors.dateTime && (
              <p className="text-sm text-red-500">{errors.dateTime}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full p-3 rounded-lg bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white font-medium transition-colors duration-200"
          >
            Submit Form
          </button>
        </form>

        {submitted && (
          <div className="mt-4 p-4 rounded-lg bg-green-50 text-green-700 border border-green-200">
            Form submitted successfully! We'll contact you soon.
          </div>
        )}
      </div>
    </div>
  );
};

export default FormComponent;
