"use client";
import React from "react";
import { motion } from "framer-motion";
import "tailwindcss/tailwind.css"; // Import Tailwind CSS

const images = [
  "https://res.cloudinary.com/dcisswp5z/image/upload/v1711194673/cld-sample.jpg",
  "https://res.cloudinary.com/dcisswp5z/image/upload/v1711194675/cld-sample-5.jpg",
  "https://res.cloudinary.com/dcisswp5z/image/upload/v1711194674/cld-sample-4.jpg",
];

const Carousel = () => {
  return (
    <div className="relative w-[800px] h-72 flex items-center justify-center overflow-hidden rounded-xl">
      <div className="relative w-full h-full flex items-center justify-center">
        {images.map((src, index) => (
          <motion.img
            key={src}
            src={src}
            alt="nah dawg"
            className="absolute w-72 h-full object-cover transition-transform"
            style={{ 
              left: `${index * 30}%`,
            }}
            animate={{
              x: index === 0 ? -50 : index === images.length - 1 ? 50 : 0,
            }}
            whileHover={{ scale: 1.2, zIndex: 10, x: 0 }}
            transition={{ 
              type : "tween",
              ease :"linear",
              duration : 0.1
             
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-green-100">
      <Carousel />
    </div>
  );
}
