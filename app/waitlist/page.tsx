"use client";

import { X } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function WaitlistPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const router = useRouter();

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="bg-black border border-red-500/30 rounded-2xl max-w-md w-full shadow-2xl relative overflow-hidden 
         bg-radial-[at_50%_75%] from-red-900/60 via-red-900/50 to-red/50 to-90%
        "
      >
        {/* Close button */}
        <button
          onClick={() => router.push("/")}
          className="absolute top-4 right-4 px-4 py-2 border border-white/30 rounded-full text-white/80 hover:text-white hover:border-red-500/50 transition-all duration-300 text-sm backdrop-blur-sm bg-black/30 z-10"
        >
          <X></X>
        </button>

        {/* Form content */}
        <div className="px-8 py-12 md:px-12 md:py-16 space-y-6 relative">
          {/* Header */}
          <div className="space-y-3 mb-8">
            <img src="/logo-new.png" className="w-16" alt="" />
          </div>

          {/* Success Message */}
          {isSuccess ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6 text-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring" }}
                className="w-20 h-20 mx-auto bg-red-500/20 rounded-full flex items-center justify-center"
              >
                <svg
                  className="w-10 h-10 text-red-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </motion.div>
              <div className="space-y-3">
                <h2 className="text-2xl font-bold text-white text-center">
                  You're on the list!
                </h2>
              </div>
            </motion.div>
          ) : (
            /* Form */
            <form
            className="space-y-4"
            method="POST"
            action="https://script.google.com/macros/s/AKfycbwS2W7Ysd5ct-ITiM2JGgQk2Ytl18-xlpx_khLtUwzHLw7y4tW6-A0wYwEPIAp0rw8dPg/exec"
            onSubmit={(e) => {
              e.preventDefault();
              const form = e.currentTarget;
              const formData = new FormData(form);

              setIsSubmitting(true);

              fetch(form.action, {
                method: "POST",
                body: formData,
              })
                .then(() => {
                  setIsSubmitting(false);
                  setIsSuccess(true);
                  form.reset();
                  // Optionally redirect after successful submission
                  // router.push("/");
                })
                .catch((error) => {
                  console.error("Error:", error);
                  setIsSubmitting(false);
                });
            }}
          >
            {/* Name field */}
            <div className="space-y-2">
              <input
                type="text"
                id="name"
                name="Name"
                required
                className="w-full bg-black/50 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-red-500/50 focus:ring-1 focus:ring-red-500/50 transition-all"
                placeholder="Enter your name"
              />
            </div>

            {/* Email field */}
            <div className="space-y-2">
              <input
                type="email"
                id="email"
                name="Email"
                required
                className="w-full bg-black/50 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-red-500/50 focus:ring-1 focus:ring-red-500/50 transition-all"
                placeholder="your@email.com"
              />
            </div>

            {/* Phone field (optional) */}
            <div className="space-y-2">
              <input
                type="tel"
                id="phone"
                name="Phone"
                className="w-full bg-black/50 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-red-500/50 focus:ring-1 focus:ring-red-500/50 transition-all"
                placeholder="+44 123 456 7890"
              />
            </div>

            {/* Submit button */}
            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
              whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
              className="relative w-full mt-6 pre-order-container cursor-pointer"
            >
              <div className="pre-order-hover"></div>
              <div className="pre-order-outside p-4 w-full h-full"></div>
              <div className="border-2 border-red-600 pre-order-inside p-4 w-full h-full text-center font-bold text-white lowercase flex items-center justify-center gap-2">
                {isSubmitting ? (
                  <>
                    <svg
                      className="animate-spin h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Submitting...
                  </>
                ) : (
                  "Join Waitlist"
                )}
              </div>
            </motion.button>

            {/* Privacy note */}
            <p className="text-white/40 text-xs text-center mt-4">
              We respect your privacy. Your information will only be used
              to contact you about eNO updates.
            </p>
          </form>
          )}
        </div>
      </motion.div>
    </div>
  );
}

