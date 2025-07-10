/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { easeInOut, motion } from "framer-motion";
import { Link } from "react-router-dom";

const NavBar = [
  { id: 1, title: "Home", path: "/" },
  { id: 3, title: "About Us", path: "/about" },
  { id: 4, title: "Our Team", path: "/team" },
  { id: 5, title: "Contact Us", path: "/contact" },
];

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <nav className="fixed top-0 z-50 shadow-md w-full">
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
                <Link
                  to={nav.path}
                  className="px-3 py-2 hover:text-secondary relative group cursor-pointer"
                >
                  {nav.title}
                  <div className="w-2 h-2 bg-secondary rounded-full absolute left-1/2 -translate-x-1/2 top-full mt-1 hidden group-hover:block"></div>
                </Link>
              </li>
            ))}
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
              <Link
                to={nav.path}
                className="block px-3 py-2 hover:text-secondary text-lg cursor-pointer"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {nav.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;