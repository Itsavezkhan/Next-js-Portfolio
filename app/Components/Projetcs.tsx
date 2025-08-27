"use client";
import React from "react";
import { useState } from "react";
import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    thumbnail: "/project1.png",
    video: "/project1.mp4",
    description:
      "A personal portfolio built with Next.js, Tailwind, and Framer Motion.",
  },
  {
    id: 2,
    title: "E-commerce App",
    thumbnail: "/project2.png",
    video: "/project2.mp4",
    description:
      "Full-stack e-commerce app with authentication, cart, and payments.",
  },
  {
    id: 3,
    title: "Chat App",
    thumbnail: "/project3.png",
    video: "/project3.mp4",
    description:
      "Realtime chat application using Socket.IO and Next.js API routes.",
  },
  {
    id: 4,
    title: "Dashboard",
    thumbnail: "/project4.png",
    video: "/project4.mp4",
    description:
      "Admin dashboard with charts, analytics, and role-based access.",
  },
];

const Projetcs = () => {
  const [selected, setSelected] = useState(projects[0]);
  return (
    <>
      <div id="projects" className="w-full h-screen bg-white flex flex-col">
        {/* Top Section */}
        <div className="w-full md:h-[30%] flex overflow-x-auto md:overflow-hidden gap-4 p-4">
          {projects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelected(project)}
              className={`flex-shrink-0 w-full md:w-1/4 h-40 rounded-xl cursor-pointer border-2 transition-all shadow-md ${
                selected.id === project.id
                  ? "border-amber-600 scale-105"
                  : "border-transparent hover:border-gray-300 hover:scale-105"
              }`}
            >
              <Image
                src={project.thumbnail}
                alt={project.title}
                width={256}
                height={160}
                className="w-full h-full object-cover rounded-xl"
              />
              <p className="text-center font-semibold mt-2 text-gray-800">
                {project.title}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Section (Desktop) */}
        <div className="hidden md:flex w-full h-[70%]">
          {/* Left Video */}
          <div className="w-[70%] p-4">
            <video
              src={selected.video}
              controls
              className="w-full h-full rounded-xl object-cover border border-gray-200"
            />
          </div>
          {/* Right Details */}
          <div className="w-[30%] p-6 flex flex-col justify-center bg-gray-50 rounded-l-xl border border-gray-200 shadow-md">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">
              {selected.title}
            </h2>
            <p className="text-gray-600">{selected.description}</p>
          </div>
        </div>

        {/* Mobile view bottom just scroll */}
        <div className="md:hidden flex-1 overflow-y-auto p-4 space-y-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="rounded-xl bg-gray-50 p-4 shadow-md border border-gray-200"
            >
              <Image
                src={project.thumbnail}
                alt={project.title}
                width={400}
                height={200}
                className="w-full h-48 object-cover rounded-lg"
              />
              <h2 className="mt-2 text-lg font-bold text-gray-900">
                {project.title}
              </h2>
              <p className="text-gray-600">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Projetcs;
