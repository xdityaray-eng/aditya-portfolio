import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className="px-5 lg:px-28 flex justify-between flex-col lg:flex-row" id="about">
      
      {/* Illustration Section */}
      <motion.div
        className="lg:w-1/2"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", stiffness: 80, damping: 10 }}
        viewport={{ once: true }}
      >
        <img src="/assets/about-me.svg" alt="About Me Illustration" />
      </motion.div>

      {/* Content Section */}
      <motion.div
        className="lg:w-1/2"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", stiffness: 80, damping: 10, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <h2 className="lg:text-4xl text-2xl mt-4 lg:mt-0">
          About <span className="font-extrabold">Me</span>
        </h2>

        <p className="text-[#71717A] text-sm/6 lg:text-base mt-5 lg:mt-10">
          I am Aditya Kumar, currently pursuing B.Tech in Computer Science & Engineering 
          (Cybersecurity) at Graphic Era Hill University (2024–2028).
        </p>

        <p className="text-[#71717A] text-sm/6 lg:text-base mt-3 lg:mt-5">
          I am deeply interested in Cybersecurity, Artificial Intelligence & Machine Learning, 
          and strengthening my foundation in Data Structures & Algorithms. 
          I believe in disciplined learning and building real-world projects to sharpen my technical skills.
        </p>

        <p className="text-[#71717A] text-sm/6 lg:text-base mt-3 lg:mt-5">
          My goal is to become a skilled engineer capable of designing secure, scalable, 
          and impactful technology solutions. I am continuously exploring new technologies 
          while focusing on building strong core fundamentals.
        </p>
      </motion.div>
    </div>
  );
}