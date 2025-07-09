/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { easeInOut, motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";

const NavBar = [
  { id: 1, title: "Home", path: "home" },
  { id: 2, title: "Service", path: "service" },
  { id: 3, title: "About Us", path: "about" },
  { id: 4, title: "Our Team", path: "team" },
  { id: 5, title: "Contact Us", path: "contact" },
];

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <nav>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.3, ease: easeInOut }}
        className="container py-6 flex justify-between items-center bg-light relative"
      >
        {/* Logo */}
        <div>
          <h1 className="font-bold text-2xl">The Coding Journey</h1>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex">
          <ul className="flex items-center gap-4">
            {NavBar.map((nav) => (
              <li key={nav.id}>
                <ScrollLink
                  to={nav.path}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  spy={true}
                  className="px-3 py-2 hover:text-secondary relative group cursor-pointer"
                >
                  {nav.title}
                  <div className="w-2 h-2 bg-secondary rounded-full absolute left-1/2 -translate-x-1/2 top-full mt-1 hidden group-hover:block"></div>
                </ScrollLink>
              </li>
            ))}
            <li>
              <button className="primary-btn">Sign In</button>
            </li>
          </ul>
        </div>

        {/* Mobile Hamburger Icon */}
        <div className="lg:hidden">
          {isMobileMenuOpen ? (
            <IoMdClose
              className="text-3xl cursor-pointer"
              onClick={toggleMobileMenu}
            />
          ) : (
            <IoMdMenu
              className="text-3xl cursor-pointer"
              onClick={toggleMobileMenu}
            />
          )}
        </div>
      </motion.div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden bg-light transition-all duration-300 ease-in-out overflow-hidden ${
          isMobileMenuOpen ? "max-h-[500px] py-6" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col items-center gap-4">
          {NavBar.map((nav) => (
            <li key={nav.id}>
              <ScrollLink
                to={nav.path}
                smooth={true}
                duration={500}
                offset={-70}
                spy={true}
                className="block px-3 py-2 hover:text-secondary text-lg cursor-pointer"
                onClick={() => setIsMobileMenuOpen(false)} // close on click
              >
                {nav.title}
              </ScrollLink>
            </li>
          ))}
          <li>
            <button className="primary-btn w-full mt-2">Sign In</button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
