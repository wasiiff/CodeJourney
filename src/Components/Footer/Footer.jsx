import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { TiWorld } from "react-icons/ti";
import { motion } from "framer-motion";
function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="gird grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 md:gap-4">
          {/* First  */}

          <div>
            <h1>The Coding Journey</h1>
            <p>
              Join us on a journey through the world of coding, where we explore
              the latest trends, technologies, and tips to help you become a
              better developer. Whether you're a beginner or an experienced
              coder, there's always something new to learn.
            </p>
          </div>

          {/* Second  */}

          {/* Third  */}
        </div>
      </div>
    </footer>
  );
}

export default Footer;