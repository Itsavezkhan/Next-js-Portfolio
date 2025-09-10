"use client";
import React from "react";
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
        className="bg-white p-6 rounded-2xl shadow-md flex flex-col items-center text-center border border-gray-200"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <img
          src={testimonials[0].image}
          alt={testimonials[0].name}
          className="w-20 h-20 rounded-full object-cover mb-4 border-2 border-teal-500"
        />
        <h3 className="text-lg font-semibold">{testimonials[0].name}</h3>
        <p className="text-gray-600 mt-3">{testimonials[0].text}</p>
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
          <motion.a
            key={i}
            variants={itemVariants}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 bg-white hover:bg-teal-50 text-teal-600 font-medium border border-teal-100 px-4 py-2 rounded-full shadow-sm transition-all"
          >
            {link.icon}
            <span>{link.label}</span>
          </motion.a>
        ))}
      </motion.div>
    </section>
  );
};

export default Connect;
