/* eslint-disable no-unused-vars */
import React from "react";
import { easeInOut, motion } from "framer-motion";
import TeamImage1 from "../assets/Team.jpg";
import TeamImage2 from "../assets/Team2.jpg";
import TeamImage3 from "../assets/Team3.jpg";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

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

const teamMembers = [
  {
    id: 1,
    name: "Alex Johnson",
    role: "Founder & CEO",
    bio: "Web development expert with 10+ years of experience building scalable applications.",
    image: TeamImage1,
    social: {
      twitter: "#",
      linkedin: "#",
      github: "#",
    },
  },
  {
    id: 2,
    name: "Sarah Williams",
    role: "Lead Designer",
    bio: "Creative designer specializing in UI/UX with a focus on user-centered design.",
    image: TeamImage2,
    social: {
      twitter: "#",
      linkedin: "#",
      github: "#",
    },
  },
  {
    id: 3,
    name: "Michael Chen",
    role: "Senior Developer",
    bio: "Full-stack developer passionate about clean code and innovative solutions.",
    image: TeamImage3,
    social: {
      twitter: "#",
      linkedin: "#",
      github: "#",
    },
  },
];

function Team() {
  return (
    <section className="team bg-light overflow-hidden relative py-20 mt-6">
      <div className="container">
        {/* Header */}
        <motion.div
          variants={FadeUp(0.3)}
          initial="initial"
          animate="animate"
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Meet <span className="text-secondary">Our Team</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            The talented individuals behind our success who are passionate about
            creating exceptional digital experiences.
          </p>
        </motion.div>

        {/* Team Members */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              variants={FadeUp(0.5 + index * 0.1)}
              initial="initial"
              animate="animate"
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="h-64 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-secondary mb-4">{member.role}</p>
                <p className="text-gray-600 mb-5">{member.bio}</p>
                <div className="flex space-x-4">
                  <a
                    href={member.social.twitter}
                    className="text-gray-500 hover:text-secondary transition-colors"
                  >
                    <FaTwitter className="w-5 h-5" />
                  </a>
                  <a
                    href={member.social.linkedin}
                    className="text-gray-500 hover:text-secondary transition-colors"
                  >
                    <FaLinkedin className="w-5 h-5" />
                  </a>
                  <a
                    href={member.social.github}
                    className="text-gray-500 hover:text-secondary transition-colors"
                  >
                    <FaGithub className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Team;
