import React from "react";
import { FaBell } from "react-icons/fa";
import BgImage from "../../assets/Subscribe.jpg";
import { motion } from "framer-motion";

const BgImg = {
  backgroundImage: `url(${BgImage})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
};

function Subscribe() {
  return (
    <section className="bg-[#f7f7f7]">
      <motion.div 
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}

      style={BgImg} className="container py-24 md:py-48">
        <motion.div
        initial={{opacity: 0, scale: 0.5}}
        whileInView={{opacity: 1, scale: 1}}
        transition={{ duration: 0.6, ease: "easeInOut" }}

        className="flex flex-col justify-center">
          <div className="text-center space-y-4 lg:max-w-[430px] mx-auto">
            <h1 className="text-4xl font-bold !leading-snug">
              450K+ Students are learning from us
            </h1>
            <p>
              Join a growing community of learners and professionals who trust
              our platform to enhance their skills and boost their careers.
              Access high-quality courses, expert instructors, and a supportive
              learning environment.
            </p>
            <a href="#" className="primary-btn !mt-8 inline-flex items-center gap-4 group">Subscribe Now
              <FaBell className="text-2xl group-hover:animate-bounce group-hover:text-lg duration-200 " />
            </a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Subscribe;