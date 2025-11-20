// "use client";
// import { useState } from "react";
// import Image from "next/image";
//
// export default function Page() {
//   const [selectedImage, setSelectedImage] = useState(null);
//   const images = ["/main.jpg", "/main.jpg", "/main.jpg", "/main.jpg"];
//
//   return (
//     <div>
//       <div className="min-h-screen p-6">
//         <h1 className="text-3xl font-bold text-center mb-8">Gallery</h1>
//
//         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
//           {images.map((src, i) => (
//             <div
//               key={i}
//               className="relative cursor-pointer group"
//               onClick={() => setSelectedImage(src)}
//             >
//               <Image
//                 src={src}
//                 alt={`Gallery image ${i + 1}`}
//                 width={400}
//                 height={400}
//                 className="rounded-xl object-cover w-full h-48 sm:h-56 group-hover:opacity-80 transition"
//               />
//             </div>
//           ))}
//         </div>
//
//         {selectedImage && (
//           <div
//             className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
//             onClick={() => setSelectedImage(null)}
//           >
//             <div className="relative max-w-3xl w-full p-4">
//               <button
//                 onClick={() => setSelectedImage(null)}
//                 // className="absolute top-1 right-1 text-white text-5xl font-bold hover:scale-110 transition"
//                 className="absolute -top-10 -right-10 text-white text-4xl font-bold hover:scale-110 transition cursor-pointer"
//               >
//                 ×
//               </button>
//               <Image
//                 src={selectedImage}
//                 alt="Selected"
//                 width={800}
//                 height={800}
//                 className="rounded-xl w-full h-auto object-contain"
//               />
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// components/ImageSlider.jsx
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    id: 1,
    image: "/images/london.jpg",
    title: "Northolt, England, United Kingdom",
    subtitle: "Wooden Playground Structure in Northolt",
  },
  {
    id: 2,
    image: "/images/shanxi.jpg",
    title: "Shanxi, China",
    subtitle: "Brown and Red Temple",
  },
  {
    id: 3,
    image: "/images/nepal.jpg",
    title: "Somewhere in Nepal",
    subtitle: "Three Boy's Standing Holding Branches",
  },

  {
    id: 4,
    image: "/images/baba.jpg",
    title: "Kathmandu, Nepal",
    subtitle: "Baba meetup",
  },
  {
    id: 5,
    image: "/images/kanagawa.jpg",
    title: "Kangawa",
    subtitle: "Admirable painting",
  },
  {
    id: 6,
    image: "/images/nepal4.jpg",
    title: "Somewhere in Nepal",
    subtitle: "Three kid having moments",
  },
  {
    id: 7,
    image: "/images/nepal3.jpg",
    title: "Somewhere in Nepal",
    subtitle: "Passing bridge",
  },
];

export default function ImageSlider() {
  const [index, setIndex] = useState(0);

  // Autoplay
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000); // 5s per slide
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => setIndex((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="relative w-full h-[85vh] md:h-[95vh] overflow-hidden">
      {/* Slides */}
      <AnimatePresence mode="wait">
        <motion.div
          key={slides[index].id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="absolute inset-0 w-full h-full"
        >
          <Image
            src={slides[index].image}
            alt={slides[index].title}
            fill
            className="object-cover"
            priority
          />

        </motion.div>

        {/* Caption */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 text-white"
        >
          <h2 className="text-2xl md:text-3xl font-bold">
            {slides[index].title}
          </h2>
          <p className="text-lg md:text-xl opacity-90">
            {slides[index].subtitle}
          </p>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute cursor-pointer left-4 top-1/2 -translate-y-1/2 text-white text-3xl md:text-8xl z-10 hover:text-cyan-400 transition"
      >
        ‹
      </button>
      <button
        onClick={nextSlide}
        className="absolute cursor-pointer right-4 top-1/2 -translate-y-1/2 text-white text-3xl md:text-8xl z-10 hover:text-cyan-400 transition"
      >
        ›
      </button>
    </div>
  );
}

//
// export default function ImageSlider() {
//   const [index, setIndex] = useState(0);
//   const [direction, setDirection] = useState(0);
//   const [isPaused, setIsPaused] = useState(false);
//
//   // Auto-play
//   useEffect(() => {
//     if (isPaused) return;
//
//     const interval = setInterval(() => {
//       setDirection(1);
//       setIndex((prev) => (prev + 1) % slides.length);
//     }, 5000);
//
//     return () => clearInterval(interval);
//   }, [isPaused]);
//
//   const nextSlide = () => {
//     setDirection(1);
//     setIndex((prev) => (prev + 1) % slides.length);
//   };
//
//   const prevSlide = () => {
//     setDirection(-1);
//     setIndex((prev) => (prev - 1 + slides.length) % slides.length);
//   };
//
//   return (
//     <div
//       className="relative w-full h-[85vh] md:h-[95vh] overflow-hidden"
//       onMouseEnter={() => setIsPaused(true)}
//       onMouseLeave={() => setIsPaused(false)}
//     >
//       <AnimatePresence mode="wait" custom={direction}>
//         <motion.div
//           key={slides[index].id}
//           custom={direction}
//           initial={{ x: direction > 0 ? 300 : -300, opacity: 0 }}
//           animate={{ x: 0, opacity: 1 }}
//           exit={{ x: direction > 0 ? -300 : 300, opacity: 0 }}
//           transition={{ duration: 0.3, ease: "easeInOut" }}
//           drag="x"
//           dragConstraints={{ left: 0, right: 0 }}
//           onDragEnd={(e, info) => {
//             if (info.offset.x < -50) nextSlide();
//             if (info.offset.x > 50) prevSlide();
//           }}
//           className="absolute inset-0 w-full h-full"
//         >
//           <Image
//             src={slides[index].image}
//             alt={slides[index].title}
//             fill
//             className="object-cover"
//             priority
//           />
//
//           {/* Caption */}
//           <motion.div
//             initial={{ y: 20, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ delay: 0.2, duration: 0.5 }}
//             className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 text-white"
//           >
//             <h2 className="text-2xl md:text-3xl font-bold">
//               {slides[index].title}
//             </h2>
//             <p className="text-lg md:text-xl opacity-90">
//               {slides[index].subtitle}
//             </p>
//           </motion.div>
//         </motion.div>
//       </AnimatePresence>
//
//       {/* Prev Button */}
//       <button
//         onClick={prevSlide}
//         className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-6xl z-10 hover:text-cyan-400 transition"
//       >
//         ‹
//       </button>
//
//       {/* Next Button */}
//       <button
//         onClick={nextSlide}
//         className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-6xl z-10 hover:text-cyan-400 transition"
//       >
//         ›
//       </button>
//
//       {/* Pagination Dots */}
//       <div className="absolute bottom-6 w-full flex justify-center gap-3">
//         {slides.map((_, i) => (
//           <button
//             key={i}
//             onClick={() => {
//               setDirection(i > index ? 1 : -1);
//               setIndex(i);
//             }}
//             className={`w-3 h-3 rounded-full transition ${
//               i === index ? "bg-white" : "bg-white/40"
//             }`}
//           ></button>
//         ))}
//       </div>
//     </div>
//   );
// }
