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
      className="w-full min-h-screen bg-white text-gray-900 flex flex-col items-center px-0 py-12"
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

      {/* Thumbnails */}
      <motion.div
        className="w-full max-w-6xl flex overflow-x-auto md:overflow-hidden gap-6 pb-4"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.15 } },
        }}
      >
        {projects.map((project) => (
          <motion.div
            key={project.id}
            onClick={() => setSelected(project)}
            className={`flex-shrink-0 w-72 md:w-1/3 h-48 rounded-xl cursor-pointer border-2 transition-all shadow-md flex flex-col items-center justify-center ${
              selected.id === project.id
                ? "border-amber-600 scale-105"
                : "border-transparent hover:border-gray-300 hover:scale-105"
            }`}
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
            }}
          >
            <Image
              src={project.thumbnail}
              alt={project.title}
              width={256}
              height={160}
              className="w-full h-40 object-cover rounded-t-xl"
            />
            <p className="text-center font-semibold mt-2 text-gray-800">
              {project.title}
            </p>
          </motion.div>
        ))}
      </motion.div>

      {/* Bottom Section (Desktop) */}
      <div className="hidden md:flex w-full max-w-6xl mt-10 gap-6">
        {/* Left Video */}
        <div className="w-3/4">
          <AnimatePresence mode="wait">
            <motion.video
              key={selected.id}
              src={selected.video}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-[28rem] rounded-xl object-cover border border-gray-200 shadow-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
            />
          </AnimatePresence>
        </div>

        {/* Right Details */}
        <motion.div
          key={selected.title}
          className="w-1/4 flex flex-col justify-start bg-gray-50 rounded-xl border border-gray-200 shadow-md p-6 space-y-6"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-bold text-gray-900">{selected.title}</h2>

          {/* Highlights */}
          {selected.highlights && (
            <div className="space-y-2">
              {selected.highlights.map((h, i) => (
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
          {selected.libraries && (
            <div>
              <p className="font-semibold text-gray-900 mb-2">
                Libraries used:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                {selected.libraries.map((lib, i) => (
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
          {selected.features && (
            <div>
              <p className="font-semibold text-gray-900 mb-2">Key Features:</p>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                {selected.features.map((f, i) => (
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
        </motion.div>
      </div>
    </div>
  );
};

export default Projetcs;
