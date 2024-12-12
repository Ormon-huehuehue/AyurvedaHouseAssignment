import React from "react";
import CustomCarousel from "./components/CustomCarousel";


const images = [
  "https://res.cloudinary.com/dcisswp5z/image/upload/v1711194673/cld-sample.jpg",
  "https://res.cloudinary.com/dcisswp5z/image/upload/v1711194675/cld-sample-5.jpg",
  "https://res.cloudinary.com/dcisswp5z/image/upload/v1711194674/cld-sample-4.jpg",
];

const titles = [
  "Laughing woman",
  "Random shoe i found online",
  "BREAKFAST?"
]


export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className=  'flex overflow-hidden rounded-xl'>
      {images.map((image, index)=>(
        <CustomCarousel key={index} imageUrl ={image} title={titles[index]} />
      ))}
    </div>
    </div>
  );
}
