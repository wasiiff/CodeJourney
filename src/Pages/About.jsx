/* eslint-disable no-unused-vars */
import React from "react";
import { easeInOut, motion } from "framer-motion";
import AboutImage from "../assets/About.jpg";
import { FaCheck } from "react-icons/fa"; // Importing check icon

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

function About() {
  return (
    <section className="about bg-light overflow-hidden relative py-20 mt-6">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* About Image */}
        <div className="flex justify-center order-1 md:order-1">
          <motion.img
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: easeInOut }}
            src={AboutImage}
            alt="Our team working together"
            className="w-full max-w-[500px] rounded-lg shadow-2xl"
          />
        </div>

        {/* About Content */}
        <div className="flex flex-col justify-center order-2 md:order-2">
          <div className="space-y-8">
            <motion.h2
              variants={FadeUp(0.3)}
              initial="initial"
              animate="animate"
              className="text-3xl lg:text-4xl font-bold"
            >
              About <span className="text-secondary">Our Company</span>
            </motion.h2>

            <motion.p
              variants={FadeUp(0.5)}
              initial="initial"
              animate="animate"
              className="text-lg text-gray-600"
            >
              We are a passionate team of web developers dedicated to creating
              beautiful, functional websites that help businesses thrive in the
              digital world.
            </motion.p>

            <motion.div
              variants={FadeUp(0.7)}
              initial="initial"
              animate="animate"
              className="space-y-4"
            >
              <div className="flex items-start gap-4">
                <div className="bg-secondary bg-opacity-20 p-2 rounded-full">
                  <FaCheck className="w-4 h-4 text-secondary" />
                </div>
                <p className="flex-1">
                  <span className="font-semibold">5+ Years Experience</span> in
                  web development and digital solutions
                </p>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-secondary bg-opacity-20 p-2 rounded-full">
                  <FaCheck className="w-4 h-4 text-secondary" />
                </div>
                <p className="flex-1">
                  <span className="font-semibold">50+ Projects</span> completed
                  for clients across various industries
                </p>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-secondary bg-opacity-20 p-2 rounded-full">
                  <FaCheck className="w-4 h-4 text-secondary" />
                </div>
                <p className="flex-1">
                  <span className="font-semibold">Client-focused Approach</span>{" "}
                  with customized solutions for every business
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={FadeUp(0.9)}
              initial="initial"
              animate="animate"
            >
              <button className="primary-btn mt-6">Learn More About Us</button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;