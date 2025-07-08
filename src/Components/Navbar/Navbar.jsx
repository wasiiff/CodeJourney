import React from "react";
import { IoMdMenu } from "react-icons/io";
import { easeInOut, motion } from "framer-motion";


const NavBar = [
  {
    id: 1,
    title: "Home",
    path: "/",
  },
  {
    id: 2,
    title: "Service",
    path: "#",
  },
  {
    id: 3,
    title: "About Us",
    path: "#",
  },
  {
    id: 4,
    title: "Our Team",
    path: "#",
  },
  {
    id: 5,
    title: "Contact Us",
    path: "#",
  },
];

function Navbar() {
  return (
    <nav>
      <motion.div initial={{opacity: 0 , y: -50}}
        animate={{opacity: 1 , y: 0}}
        transition={{duration: 0.4, delay: 0.3, ease: easeInOut}}
      
      className="container py-6 flex justify-between items-center bg-light">
        {/* logo */}
        <div>
          <h1 className="font-bold text-2xl">The Coding Journey</h1>
        </div>
        {/* Menu */}
        <div>
          <ul className="flex items-center gap-3">
            {NavBar.map((nav) => {
              return (
                <li key={nav.id}>
                  <a
                    className="px-3 py-2 hover:text-secondary relative group"
                    href={nav.path}
                  >
                    <div className="w-2 h-2 bg-secondary mt-2 rounded-full absolute left-1/2 -translate-x-1/2 top-1/2 bottom-0 group-hover:block hidden"></div>
                    {nav.title}
                  </a>
                </li>
              );
            })}
            <button className="primary-btn">
                Sign In

            </button>
          </ul>
        </div>
        {/* Mobile Hamburger */}
        <div className="lg:hidden">
            <IoMdMenu className="text-2xl" />

        </div>
      </motion.div>
    </nav>
  );
}

export default Navbar;
