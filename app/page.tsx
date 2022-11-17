"use client";

import { useState } from "react";
import { AnimatePresence, motion, MotionConfig } from "framer-motion";

const images = [
  "/images/image-1.jpg",
  "/images/image-2.jpg",
  "/images/image-3.jpg",
  "/images/image-4.jpg",
  "/images/image-5.jpg",
];

export default function Home() {
  const [index, setIndex] = useState(0);

  return (
    <MotionConfig
      transition={{
        duration: 0.7,
        ease: [0.33, 0.03, 0.27, 0.8],
      }}
    >
      <div className="h-screen w-screen bg-[#111] grid place-content-center">
        <div className="relative mx-4">
          <AnimatePresence initial={false}>
            {index !== 0 && (
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.7 }}
                exit={{ opacity: 0, pointerEvents: "none" }}
                className="absolute z-10 block p-1 text-sm text-gray-700 rounded-full top-1/2 bg-white/70 hover:bg-white left-2"
                onClick={() => setIndex(index - 1)}
              >
                <ChevronLeft />
              </motion.button>
            )}
          </AnimatePresence>
          <div className="overflow-hidden">
            <motion.div
              animate={{ x: `-${index * 100}%` }}
              className="flex max-w-2xl bg-white"
            >
              {images.map((image) => (
                <motion.img
                  key={image}
                  className="aspect-[3/2] object-cover"
                  src={image}
                  alt={image}
                />
              ))}
            </motion.div>
          </div>
          <AnimatePresence initial={false}>
            {index !== images.length - 1 && (
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.7 }}
                exit={{ opacity: 0, pointerEvents: "none" }}
                className="absolute z-10 block p-1 text-sm text-gray-700 rounded-full top-1/2 bg-white/70 hover:bg-white right-2"
                onClick={() => setIndex(index + 1)}
              >
                <ChevronRight />
              </motion.button>
            )}
          </AnimatePresence>
        </div>
      </div>
    </MotionConfig>
  );
}

const ChevronLeft = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.75 19.5L8.25 12l7.5-7.5"
      />
    </svg>
  );
};

const ChevronRight = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8.25 4.5l7.5 7.5-7.5 7.5"
      />
    </svg>
  );
};
