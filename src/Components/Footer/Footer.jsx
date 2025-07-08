import React from "react";
import { FaWhatsapp, FaFacebook, FaInstagram } from "react-icons/fa";
import { TiWorld } from "react-icons/ti";
import { motion } from "framer-motion";

function Footer() {
  return (
    <footer name="contact" className="py-28 bg-[#f7f7f7]">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="container"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 md:gap-4">
          {/* First Column */}
          <div className="space-y-4 max-w-[300px]">
            <h1 className="text-2xl font-bold">The Coding Journey</h1>
            <p>
              Join us on a journey through the world of coding, where we explore
              the latest trends, technologies, and tips to help you become a
              better developer. Whether you're a beginner or an experienced
              coder, there's always something new to learn.
            </p>
          </div>

          {/* Second Column */}
          <div className="grid grid-cols-2 gap-10">
            <div className="space-y-4">
              <h1 className="text-2xl font-bold">Courses</h1>
              <ul className="space-y-2 text-lg text-dark2">
                <li className="cursor-pointer hover:text-secondary transition duration-200">
                  Web Development
                </li>
                <li className="cursor-pointer hover:text-secondary transition duration-200">
                  Software Development
                </li>
                <li className="cursor-pointer hover:text-secondary transition duration-200">
                  Apps Development
                </li>
                <li className="cursor-pointer hover:text-secondary transition duration-200">
                  E-learning
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h1 className="text-2xl font-bold">Links</h1>
              <ul className="space-y-2 text-lg text-dark2">
                <li className="cursor-pointer hover:text-secondary transition duration-200">
                  Home
                </li>
                <li className="cursor-pointer hover:text-secondary transition duration-200">
                  About
                </li>
                <li className="cursor-pointer hover:text-secondary transition duration-200">
                  Services
                </li>
                <li className="cursor-pointer hover:text-secondary transition duration-200">
                  Contact
                </li>
              </ul>
            </div>
          </div>

          {/* Third Column */}
          <div className="space-y-4 max-w-[300px]">
            <h1 className="text-2xl font-bold">Get in Touch</h1>
            <div className="flex items-center">
              <input
                type="text"
                placeholder="Drop Your Email"
                className="p-3 rounded-s-xl bg-white w-full py-4 focus:outline-none placeholder:text-dark2"
              />
              <button className="bg-primary hover:bg-secondary transition text-white font-semibold py-4 px-6 rounded-e-xl">
                Go
              </button>
            </div>

            {/* Social Icons */}
            <div className="flex space-x-6 py-3">
              <a
                href="https://wa.me/"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer hover:text-primary hover:scale-105 transition duration-200"
              >
                <FaWhatsapp />
              </a>
              <a
                href="https://facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer hover:text-primary hover:scale-105 transition duration-200"
              >
                <FaFacebook />
              </a>
              <a
                href="https://instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer hover:text-primary hover:scale-105 transition duration-200"
              >
                <FaInstagram />
              </a>
              <a
                href="https://example.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer hover:text-primary hover:scale-105 transition duration-200"
              >
                <TiWorld />
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </footer>
  );
}

export default Footer;
