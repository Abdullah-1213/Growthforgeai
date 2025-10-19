import { Zap, Flame } from "lucide-react";
import Lottie from "lottie-react";
import { motion } from "framer-motion";
import aiBanner from "../assets/Forge.json";
import MarketingForm from "./MarketingForm";
import { useState, useEffect } from "react";

export default function Banner() {
  const [open, setOpen] = useState(false);

  // Optional UX fix: disable scroll when modal open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#050517] via-[#0B0B2E] to-[#1A1A40] text-white min-h-[90vh] flex flex-col md:flex-row items-center justify-center px-4 sm:px-8 md:px-16 py-10 md:py-20 gap-8 md:gap-12">

      {/* Animated Glow Background */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-1/3 left-1/4 w-64 sm:w-80 h-64 sm:h-80 bg-purple-600/30 rounded-full blur-[100px]"
          animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/3 w-72 sm:w-96 h-72 sm:h-96 bg-blue-600/20 rounded-full blur-[120px]"
          animate={{ scale: [1.2, 1, 1.3], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 7, repeat: Infinity }}
        />
      </div>

      {/* Left Section */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-gradient-to-br from-[#111132]/90 to-[#1E1E4D]/90 rounded-3xl p-6 sm:p-8 md:p-10 w-full md:w-7/12 shadow-[0_0_50px_rgba(60,60,255,0.2)] backdrop-blur-xl border border-white/10 text-center md:text-left relative z-10"
      >
        <h1 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold leading-snug sm:leading-tight">
          AUTOMATION & AGENTIC AI AGENCY HELPING BRANDS BECOME{" "}
          <span className="bg-gradient-to-r from-[#FFD33D] to-[#FF6F61] text-transparent bg-clip-text animate-pulse">
            FUTURE-READY
          </span>
        </h1>

        <div className="border-t border-white/10 mt-6 md:mt-8 pt-4 md:pt-6 flex flex-col md:flex-row items-center justify-between gap-5">
          <div className="flex items-center gap-3 text-sm sm:text-base">
            <div className="bg-yellow-400/10 p-2 rounded-full">
              <Flame size={20} className="text-yellow-400 animate-bounce" />
            </div>
            <p className="text-white/80 tracking-wide text-center md:text-left">
              5+ years of automation & AI-driven innovation
            </p>
          </div>

          {/* Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setOpen(true)}
            className="bg-gradient-to-r from-[#FFD33D] to-[#FFB347] text-black font-semibold px-6 py-2 rounded-full flex items-center gap-2 shadow-md hover:shadow-yellow-400/40 transition text-sm sm:text-base"
          >
            <Zap size={16} className="text-black" />
            BOOK A CALL
          </motion.button>
        </div>
      </motion.div>

      {/* Right Section (Lottie Animation) */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full md:w-5/12 flex justify-center items-center relative p-4 sm:p-8"
      >
        <motion.div
          className="absolute w-56 sm:w-72 md:w-80 h-56 sm:h-72 md:h-80 bg-gradient-to-r from-[#3A30FF]/30 to-[#6F42C1]/30 rounded-full blur-3xl opacity-30 animate-pulse"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        <Lottie
          animationData={aiBanner}
          loop
          autoplay
          className="w-full max-w-xs sm:max-w-md relative z-10 drop-shadow-[0_0_25px_rgba(100,100,255,0.4)] scale-95 sm:scale-100"
        />
      </motion.div>

      {/* Modal */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
          <MarketingForm onClose={() => setOpen(false)} />
        </div>
      )}
    </section>
  );
}
