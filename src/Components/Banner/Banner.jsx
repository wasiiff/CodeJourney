/* eslint-disable no-unused-vars */
import React from "react";
import services from "../../assets/services.png";
import { FadeUp } from "../Hero/Hero";
import { motion } from "framer-motion";
import { FaBookReader } from "react-icons/fa";
import { GrUserExpert } from "react-icons/gr";
import { MdOutlineAccessTimeFilled } from "react-icons/md";

function Banner() {
  return (
    <section name="about">
      <div className="container py-14 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-8 space-y-6 md:space-y-0">
        {/* Banner Image  */}
        <motion.img
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          src={services}
          alt=""
          className="w-[350px] md:max-w-[450px] object-cover drop-shadow"
        />

        {/* Banner Text  */}
        <div className="flex flex-col justify-center">
          <div className="text-center md:text-left space-y-12">
            <motion.h1
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold !leading-sung"
            >
              The World's Leading Online Learning Platform
            </motion.h1>
            <div className="flex flex-col gap-6 ">
              {/* First  */}
              <motion.div
                variants={FadeUp(0.2)}
                initial="initial"
                animate="animate"
                viewport={{ once: true }}
                className="flex items-center gap-4 p-6 bg-[#f4f4f4] rounded-2xl hover:bg-white duration-300 hover:shadow-2xl"
              >
                <FaBookReader className="text-2xl" />
                <p className="text-lg">10,000+ Courses</p>
              </motion.div>

              {/* Second  */}
              <motion.div
                variants={FadeUp(0.4)}
                initial="initial"
                animate="animate"
                viewport={{ once: true }}
                className="flex items-center gap-4 p-6 bg-[#f4f4f4] rounded-2xl hover:bg-white duration-300 hover:shadow-2xl"
              >
                <GrUserExpert className="text-2xl" />
                <p className="text-lg">Experts Instructions</p>
              </motion.div>

              {/* Third  */}

              <motion.div
                variants={FadeUp(0.6)}
                initial="initial"
                animate="animate"
                viewport={{ once: true }}
                className="flex items-center gap-4 p-6 bg-[#f4f4f4] rounded-2xl hover:bg-white duration-300 hover:shadow-2xl"
              >
                <MdOutlineAccessTimeFilled className="text-2xl" />
                <p className="text-lg">Lifetime Access</p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
