import React from "react";
import { FaTwitter, FaLinkedin, FaWhatsapp, FaEnvelope } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    text: "Working with Avez was an absolute pleasure. His skills in React and UI design are top-notch.",
    image: "/john.png", // replace with your images
  },
  {
    id: 2,
    name: "Sarah Smith",
    text: "Avez brings creativity and technical expertise together. I highly recommend him!",
    image: "/sarah.png",
  },
];

const Connect = () => {
  return (
    <>
      <section
        id="contact"
        className="w-full py-16 px-6 md:px-20 bg-neutral-50 text-gray-900"
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">What People Say</h2>
          <p className="text-gray-600 mt-2">Testimonials & Contact</p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-md flex flex-col items-center text-center border border-gray-200">
          <img
            src={testimonials[0].image}
            alt={testimonials[0].name}
            className="w-20 h-20 rounded-full object-cover mb-4 border-2 border-teal-500"
          />
          <h3 className="text-lg font-semibold">{testimonials[0].name}</h3>
          <p className="text-gray-600 mt-3">{testimonials[0].text}</p>
        </div>
        <div className="flex justify-center gap-4 mt-16 flex-wrap">
          {[
            {
              icon: <FaTwitter />,
              label: "Twitter",
              href: "https://twitter.com/",
            },
            {
              icon: <FaLinkedin />,
              label: "LinkedIn",
              href: "https://linkedin.com/",
            },
            {
              icon: <FaWhatsapp />,
              label: "WhatsApp",
              href: "https://wa.me/yourNumber",
            },
            {
              icon: <FaEnvelope />,
              label: "Email",
              href: "mailto:yourmail@gmail.com",
            },
          ].map((link, i) => (
            <a
              key={i}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-white hover:bg-teal-50 text-teal-600 font-medium border border-teal-100 px-4 py-2 rounded-full shadow-sm transition-all"
            >
              {link.icon}
              <span>{link.label}</span>
            </a>
          ))}
        </div>
      </section>
    </>
  );
};

export default Connect;
