"use client";

import React from "react";
import { motion } from "framer-motion";

const skills = [
  "React",
  "Redux Toolkit",
  "Tailwind CSS",
  "SQL",
  "Ant Design",
  "Formik",
];

// Animation variants
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Experience = () => {
  return (
    <div
      id="work-exp"
      className="w-full min-h-screen flex flex-col md:flex-row items-start justify-center bg-neutral-50 px-6 py-16 gap-12 md:gap-20"
    >
      {/* Left Section - Why Me */}
      <motion.div
        className="w-full md:w-1/2 flex flex-col justify-center space-y-6 text-center md:text-left"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 playfair">
          Why <span className="text-teal-600">Me?</span>
        </h2>
        <ul className="list-disc list-inside space-y-3 text-gray-600 text-lg max-w-md mx-auto md:mx-0">
          <li>
            Strong foundation in{" "}
            <span className="text-gray-900 font-medium">React</span> &{" "}
            <span className="text-gray-900 font-medium">Next.js</span>
          </li>
          <li>
            Good understanding of{" "}
            <span className="text-gray-900 font-medium">Redux</span> & state
            management
          </li>
          <li>
            Experience with{" "}
            <span className="text-gray-900 font-medium">Tailwind CSS</span> for
            modern UI
          </li>
          <li>Problem-solving & debugging skills</li>
          <li>Passionate about writing clean, maintainable code</li>
        </ul>
      </motion.div>

      {/* Right Section - Work Experience */}
      <motion.div
        className="w-full md:w-1/2 flex flex-col justify-center space-y-6 text-center md:text-left"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 playfair">
          Work <span className="text-teal-600">Experience</span>
        </h2>

        <motion.div
          className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm space-y-3"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.p
            className="text-lg text-gray-900 font-semibold"
            variants={item}
          >
            Frontend Developer
          </motion.p>
          <motion.p className="text-gray-600" variants={item}>
            5TechgLLP, Pune (Remote) <br />
            <span className="text-sm text-gray-500">June 2024 – June 2025</span>
          </motion.p>
          <motion.p className="text-gray-600 leading-relaxed" variants={item}>
            Worked on building scalable and user-friendly web applications using{" "}
            <span className="text-gray-900 font-medium">React</span>,{" "}
            <span className="text-gray-900 font-medium">Next.js</span>,{" "}
            <span className="text-gray-900 font-medium">Redux</span>, and{" "}
            <span className="text-gray-900 font-medium">Tailwind CSS</span>.
            Collaborated with a remote team to deliver high-quality features and
            improve performance.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-2 pt-2"
            variants={container}
          >
            {skills.map((skill) => (
              <motion.span
                key={skill}
                className="text-teal-600 border border-teal-600/60 bg-white px-4 py-2 rounded-full text-sm font-medium hover:border-teal-600 transition"
                variants={item}
              >
                {skill}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Experience;
