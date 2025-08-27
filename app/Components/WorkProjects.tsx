"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const workProjects = [
  {
    id: 1,
    name: "E-commerce Dashboard",
    description:
      "Built an analytics dashboard with React, Redux, and Tailwind for managing sales and inventory.",
    image: "/project1.png",
    link: "#",
  },
  {
    id: 2,
    name: "Vendor Management System",
    description:
      "Developed a system for managing vendors, orders, and payments with authentication & role-based access.",
    image: "/project2.png",
    link: "#",
  },
  {
    id: 3,
    name: "POS Application",
    description:
      "Created a POS app with barcode scanning, order management, and tax calculations for retail stores.",
    image: "/project3.png",
    link: "#",
  },
];

const WorkProjects = () => {
  return (
    <>
      <section
        id="work-projects"
        className="w-full min-h-screen bg-neutral-50 text-gray-900 flex flex-col items-center py-16 px-6"
      >
        {/* Heading */}
        <div className="max-w-3xl text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Work Projects</h2>
          <p className="text-gray-600">
            Some of the professional projects I worked on at my company.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl">
          {workProjects.map((project) => (
            <motion.div
              key={project.id}
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
        </div>
      </section>
    </>
  );
};

export default WorkProjects;
