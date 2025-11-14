"use client";
import { useState } from "react";
import Image from "next/image";

export default function Page() {
  const [selectedImage, setSelectedImage] = useState(null);
  const images = ["/main.jpg", "/main.jpg", "/main.jpg", "/main.jpg"];

  return (
    <div>
      <div className="min-h-screen p-6">
        <h1 className="text-3xl font-bold text-center mb-8">Gallery</h1>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {images.map((src, i) => (
            <div
              key={i}
              className="relative cursor-pointer group"
              onClick={() => setSelectedImage(src)}
            >
              <Image
                src={src}
                alt={`Gallery image ${i + 1}`}
                width={400}
                height={400}
                className="rounded-xl object-cover w-full h-48 sm:h-56 group-hover:opacity-80 transition"
              />
            </div>
          ))}
        </div>

        {selectedImage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-3xl w-full p-4">
              <button
                onClick={() => setSelectedImage(null)}
                // className="absolute top-1 right-1 text-white text-5xl font-bold hover:scale-110 transition"
                className="absolute -top-10 -right-10 text-white text-4xl font-bold hover:scale-110 transition cursor-pointer"
              >
                ×
              </button>
              <Image
                src={selectedImage}
                alt="Selected"
                width={800}
                height={800}
                className="rounded-xl w-full h-auto object-contain"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
