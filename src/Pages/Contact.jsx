/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { easeInOut, motion } from "framer-motion";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaPaperPlane, FaHeadset } from "react-icons/fa";

export const FadeUp = (delay) => {
  return {
    initial: { opacity: 0, y: 50 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        duration: 0.5,
        delay: delay,
        ease: easeInOut,
      },
    },
  };
};

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <section className="contact bg-light overflow-hidden relative py-20 mt-6">
      <div className="container">
        {/* Header */}
        <motion.div
          variants={FadeUp(0.3)}
          initial="initial"
          animate="animate"
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Contact <span className="text-secondary">Us</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have questions or want to discuss a project? Reach out to our team.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            variants={FadeUp(0.5)}
            initial="initial"
            animate="animate"
            className="space-y-8"
          >
            <div className="flex items-start gap-6 p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-secondary bg-opacity-20 p-3 rounded-full">
                <FaHeadset className="text-secondary text-2xl" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">General Inquiries</h3>
                <p className="text-gray-600">We're here to help with any questions</p>
                <a href="mailto:info@codingjourney.com" className="text-secondary hover:underline mt-2 inline-block">
                  info@codingjourney.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-6 p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-secondary bg-opacity-20 p-3 rounded-full">
                <FaPhone className="text-secondary text-2xl" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Call Us</h3>
                <p className="text-gray-600">Monday to Friday, 9am to 5pm</p>
                <a href="tel:+1234567890" className="text-secondary hover:underline mt-2 inline-block">
                  +1 (234) 567-890
                </a>
              </div>
            </div>

            <div className="flex items-start gap-6 p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-secondary bg-opacity-20 p-3 rounded-full">
                <FaMapMarkerAlt className="text-secondary text-2xl" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Our Location</h3>
                <p className="text-gray-600">123 Tech Street</p>
                <p className="text-gray-600">San Francisco, CA 94107</p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            variants={FadeUp(0.7)}
            initial="initial"
            animate="animate"
            className="bg-white p-8 rounded-xl shadow-md"
          >
            <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="primary-btn flex items-center gap-2"
              >
                Send Message
                <FaPaperPlane />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact;