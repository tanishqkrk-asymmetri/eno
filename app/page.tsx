"use client";

import { motion } from "motion/react";
import { useEffect } from "react";

export default function Home() {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center relative overflow-hidden">
      {/* Animated background glow effects */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-600/20 rounded-full blur-[120px]"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-red-600/20 rounded-full blur-[120px]"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.5, 0.3, 0.5],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center space-y-12 px-4">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="/logo-small.svg"
            alt="eNO Logo"
            className="w-48 md:w-64 neon"
          />
        </motion.div>

        {/* Coming Soon Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center space-y-4"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white">
            <span className="gradient-text">Coming Soon</span>
          </h1>
          <p className="text-white/60 text-lg md:text-xl max-w-2xl">
            Something exciting is on the way
          </p>
        </motion.div>

        {/* Animated decorative line */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "200px" }}
          transition={{ duration: 1, delay: 0.5 }}
          className="h-[2px] bg-gradient-to-r from-transparent via-red-600 to-transparent"
        />

        {/* Pulsing dot indicator */}
        <motion.div
          className="flex items-center space-x-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <motion.div
            className="w-3 h-3 bg-red-600 rounded-full"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [1, 0.6, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <span className="text-white/40 text-sm uppercase tracking-wider">
            Stay tuned
          </span>
        </motion.div>
      </div>

      {/* Bottom fade effect */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none" />
    </div>
  );
}
