import React from "react";

const Experience = () => {
  return (
    <>
      <div className="w-full min-h-screen bg-red-200 flex flex-col md:flex-row">
        {/* Left Section - Why Me? */}
        <div className="w-full md:w-1/2 p-6 flex flex-col justify-center bg-gray-500">
          <h2 className="text-2xl font-bold mb-4">Why Me?</h2>
          <ul className="list-disc list-inside space-y-2 text-lg">
            <li>Strong foundation in React & Next.js</li>
            <li>Good understanding of Redux & state management</li>
            <li>Experience with Tailwind CSS for modern UI</li>
            <li>Problem-solving & debugging skills</li>
            <li>Passionate about writing clean, maintainable code</li>
          </ul>
        </div>

        {/* Right Section - Work Experience */}
        <div className="w-full md:w-1/2 p-6 flex flex-col justify-center bg-gray-500">
          <h2 className="text-2xl font-bold mb-4">Work Experience</h2>
          <p className="text-lg">
            <span className="font-semibold">Frontend Developer</span> <br />
            5TechgLLP, Pune (Remote) <br />
            <span className="text-sm text-gray-700">June 2024 – June 2025</span>
          </p>
          <p className="mt-4">
            During this role, I worked as a frontend developer building scalable
            and user-friendly web applications using React, Next.js, Redux, and
            Tailwind CSS. I collaborated with a remote team to deliver
            high-quality features and improve performance.
          </p>
        </div>
      </div>
    </>
  );
};

export default Experience;
