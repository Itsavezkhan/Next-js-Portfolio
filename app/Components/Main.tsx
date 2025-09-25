"use client";

import React from "react";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

// Variants for staggered children
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25, // delay between children
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 }, // start slightly lower
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const Main = () => {
  return (
    <motion.div
      className="relative w-full py-28 flex items-center justify-center bg-red-50 text-center px-6"
      variants={container}
      initial="hidden"
      style={{
        backgroundImage:
          "url('https://www.toptal.com/designers/subtlepatterns/uploads/dot-grid.png')",
      }}
      animate="show"
    >
      {/* Main Content */}
      <motion.div
        className="flex flex-col items-center justify-center max-w-2xl space-y-6"
        variants={container}
      >
        <motion.p
          className="text-gray-500 text-sm tracking-wide uppercase"
          variants={item}
        >
          Hi, I am
        </motion.p>

        <motion.h1
          className="text-4xl md:text-6xl font-bold text-gray-900 playfair"
          variants={item}
        >
          Avez Khan
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-gray-600 leading-relaxed poppins"
          variants={item}
        >
          A{" "}
          <span className="text-teal-600 font-medium">Frontend Developer</span>{" "}
          passionate about building clean, simple, and user-friendly interfaces.
        </motion.p>

        {/* Call to Action Buttons */}
        <motion.div className="mt-6" variants={item}>
          <Link
            href="https://drive.google.com/file/d/1OLV3ve05amCaGAZby_5k3IIE5PIk4XOl/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-900 font-medium hover:text-teal-600 transition"
          >
            Resume <ExternalLink className="w-4 h-4" />
          </Link>
        </motion.div>

        {/* Tagline */}
        <motion.p className="mt-4 text-gray-400 text-sm" variants={item}>
          Let’s create something meaningful together ✨
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

export default Main;

// Find all products in the Electronics category.

// Find all products where the price is greater than 5000.

// Find the product with the name "Shoes".

// Show only the name and price of all products (hide _id).

// Find products with stock less than or equal to 15.

// Find all products where the brand is either "Nike" or "Sony".

// Sort all products by price in descending order.

// Count how many products belong to the Fashion category.

// Increase the stock of the product "Phone" by 10.

// Delete the product with name "Watch".

// db.products.find({category: "Electrinics"})
// db.products.find({$gt:{price: 5000}})
// db.products.proects({name: 1, price: 1, _id:0})
// db.products.findall({$lte: {stock: 15}})
// db.products.projects({brand: ${or:{"nyke", "sony"}}})
// db.products.projects({$sort: {"price, -1"}})
// db.products.count({category: "fashhion"})
// db.products.find({name: "phone"}).stock({prev+ 10})
// db.products.delete({name: "watch"})

// Find all orders where status is "pending".

// Find all orders placed by Alice.

// Show only customer and total (hide _id).

// Find orders where total is greater than 30000.

// Sort orders by total in descending order.

// Count how many orders have the status "delivered".

// Find all orders where the items array contains "Laptop".

// Find orders where the items array has quantity ≥ 2.

// Group orders by customer and show the sum of totals for each.

// Find the average order total across all customers.

// shop.orders.find({}, status: "pending")
// shop.orders.findOne({ customer: "alice"}, items: 1)
// Shop.orders.find({}, {customer: 1, total: 1, _id: 0})
// shop.orders.find({}, total: { $gt: {30000}})
// shop.orders.find().sort({total: -1})
// shop.orders.find({}, status: "delievered")
// shop.orders.find({}, $in: {"items.product" : "Laptop"}) || ShoppingBag.orders.find({$match:{"items.product": "Laptop"}})
// shop.orders.find({}, $in: {$gt :{"items.quantity", 2}})
// shop.orders.projects({$group : {customer, $sum : {total}}})
// shop.orders.find({},{ $avg: {total}})
