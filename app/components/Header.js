"use client";

import { useEffect, useState } from "react";
import Logo from "./Logo";
import Link from "next/link";
import Navigation from "./Navigation";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [maxRadius, setMaxRadius] = useState(0);

  useEffect(() => {
    const updateRadius = () => {
      const diagonal = Math.hypot(window.innerWidth, window.innerHeight);
      setMaxRadius(diagonal);
    };
    updateRadius();
    window.addEventListener("resize", updateRadius);
    return () => window.removeEventListener("resize", updateRadius);
  }, []);

  return (
    <header className=" ">
      <div className="flex md:flex-col items-center justify-between md:justify-start">
        <Logo />
        <Navigation />

        {/* Hamburger icon - visible only on mobile */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          className="z-50 w-10 h-10 flex flex-col justify-center items-center gap-1.5 md:hidden"
        >
          <span
            className={`block w-8 h-0.5 bg-white rounded transition-transform duration-300 ${
              isOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-8 h-0.5 bg-white rounded transition-opacity duration-300 ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`block w-8 h-0.5 bg-white rounded transition-transform duration-300 ${
              isOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>
      {/* Circular Mobile Menu */}
      <div
        className="fixed top-0 left-0 w-screen h-screen bg-secondary-200 z-40 md:hidden"
        style={{
          clipPath: isOpen
            ? `circle(${maxRadius}px at calc(100% - 40px) 40px)` // expands from hamburger
            : "circle(0px at calc(100% - 40px) 40px)",
          transition: "clip-path 0.5s ease-in-out",
          pointerEvents: isOpen ? "auto" : "none",
        }}
      >
        <nav className="flex flex-col bg-amber-800 items-center justify-center h-full space-y-12 text-2xl font-bold text-white">
          <Link
            key="destination"
            href="/collection"
            onClick={() => setIsOpen(false)}
          >
            kjhanskdf
          </Link>
          <Link key="guides" href="/cabins" onClick={() => setIsOpen(false)}>
            Guides
          </Link>
          <Link
            key="collection"
            href="/collection-2"
            onClick={() => setIsOpen(false)}
          >
            Collection
          </Link>
          <Link key="about" href="/about" onClick={() => setIsOpen(false)}>
            About
          </Link>
        </nav>
      </div>
    </header>
  );
}
