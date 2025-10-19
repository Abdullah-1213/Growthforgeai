import { motion } from "framer-motion";

export default function ProjectCard({ image, categories = [], flag, title }) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
      className="relative bg-[#0A0A24]/90 backdrop-blur-md text-white rounded-2xl overflow-hidden
      w-full border border-white/10 hover:border-[#3A30FF]/40 
      hover:shadow-[0_0_25px_-5px_#3A30FF] transition-all duration-500 ease-out group"
    >
      {/* Image Section */}
      <div className="relative">
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="w-full h-48 sm:h-56 md:h-60 object-cover rounded-t-2xl transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-105"
        />
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>

      {/* Content Section */}
      <div className="p-4 sm:p-5 space-y-3 text-center sm:text-left">
        {/* Tags */}
        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 text-[10px] sm:text-xs text-gray-400 uppercase tracking-wide">
          {categories.map((cat, index) => (
            <span key={index}>
              {cat}
              {index !== categories.length - 1 && <span className="mx-1">,</span>}
            </span>
          ))}
          {flag && (
            <img
              src={flag}
              alt="flag"
              className="w-4 h-4 sm:w-5 sm:h-5 rounded-sm border border-white/10"
            />
          )}
        </div>

        {/* Title */}
        <h3 className="text-sm sm:text-base font-semibold leading-snug text-white/90 hover:text-white transition-colors duration-300">
          {title}
        </h3>
      </div>

      {/* Subtle Outer Glow */}
      <div className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-all duration-500">
        <div className="absolute inset-0 bg-gradient-to-r from-[#3A30FF]/40 via-[#FFD33D]/40 to-[#FF6B00]/40 rounded-2xl blur-[18px]"></div>
      </div>
    </motion.div>
  );
}
