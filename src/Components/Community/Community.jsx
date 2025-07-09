/* eslint-disable no-unused-vars */
import React from "react";
import com from "../../assets/Community.jpg";
import { motion } from "framer-motion";

function Community() {
  return (
    <section name="team">
      <div className="container py-14 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-8 space-y-6 md:space-y-0">
        {/* Banner Text  */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="flex flex-col justify-center"
        >
          <div className="text-center md:text-left space-y-4 lg:max-w-[450px]">
            <h1 className="text-4xl font-bold !leading-snug">
              Join Our Community to Start your Journey
            </h1>
            <p className="text-dark2">
              Join our community of like-minded individuals who are passionate
              about learning and growing together. Whether you're a beginner or
              an experienced developer, you'll find a supportive environment to
              share ideas, ask questions, and collaborate on projects. Connect
              with mentors, participate in discussions, and access exclusive
              resources to enhance your skills and knowledge.
            </p>
            <a href="" className="primary-btn !mt-8">
              Join Now
            </a>
          </div>
        </motion.div>

        {/* Banner Image  */}
        <motion.img
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          src={com}
          alt=""
          className="w-[650px] md:max-w-[450px] object-cover drop-shadow shadow-2xl shadow-slate-500"
        />
      </div>
    </section>
  );
}

export default Community;
