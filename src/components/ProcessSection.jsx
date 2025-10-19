import { Plus } from "lucide-react";
import { motion } from "framer-motion";

export default function ProcessSection() {
  const steps = [
    {
      id: 1,
      title: "Discovery call & strategic workshop",
      tag: "FREE STEP #1",
      gradient: "from-blue-400 to-purple-500",
    },
    {
      id: 2,
      title: "Requirements collection & proposal",
      tag: "STEP #2",
      gradient: "from-purple-500 to-pink-400",
    },
    {
      id: 3,
      title: "Dedicated team formation & onboarding",
      tag: "STEP #3",
      gradient: "from-pink-400 to-yellow-400",
    },
    {
      id: 4,
      title: "Development & collaboration",
      tag: "STEP #4",
      gradient: "from-yellow-400 to-orange-500",
    },
    {
      id: 5,
      title: "Delivery, support & maintenance",
      tag: "STEP #5",
      gradient: "from-orange-500 to-red-500",
    },
  ];

  return (
    <section
      id="how-we-work"
      className="bg-gradient-to-br from-[#050517] via-[#0B0B2E] to-[#1A1A40] text-white py-20 px-6 sm:px-10 md:px-16 font-[Poppins]"
    >
      {/* Header */}
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-5 leading-tight"
        >
          How we{" "}
          <span className="bg-gradient-to-r from-[#FFD33D] to-[#FF6F61] bg-clip-text text-transparent">
            work
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-base sm:text-lg md:text-xl text-white/80 max-w-2xl sm:max-w-3xl mx-auto leading-relaxed font-light"
        >
          You share your project’s vision and goals — we assemble a dedicated,
          AI-powered team ready to bring your ideas to life with precision and innovation.
        </motion.p>
      </div>

      {/* Steps */}
      <div className="flex flex-col md:flex-row justify-center items-stretch text-center gap-8 md:gap-0">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className={`flex flex-col items-center justify-between w-full md:w-1/5 px-4 py-6 ${
              index !== steps.length - 1 ? "md:border-r border-white/10" : ""
            }`}
          >
            {/* Tag */}
            <div
              className={`${
                step.id === 1
                  ? "bg-[#FFD33D] text-black font-semibold"
                  : "text-white/70 border border-white/20"
              } text-xs px-3 py-1 rounded-full mb-4 uppercase tracking-wide`}
            >
              {step.tag}
            </div>

            {/* Title */}
            <h3 className="text-sm sm:text-base font-medium leading-snug mb-6 max-w-[160px] sm:max-w-[200px] text-white/90">
              {step.title}
            </h3>

            {/* Gradient Bar */}
            <motion.div
              whileHover={{ scale: 1.08 }}
              transition={{ duration: 0.3 }}
              className={`relative w-32 sm:w-40 md:w-48 h-6 bg-gradient-to-r ${step.gradient} rounded-full flex items-center justify-center`}
            >
              <Plus size={16} className="text-white z-10" />
              <div
                className={`absolute inset-0 bg-gradient-to-r ${step.gradient} blur-lg opacity-50 rounded-full`}
              />
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
