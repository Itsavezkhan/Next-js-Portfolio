import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div
      id="about"
      className="w-full min-h-screen flex flex-col md:flex-row items-center justify-center bg-neutral-50 px-6 py-12 gap-12 md:gap-16"
    >
      {/* Left Column - Profile Image */}
      <div className="w-full md:w-1/2 flex justify-center">
        <Image
          src="/MYDP.png"
          alt="My Profile Picture"
          width={300}
          height={300}
          className="rounded-full object-cover shadow-md border border-gray-200"
        />
      </div>

      {/* Right Column - About Text */}
      <div className="w-full md:w-1/2 text-center md:text-left flex flex-col items-center md:items-start space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
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

        {/* <Link
          href="#projects"
          className="flex items-center gap-2 text-gray-900 font-medium hover:text-teal-600 transition"
        >
          View My Work <ArrowRight className="w-4 h-4" />
        </Link> */}
      </div>
    </div>
  );
};

export default About;
