"use client";

import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already accepted/declined cookies
    const cookieConsent = localStorage.getItem("cookieConsent");
    if (!cookieConsent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookieConsent", "declined");
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
        >
          <div className="max-w-4xl mx-auto relative">
            {/* Glowing background effect */}
            <motion.div
              className="absolute inset-0 bg-red-600/10 rounded-2xl blur-xl"
              animate={{
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* Main banner content */}
            <div className="relative bg-black/95 backdrop-blur-lg border border-red-600/30 rounded-2xl p-6 md:p-6 shadow-2xl">
              {/* Animated border glow */}
              <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
                <motion.div
                  className="absolute inset-0 opacity-50"
                  style={{
                    background:
                      "linear-gradient(90deg, transparent, rgba(255, 0, 0, 0.3), transparent)",
                  }}
                  animate={{
                    x: ["-100%", "200%"],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
              </div>

              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                {/* Text content */}
                <div className="flex-1 space-y-2">
                  <h3 className="text-white font-semibold text-lg md:text-xl flex items-center gap-2">
                    <motion.span
                      className="inline-block w-2 h-2 bg-red-600 rounded-full"
                      animate={{
                        scale: [1, 1.3, 1],
                        opacity: [1, 0.6, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                    Cookie Notice
                  </h3>
                  <p className="text-white/60 text-sm md:text-base leading-relaxed">
                    We use cookies to enhance your browsing experience and
                    analyze our traffic. By clicking "Accept", you consent to
                    our{" "}
                    <a
                      className="text-center text-white/60 underline"
                      href="/privacy"
                    >
                      Policies
                    </a>
                    .{" "}
                  </p>
                </div>

                {/* Action buttons */}
                <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto items-center">
                  {/* Decline button */}
                  <motion.button
                    onClick={handleDecline}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="relative px-6 py-3 text-white/80 hover:text-white transition-colors rounded-full border border-white/20 hover:border-white/40 backdrop-blur-sm overflow-hidden group"
                  >
                    <span className="relative z-10 text-sm font-medium">
                      Decline
                    </span>
                    <motion.div
                      className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity"
                      transition={{ duration: 0.3 }}
                    />
                  </motion.button>

                  {/* Accept button */}
                  <motion.button
                    onClick={handleAccept}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="relative px-6 py-3 rounded-full overflow-hidden group"
                  >
                    {/* Animated glow effect on hover */}
                    <motion.div
                      className="absolute inset-0 bg-red-600 opacity-0 group-hover:opacity-100 blur-md transition-opacity"
                      transition={{ duration: 0.3 }}
                    />

                    {/* Button background */}
                    <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-700" />

                    {/* Animated shine effect */}
                    <motion.div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100"
                      style={{
                        background:
                          "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent)",
                      }}
                      animate={{
                        x: ["-100%", "200%"],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    />

                    <span className="relative z-10 text-sm font-semibold text-white">
                      Accept All
                    </span>
                  </motion.button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
