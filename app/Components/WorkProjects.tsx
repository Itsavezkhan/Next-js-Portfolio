"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const workProjects = [
  {
    id: 1,
    name: "Skymart Retail management system",
    description:
      "Developed a dynamic form system for Skyymart Store with barcode scanning, product registration, edit/update functionality, billing details, and API integration. Enabled seamless product management including add, update, confirm, and form handling workflows.",
    image: "/SMTOP.png",
    link: "#",
  },

  {
    id: 2,
    name: "Real Estate Platform",
    description:
      "Created a property listing and management website where users can register, sell, and browse properties. Implemented features like property registration, search & filter, user authentication, and secure form handling for smooth transactions.",
    image: "/SUPERTOP.png",
    link: "#",
  },
  // {
  //   id: 3,
  //   name: "POS Application",
  //   description:
  //     "Created a POS app with barcode scanning, order management, and tax calculations for retail stores.",
  //   image: "/project3.png",
  //   link: "#",
  // },
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const WorkProjects = () => {
  return (
    <section
      id="work-projects"
      className="w-full min-h-screen bg-neutral-50 text-gray-900 flex flex-col items-center py-16 px-6"
    >
      {/* Heading */}
      <motion.div
        className="max-w-3xl text-center mb-12"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4 playfair">
          Work <span className="text-teal-600">Projects</span>
        </h2>
        <p className="text-gray-600">
          Some of the professional projects I worked on at my company.
        </p>
      </motion.div>

      {/* Projects Grid */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {workProjects.map((project) => (
          <motion.div
            key={project.id}
            variants={cardVariants}
            whileHover={{ scale: 1.05 }}
            className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col border border-gray-200"
          >
            <div className="relative w-full h-48">
              <Image
                src={project.image}
                alt={project.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-5 flex flex-col flex-1">
              <h3 className="text-xl font-semibold mb-2 text-gray-900">
                {project.name}
              </h3>
              <p className="text-gray-600 text-sm flex-1">
                {project.description}
              </p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 text-teal-600 hover:text-teal-500 font-medium transition"
              >
                View Project →
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default WorkProjects;
