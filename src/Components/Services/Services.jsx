import { delay, motion, easeInOut } from "framer-motion";
import React from "react";
import { TbWorld } from "react-icons/tb";
import { CiMobile3 } from "react-icons/ci";
import { RiComputerLine } from "react-icons/ri";
import { IoMdHappy } from "react-icons/io";
import { IoPulseOutline } from "react-icons/io5";
import { BiSupport } from "react-icons/bi";

const SerData = [
  {
    id: 1,
    title: "Web Development",
    link: "#",
    icon: <TbWorld />,
    delay: 0.2,
  },
  {
    id: 2,
    title: "Mobile Development",
    link: "#",
    icon: <CiMobile3 />,
    delay: 0.3,
  },
  {
    id: 3,
    title: "Software Development",
    link: "#",
    icon: <RiComputerLine />,
    delay: 0.4,
  },
  {
    id: 4,
    title: "Satisfied Clients",
    link: "#",
    icon: <IoMdHappy />,
    delay: 0.5,
  },
  {
    id: 5,
    title: "SEO Services",
    link: "#",
    icon: <IoPulseOutline />,
    delay: 0.6,
  },
  {
    id: 6,
    title: "24/7 Support",
    link: "#",
    icon: <BiSupport />,
    delay: 0.6,
  },
];

export const SlideLeft = (delay) => {
  return {
    initial: { opacity: 0, x: 50 },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        delay: delay,
        ease: easeInOut,
      },
    },
  };
};

function Services() {
  return (
    <section className="bg-white">
      <div className="container pb-14 pt-16">
        <h1 className="text-4xl font-bold text-left pb-10">
          Services We Provide
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {SerData.map((item) => (
            <motion.div
              variants={SlideLeft(item.delay)}
              initial="initial"
              animate="animate"
              viewport={{ once: true }}
              key={item.id}
              className="flex flex-col justify-center p-4 py-7 rounded-2xl items-center gap-4 mb-6 bg-[#f4f4f4] hover:bg-white hover:scale-110 duration-300 hover:shadow-2xl"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h1 className="text-lg font-semibold text-center px-3">
                {item.title}
              </h1>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Services;
