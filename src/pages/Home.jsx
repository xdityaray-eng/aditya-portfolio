import React from "react";
import { motion } from "framer-motion";
import { IoLogoLinkedin } from "react-icons/io5";
import { BiLogoGmail } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";
import { TypeAnimation } from "react-type-animation";

export default function Home() {
  return (
    <div className="mt-20" id="home">
      <div className="flex justify-between py-10 items-center px-5 lg:px-28 lg:flex-row flex-col-reverse">

        {/* LEFT SIDE */}
        <motion.div
          className="lg:w-[50%] pr-6"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >

          {/* HEADING */}
          <motion.div
            className="text-2xl lg:text-5xl flex flex-col mt-8 lg:mt-0 gap-3"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { staggerChildren: 0.2 },
              },
            }}
          >
            <motion.h2 variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>
              Hello,{" "}
              <TypeAnimation
                sequence={["I am Aditya Kumar", 1500]}
                speed={40}
                repeat={Infinity}
                style={{ fontWeight: 600 }}
              />
            </motion.h2>

            <motion.h2 variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>
              <span className="font-extrabold">B.Tech CSE</span>{" "}
              <span
                className="text-white font-extrabold"
                style={{ WebkitTextStroke: "1px black" }}
              >
                (Cybersecurity)
              </span>
            </motion.h2>

            <motion.h2 variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>
              Student at{" "}
              <span className="font-extrabold">
                Graphic Era Hill University
              </span>
            </motion.h2>
          </motion.div>

          {/* DESCRIPTION */}
          <motion.p
            className="text-[#71717A] text-sm lg:text-base mt-6 leading-relaxed"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            I am a Computer Science student focused on Cybersecurity, Artificial Intelligence & Machine Learning,
            and Data Structures & Algorithms. My goal is to build strong technical foundations
            and develop secure, scalable, and impactful technology solutions.
          </motion.p>

          {/* SOCIAL ICONS */}
          <motion.div
            className="flex items-center gap-x-5 mt-10"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            <motion.a
              href="mailto:adityakumar.25011001@gehu.ac.in"
              className="bg-white p-3 rounded border-2 border-black"
              whileHover={{ scale: 1.1, backgroundColor: "#000", color: "#fff" }}
              whileTap={{ scale: 0.9 }}
            >
              <BiLogoGmail className="w-5 h-5" />
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/in/adityakumarofficial28/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-3 rounded border-2 border-black"
              whileHover={{ scale: 1.1, backgroundColor: "#000", color: "#fff" }}
              whileTap={{ scale: 0.9 }}
            >
              <IoLogoLinkedin className="w-5 h-5" />
            </motion.a>

            <motion.a
              href="https://github.com/xditayray-eng"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-3 rounded border-2 border-black"
              whileHover={{ scale: 1.1, backgroundColor: "#000", color: "#fff" }}
              whileTap={{ scale: 0.9 }}
            >
              <BsGithub className="w-5 h-5" />
            </motion.a>
          </motion.div>
        </motion.div>

        {/* RIGHT SIDE IMAGE */}
        <motion.div
          className="lg:w-[45%] w-full"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <img
            className="h-full w-full"
            src="/assets/hero-vector.svg"
            alt="Hero Illustration"
          />
        </motion.div>
      </div>
    </div>
  );
}
