import React from "react";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

const Main = () => {
  return (
    <>
      <div className="relative w-full min-h-screen flex items-center justify-center bg-neutral-50 text-center px-6">
        {/* Main Content */}
        <div className="flex flex-col items-center justify-center max-w-2xl space-y-6">
          <p className="text-gray-500 text-sm tracking-wide uppercase">
            Hi, I am
          </p>

          <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
            Avez Khan
          </h1>

          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            A{" "}
            <span className="text-teal-600 font-medium">
              Frontend Developer
            </span>{" "}
            passionate about building clean, simple, and user-friendly
            interfaces.
          </p>

          {/* Call to Action Buttons */}
          <div className="mt-6">
            <Link
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-900 font-medium hover:text-teal-600 transition"
            >
              Resume <ExternalLink className="w-4 h-4" />
            </Link>
          </div>

          {/* Tagline */}
          <p className="mt-4 text-gray-400 text-sm">
            Let’s create something meaningful together ✨
          </p>
        </div>
      </div>
    </>
  );
};

export default Main;
