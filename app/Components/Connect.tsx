"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
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

// Variants for staggered animations
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.25 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Connect = () => {
  return (
    <section
      id="contact"
      className="w-full py-16 px-6 md:px-20 bg-neutral-50 text-gray-900"
    >
      {/* Heading */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4 playfair">
          What <span className="text-teal-600">People say</span>
        </h2>
        <p className="text-gray-600 mt-2">Testimonials & Contact</p>
      </motion.div>

      {/* Testimonial */}
      <motion.div
        className="p-6 rounded-2xl flex flex-col items-center text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        {/* Avatar with gradient glow */}
        <div className="relative">
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-teal-500 to-purple-500 blur-md opacity-40"></div>
          <img
            src={testimonials[0].image}
            alt={testimonials[0].name}
            className="relative w-20 h-20 rounded-full object-cover shadow-md"
          />
        </div>

        {/* Name */}
        <h3 className="text-lg font-semibold mt-4 text-gray-900">
          {testimonials[0].name}
        </h3>

        {/* Divider */}
        <div className="w-12 h-[2px] bg-gradient-to-r from-teal-500 to-purple-500 rounded-full my-3"></div>

        {/* Text */}
        <p className="text-gray-600 leading-relaxed italic">
          “{testimonials[0].text}”
        </p>
      </motion.div>

      {/* Contact Links */}
      <motion.div
        className="flex justify-center gap-4 mt-16 flex-wrap"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {[
          {
            icon: <FaTwitter />,
            label: "Twitter",
            href: "https://x.com/Aveziscoding/",
          },
          {
            icon: <FaLinkedin />,
            label: "LinkedIn",
            href: "https://www.linkedin.com/in/avez-khan-code/",
          },
          {
            icon: <FaWhatsapp />,
            label: "WhatsApp",
            href: "https://wa.me/8806863508",
          },
          {
            icon: <FaEnvelope />,
            label: "Email",
            href: "mailto:Avezkhan412@gmail.com",
          },
        ].map((link, i) => (
          <motion.div
            key={i}
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="
    w-12 h-12 flex items-center justify-center 
    rounded-full 
    bg-teal-50 text-gray-600 
    shadow-md 
    transition-all duration-300 
    hover:bg-gray-600 hover:text-white
  "
            >
              <span className="text-xl">{link.icon}</span>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Connect;
