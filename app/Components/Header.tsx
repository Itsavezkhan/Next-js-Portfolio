import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [show, setShow] = useState(false);

  const showMenu = () => {
    setShow((prev) => !prev);
  };
  return (
    <div className="relative">
      {/* Header */}
      <header className="w-full bg-white border-b border-gray-200 shadow-sm px-6 md:px-20 py-4 flex items-center justify-between z-10">
        <h1 className="text-xl font-bold text-gray-900 playfair">Avez Khan</h1>
        {show ? (
          <X
            className="w-6 h-6 cursor-pointer text-gray-500 md:hidden"
            onClick={showMenu}
          />
        ) : (
          <Menu
            className="w-6 h-6 cursor-pointer text-gray-500 md:hidden"
            onClick={showMenu}
          />
        )}
        <nav className="gap-3 flex-wrap font-poppins tracking-wider hidden md:flex">
          {[
            { label: "About", href: "#about" },
            { label: "Projects", href: "#projects" },
            { label: "Work Exp", href: "#work-exp" },
            { label: "Work Projects", href: "#work-projects" },
            { label: "Contact", href: "#contact" },
          ].map((item, i) => (
            <a
              key={i}
              href={item.href}
              className="
        relative text-black font-medium px-4 py-2
        transition-all duration-300 ease-out
        hover:text-teal-600
        after:content-[''] after:absolute after:left-0 after:-bottom-1 
        after:w-0 after:h-[2px] after:bg-teal-600
        after:transition-all after:duration-300
        hover:after:w-full
      "
            >
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      {show && (
        <div className="absolute top-20 left-0 w-full bg-gray-50 shadow-md md:hidden z-50">
          <ul className="flex flex-col space-y-4 p-4 text-gray-500">
            <li>Home</li>
            <li>About</li>
            <li>Projects</li>
            <li>Contact</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;
