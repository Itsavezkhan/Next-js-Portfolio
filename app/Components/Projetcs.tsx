"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "Social Media App",
    thumbnail: "/PP3.png",
    video: "/SMAFORPP.mp4",
    highlights: [
      {
        text: "Reduced API calls by ~70% through",
        bold: "debouncing",
        suffix: " technique improving performance.",
      },
      {
        text: "Improved FCP (First contentful paint) by ~100ms with",
        bold: "lazy loading",
      },
    ],
    libraries: [
      { name: "Redux", details: "State management, Async Thunk" },
      { name: "Toastify", details: "Alert Management" },
    ],
    features: [
      "Authentication (Stateful locally)",
      "User Profile Management",
      "CRUD operations for posts and users",
      "Commenting, Follow/Unfollow, Search, Like/Dislike, Bookmarking",
      "Image Upload, Feed & Trending Sections",
    ],
  },
  {
    id: 2,
    title: "E-commerce App",
    thumbnail: "/PP2.png",
    video: "/ECAFORPP.mp4",
    highlights: [
      {
        text: "Implemented",
        bold: "Razorpay payment",
        suffix: " integration for seamless",
        bold2: "payment transactions.",
      },
      {
        text: "Utilized",
        bold: "React Router DOM",
        suffix: " for navigation, Axios for data fetching, and",
        bold2: "React Toastify",
        suffix2: " for Alert Management.",
      },
    ],
    features: [
      "Authentication (Locally)",
      "Cart/Wishlist Management",
      "Search, Filters, Carousel, Page Details",
    ],
  },
  {
    id: 3,
    title: "Video Streaming App",
    thumbnail: "/PP1.png",
    video: "/VSAFORPP.mp4",
    highlights: [
      {
        text: "Implemented TMDB API for real-time fetching of movies and TV shows",
        bold: "debouncing",
        suffix: " Integrated React video player for seamless media playback.",
      },
      {
        text: "Improved FCP (First contentful paint) by ~70ms with",
        bold: "lazy loading",
      },
    ],
    libraries: [{ name: "React" }, { name: "TMDB Apis" }, { name: "Tailwind" }],
    features: ["search", "filter", "carousel", "infinite scroll"],
  },
];

const Projetcs = () => {
  const [selected, setSelected] = useState(projects[0]);

  return (
    <div
      id="projects"
      className="w-full px-2 md:px-0 min-h-screen bg-white text-gray-900 flex flex-col items-center  md:py-12"
    >
      {/* Section Title */}
      <motion.h2
        className="text-3xl md:text-4xl font-bold mb-10 text-center playfair"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        My Personal <span className="text-teal-600">Projects</span>
      </motion.h2>

      {/* Mobile View (Stacked video cards with details) */}
      <div className="flex flex-col gap-8 w-full max-w-lg md:hidden">
        {projects.slice(0, 3).map((project) => (
          <motion.div
            key={project.id}
            className="bg-gray-50 rounded-xl shadow-md overflow-hidden flex flex-col"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Video */}
            <motion.video
              src={project.video}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-52 object-cover"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            />

            {/* Details */}
            <div className="p-5 flex flex-col space-y-4">
              <h2 className="text-lg font-semibold text-gray-900">
                {project.title}
              </h2>

              {/* Highlights */}
              {project.highlights && (
                <div className="space-y-1">
                  {project.highlights.map((h, i) => (
                    <motion.p
                      key={i}
                      className="text-gray-600 text-sm"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: i * 0.2 }}
                    >
                      {h.text} <strong>{h.bold}</strong>
                      {h.suffix && h.suffix}
                    </motion.p>
                  ))}
                </div>
              )}

              {/* Libraries */}
              {project.libraries && (
                <div>
                  <p className="font-semibold text-gray-900 mb-1 text-sm">
                    Libraries used:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-1 text-sm">
                    {project.libraries.map((lib, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.2 }}
                      >
                        <strong>{lib.name}</strong>
                        {lib.details && `: ${lib.details}`}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Features */}
              {project.features && (
                <div>
                  <p className="font-semibold text-gray-900 mb-1 text-sm">
                    Key Features:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-1 text-sm">
                    {project.features.map((f, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.15 }}
                      >
                        {f}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Desktop View (Expandable Cards) */}
      <div className="hidden md:flex w-full max-w-6xl mt-10 gap-6">
        {projects.slice(0, 3).map((project) => (
          <motion.div
            key={project.id}
            onClick={() => setSelected(project)}
            className={`cursor-pointer bg-gray-50 rounded-xl border border-gray-200 shadow-md overflow-hidden flex flex-col transition-all duration-500 ${
              selected.id === project.id
                ? "flex-[2] border-teal-400 shadow-md"
                : "flex-1"
            }`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Video */}
            <motion.video
              key={project.id}
              src={project.video}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-64 object-cover"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
            />

            {/* Details */}
            <div className="p-6 flex flex-col space-y-6">
              <h2 className="text-xl font-bold text-gray-900">
                {project.title}
              </h2>

              {/* Highlights */}
              {project.highlights && (
                <div className="space-y-2">
                  {project.highlights.map((h, i) => (
                    <motion.p
                      key={i}
                      className="text-gray-600"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: i * 0.2 }}
                    >
                      {h.text} <strong>{h.bold}</strong>
                      {h.suffix && h.suffix}
                    </motion.p>
                  ))}
                </div>
              )}

              {/* Libraries */}
              {project.libraries && (
                <div>
                  <p className="font-semibold text-gray-900 mb-2">
                    Libraries used:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    {project.libraries.map((lib, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.2 }}
                      >
                        <strong>{lib.name}</strong>
                        {lib.details && `: ${lib.details}`}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Features */}
              {project.features && (
                <div>
                  <p className="font-semibold text-gray-900 mb-2">
                    Key Features:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    {project.features.map((f, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.15 }}
                      >
                        {f}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projetcs;
