import React from "react";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

const Main = () => {
  return (
    <>
      <div className="w-full h-screen bg-amber-200 flex justify-center items-center">
        <div className="w-4/5 h-3/5 md:w-2/4 md:h-1/5 bg-amber-400 flex flex-col items-center justify-center">
          <p>Hi, I am Avez Khan</p>
          <p>A frontend developer interested in tech</p>
          <Link
            href=""
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4 text-white-600 hover:text-blue-300 flex gap-1.5 items-center"
          >
            Resume <ExternalLink className="w-4 h-4 " />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Main;
