"use client";

import { useEffect, useRef, useState } from "react";

import { AnimatePresence, motion } from "motion/react";

export default function HomeVideo() {
  const videoRef = useRef(null);

  const [showButtons, setShowButtons] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowButtons(true);
    }, 8000);
    setTimeout(() => {
      videoRef.current.pause();
    }, 9000);
  }, []);

  return (
    <div className="min-h-screen max-h-screen overflow-hidden">
      <AnimatePresence>
        {showButtons && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            exit={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 0.5,
            }}
          >
            <div className="bg-red-500 rounded-full w-8 aspect-square absolute top-[36%] left-[49%] z-9999999 opacity-25 flex justify-center items-center">
              <div className="bg-red-500 rounded-full w-6 aspect-square z-999999999"></div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <video
        ref={videoRef}
        src="/hero.mp4"
        className="w-full h-screen object-cover scale-125 "
        autoPlay
        muted
      ></video>
    </div>
  );
}
