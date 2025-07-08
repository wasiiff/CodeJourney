import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import HeroBanner from "../../assets/Hero_Banner.png";
import { easeInOut, motion } from "framer-motion";

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
// export const FadeIn = (delay) => {
//   return {
//     initial: { opacity: 0 },
//     animate: {
//       opacity: 1,
//       transition: {
//         duration: 0.5,
//         delay: delay,
//       },
//     },
//   };
// };

function Hero() {
  return (
    <section className="hero bg-light overflow-hidden relative">
      <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[650px]">
        {/* Brand Info */}
        <div className="flex flex-col justify-center py-14 md:py-0 relative z-20">
          <div className=" text-center md:text-left space-y-10 lg:max-w-[400px]">
            <motion.h1
              variants={FadeUp(0.6)}
              initial="initial"
              animate="animate"
              className="text-3xl lg:text-5xl font-bold !leading-snug"
            >
              Lets Learn to Build a
              <span className="text-secondary">Website</span> for your Business
            </motion.h1>
            <motion.div
              variants={FadeUp(0.8)}
              initial="initial"
              animate="animate"
              className="flex justify-center md:justify-start"
            >
              <button className="primary-btn flex items-center gap-2 group ">
                Get Started
                <IoIosArrowForward className="text-xl group-hover:translate-x-2 group-hover:-rotate-45 duration-300" />
              </button>
            </motion.div>
          </div>
        </div>
        {/* Hero Image  */}
        <div className="flex justify-center items-center -mt-10">
          <motion.img
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: easeInOut }}
            src={HeroBanner}
            alt=""
            className="w-[400px] xl:w-[600px] relative z-10 drop-shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
