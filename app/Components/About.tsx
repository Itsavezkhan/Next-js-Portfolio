"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div
      id="about"
      className="w-full min-h-auto flex flex-col md:flex-row items-center justify-center bg-yellow-50 px-6 py-12 gap-12 md:gap-16"
    >
      {/* Left Column - Profile Image */}
      {/* <motion.div
        className="w-full md:w-1/2 flex justify-center"
        initial={{ opacity: 0, x: -50 }} // fade from left
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Image
          src="/MYDP.png"
          alt="My Profile Picture"
          width={300}
          height={300}
          className="rounded-full object-cover shadow-md border border-gray-200"
        />
      </motion.div> */}

      {/* Right Column - About Text */}
      <motion.div
        className="w-full md:w-1/2 text-center md:text-left flex flex-col items-center md:items-start space-y-6"
        initial={{ opacity: 0, x: 50 }} // fade from right
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 playfair">
          About <span className="text-teal-600">Me</span>
        </h2>

        <p className="text-gray-600 leading-relaxed max-w-xl">
          Hi, I’m <span className="text-gray-900 font-semibold">Avez Khan</span>
          , a passionate{" "}
          <span className="text-teal-600">Frontend Developer</span> who loves
          building clean, responsive, and user-friendly websites. I enjoy
          working with modern tools like{" "}
          <span className="text-gray-900">React</span>,{" "}
          <span className="text-gray-900">Next.js</span>, and{" "}
          <span className="text-gray-900">TailwindCSS</span> to craft smooth
          user experiences.
        </p>

        <p className="text-gray-600 leading-relaxed max-w-xl">
          When I’m not coding, you’ll find me exploring new tech trends, solving
          problems, and continuously learning to grow as a developer ✨.
        </p>
      </motion.div>
    </div>
  );
};

export default About;
