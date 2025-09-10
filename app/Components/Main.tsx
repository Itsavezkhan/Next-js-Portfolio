"use client";

import React from "react";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

// Variants for staggered children
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25, // delay between children
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 }, // start slightly lower
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const Main = () => {
  return (
    <motion.div
      className="relative w-full min-h-screen flex items-center justify-center bg-neutral-50 text-center px-6"
      variants={container}
      initial="hidden"
      animate="show"
    >
      {/* Main Content */}
      <motion.div
        className="flex flex-col items-center justify-center max-w-2xl space-y-6"
        variants={container}
      >
        <motion.p
          className="text-gray-500 text-sm tracking-wide uppercase"
          variants={item}
        >
          Hi, I am
        </motion.p>

        <motion.h1
          className="text-4xl md:text-6xl font-bold text-gray-900 playfair"
          variants={item}
        >
          Avez Khan
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-gray-600 leading-relaxed poppins"
          variants={item}
        >
          A{" "}
          <span className="text-teal-600 font-medium">Frontend Developer</span>{" "}
          passionate about building clean, simple, and user-friendly interfaces.
        </motion.p>

        {/* Call to Action Buttons */}
        <motion.div className="mt-6" variants={item}>
          <Link
            href="https://drive.google.com/file/d/1OLV3ve05amCaGAZby_5k3IIE5PIk4XOl/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-900 font-medium hover:text-teal-600 transition"
          >
            Resume <ExternalLink className="w-4 h-4" />
          </Link>
        </motion.div>

        {/* Tagline */}
        <motion.p className="mt-4 text-gray-400 text-sm" variants={item}>
          Let’s create something meaningful together ✨
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

export default Main;
