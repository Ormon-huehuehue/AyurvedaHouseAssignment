"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import CustomCarousel from "./components/CustomCarousel";


const images = [
  "https://res.cloudinary.com/dcisswp5z/image/upload/v1711194673/cld-sample.jpg",
  "https://res.cloudinary.com/dcisswp5z/image/upload/v1711194675/cld-sample-5.jpg",
  "https://res.cloudinary.com/dcisswp5z/image/upload/v1711194674/cld-sample-4.jpg",
];

const Carousel = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    // <div className="relative w-[800px] h-72 flex items-center justify-center overflow-hidden rounded-xl">
    //   <div className="relative w-full h-full flex items-center justify-center">
    //     {images.map((src, index) => (
    //       <motion.img
    //         key={src}
    //         src={src}
    //         alt="Carousel image"
    //         className="absolute w-72 h-full object-cover transition-transform"
    //         style={{
    //           left: `${index * 30}%`,
    //           zIndex: hoveredIndex === index ? 10 : 0, // Control zIndex dynamically
    //         }}
    //         animate={{
    //           x: index === 0 ? -50 : index === images.length - 1 ? 50 : 0,
    //         }}
    //         whileHover={{ scale: 1.2, x: 0 }}
    //         onHoverStart={() => setHoveredIndex(index)} // Set zIndex on hover start
    //         onHoverEnd={() => {
    //           setTimeout(() => setHoveredIndex(null), 1000); // Reset zIndex after a delay
    //         }}
    //         transition={{
    //           type: "tween",
    //           ease: "linear",
    //           duration: 0.3,
    //         }}
    //       />
    //     ))}
    //   </div>
    // </div>
    <CustomCarousel/>
  );
};

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-green-100">
      <Carousel />
    </div>
  );
}
