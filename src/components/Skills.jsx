import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaJs, FaReact, FaPython } from "react-icons/fa";
import { FaJava } from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiCplusplus } from "react-icons/si";
import { FaGithub } from "react-icons/fa";

export default function Skills() {
  const [skills] = useState([
    { id: 1, name: "C++", icon: <SiCplusplus size={50} /> },
    { id: 2, name: "Java", icon: <FaJava size={50} /> },
    { id: 3, name: "Python", icon: <FaPython size={50} /> },
    { id: 4, name: "JavaScript", icon: <FaJs size={50} /> },
    { id: 5, name: "React", icon: <FaReact size={50} /> },
    { id: 6, name: "Tailwind CSS", icon: <RiTailwindCssFill size={50} /> },
    { id: 7, name: "Git & GitHub", icon: <FaGithub size={50} /> },
    { id: 8, name: "Data Structures & Algorithms", icon: <SiCplusplus size={50} /> },
  ]);

  const [experiences] = useState([
    {
      id: 1,
      company: "Graphic Era Hill University",
      role: "B.Tech CSE (Cybersecurity) Student",
      period: "2024 - 2028",
      description:
        "Currently pursuing B.Tech in Computer Science & Engineering (Cybersecurity). Actively building strong foundations in programming, Data Structures & Algorithms, and core cybersecurity concepts while working on academic and personal projects.",
      logo: "/assets/logo.svg",
    },
    {
      id: 2,
      company: "Self Learning & Projects",
      role: "Independent Learner",
      period: "2024 - Present",
      description:
        "Continuously improving problem-solving skills through DSA practice and exploring areas like AI/ML and Cybersecurity. Focused on disciplined learning and building real-world understanding of computer science fundamentals.",
      logo: "/assets/logo.svg",
    },
  ]);

  return (
    <div className="mt-3 lg:mt-16" id="skills">
      <div className="px-5 lg:px-28">

        <motion.h2
          className="text-2xl lg:text-4xl text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          My <span className="font-extrabold">Skills</span>
        </motion.h2>

        {/* Skill Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-5 text-lg font-bold mt-7 lg:mt-16 w-full place-items-center gap-y-6 lg:gap-y-12">
          {skills.map((skill) => (
            <motion.div
              key={skill.id}
              className="bg-white border-2 hover:bg-black hover:text-white transition-all cursor-pointer border-black rounded p-3 h-36 w-36 lg:h-44 lg:w-44 flex flex-col items-center justify-center gap-5"
              initial={{ opacity: 0, y: 5 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: skill.id * 0.1 }}
              viewport={{ once: true }}
            >
              {skill.icon}
              <p className="text-center text-sm lg:text-base">{skill.name}</p>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Academic Journey Section */}
      <div className="bg-black w-full my-8 py-8 lg:my-16 lg:py-16">
        <motion.h2
          className="text-2xl lg:text-4xl text-center text-white"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          My <span className="font-extrabold">Journey</span>
        </motion.h2>

        <div className="px-5 lg:px-28 my-8 lg:mt-16 space-y-10">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              className="bg-black p-5 border border-[#D4D4D8] rounded-md hover:bg-[#27272A] transition-all cursor-pointer"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
                delay: index * 0.2,
              }}
              viewport={{ once: true }}
            >
              <div className="flex justify-between flex-col items-start lg:flex-row lg:items-center">
                <div className="flex items-center gap-5">
                  <img className="w-7" src={exp.logo} alt="" />
                  <h2 className="font-semibold text-white text-lg lg:text-xl">
                    {exp.role} - {exp.company}
                  </h2>
                </div>
                <span className="text-[#D4D4D8] font-semibold text-sm mt-4 lg:mt-0 lg:text-base">
                  {exp.period}
                </span>
              </div>
              <p className="text-[#D4D4D8] mt-6 text-sm/6 lg:text-base font-light">
                {exp.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}