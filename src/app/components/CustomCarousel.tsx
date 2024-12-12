"use client";
import React from "react";
import { motion } from "framer-motion";

const images = [
  "https://res.cloudinary.com/dcisswp5z/image/upload/v1711194673/cld-sample.jpg",
];

const CustomCarousel = () => {
  return (
    <motion.div
      className="relative w-[200px] h-72 flex items-center justify-center overflow-hidden rounded-xl"
      whileHover={{ width: 300 }}
    >
      <div className="relative w-full h-full flex items-center justify-center">
        <motion.img
          src={images[0]}
          alt="Carousel image"
          className="absolute w-72 h-full object-cover"
          whileHover={{ scale: 1.1 }}
          onHoverEnd={() => {}}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 20, // Controls how much the spring overshoots
            duration: 0.5,
          }}
        />
      </div>
    </motion.div>
  );
};

export default CustomCarousel;
