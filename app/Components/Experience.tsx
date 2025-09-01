import React from "react";

const skills = [
  "React",
  "Redux Toolkit",
  "Tailwind CSS",
  "SQL",
  "Ant Design",
  "Formik",
];

const Experience = () => {
  return (
    <>
      <div
        id="work-exp"
        className="w-full min-h-screen flex flex-col md:flex-row items-start justify-center bg-neutral-50 px-6 py-16 gap-12 md:gap-20"
      >
        {/* Left Section - Why Me */}
        <div className="w-full md:w-1/2 flex flex-col justify-center space-y-6 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
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
              <span className="text-gray-900 font-medium">Tailwind CSS</span>{" "}
              for modern UI
            </li>
            <li>Problem-solving & debugging skills</li>
            <li>Passionate about writing clean, maintainable code</li>
          </ul>
        </div>

        {/* Right Section - Work Experience */}
        <div className="w-full md:w-1/2 flex flex-col justify-center space-y-6 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Work <span className="text-teal-600">Experience</span>
          </h2>

          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm space-y-3">
            <p className="text-lg text-gray-900 font-semibold">
              Frontend Developer
            </p>
            <p className="text-gray-600">
              5TechgLLP, Pune (Remote) <br />
              <span className="text-sm text-gray-500">
                June 2024 – June 2025
              </span>
            </p>
            <p className="text-gray-600 leading-relaxed">
              Worked on building scalable and user-friendly web applications
              using <span className="text-gray-900 font-medium">React</span>,{" "}
              <span className="text-gray-900 font-medium">Next.js</span>,{" "}
              <span className="text-gray-900 font-medium">Redux</span>, and{" "}
              <span className="text-gray-900 font-medium">Tailwind CSS</span>.
              Collaborated with a remote team to deliver high-quality features
              and improve performance.
            </p>
            {skills.map((skill) => (
              <span
                key={skill}
                className="text-teal-600 border border-teal-600/60 bg-white px-4 py-2 rounded-full text-sm font-medium hover:border-teal-600 transition"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Experience;
