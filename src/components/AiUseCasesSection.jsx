import {
  ShoppingCart,
  Stethoscope,
  BarChart3,
  Megaphone,
  Bot,
  GraduationCap,
  Home,
  CreditCard,
} from "lucide-react";
import { motion } from "framer-motion";

const useCases = [
  {
    icon: <ShoppingCart size={36} />,
    title: "E-Commerce",
    description: "AI agents boost sales with personalized recommendations.",
  },
  {
    icon: <Stethoscope size={36} />,
    title: "Healthcare",
    description: "Automated triaging and appointment workflows.",
  },
  {
    icon: <BarChart3 size={36} />,
    title: "Finance",
    description: "AI assists in fraud detection and loan approvals.",
  },
  {
    icon: <Megaphone size={36} />,
    title: "Marketing",
    description: "Hyper-personalized AI-driven campaigns.",
  },
  {
    icon: <Bot size={36} />,
    title: "Customer Support",
    description: "24/7 AI agents reduce resolution time.",
  },
  {
    icon: <CreditCard size={36} />,
    title: "SaaS & Billing",
    description: "AI automates churn prediction and renewals.",
  },
  {
    icon: <GraduationCap size={36} />,
    title: "Education",
    description: "AI tutors adapt based on student performance.",
  },
  {
    icon: <Home size={36} />,
    title: "Real Estate",
    description: "AI agents qualify leads and schedule tours.",
  },
];

export default function AiUseCasesSection() {
  return (
    <section
      id="use-cases"
      className="relative bg-gradient-to-b from-[#03031A] via-[#0A0A24] to-[#03031A] text-white py-16 sm:py-20 md:py-24 px-6 sm:px-10 md:px-20 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(58,48,255,0.15)_0%,_transparent_70%)]"></div>

      {/* Header */}
      <div className="relative text-center mb-12 sm:mb-16 z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-3"
        >
          Agentic AI &{" "}
          <span className="bg-gradient-to-r from-[#FFD33D] to-[#FF6B00] text-transparent bg-clip-text">
            Automation Use Cases
          </span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-gray-400 mt-2 text-base sm:text-lg max-w-2xl mx-auto"
        >
          Revolutionizing industries with next-gen AI agents.
        </motion.p>
      </div>

      {/* Use Case Grid */}
      <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 z-10">
        {useCases.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: index * 0.05,
              ease: "easeOut",
            }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 0px 25px rgba(58,48,255,0.4)",
            }}
            className="relative bg-[#0E0E2C]/60 backdrop-blur-md rounded-3xl border border-white/10 
            p-6 sm:p-8 text-center flex flex-col items-center justify-center
            hover:border-[#3A30FF]/50 transition-all duration-500 ease-out"
          >
            {/* Glow on hover */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#3A30FF]/20 via-transparent to-[#FFD33D]/20 opacity-0 hover:opacity-100 transition-opacity duration-700 blur-[20px]"></div>

            {/* Icon Circle */}
            <div className="bg-[#3A30FF]/20 p-4 sm:p-5 rounded-full mb-5 border border-[#3A30FF]/30 flex items-center justify-center">
              <div className="text-[#FFD33D]">{item.icon}</div>
            </div>

            {/* Title */}
            <h3 className="text-lg sm:text-xl font-semibold mb-2 text-white/90">
              {item.title}
            </h3>

            {/* Description */}
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed max-w-[240px] mx-auto">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Floating Glow Orbs */}
      <div className="absolute top-10 left-10 w-36 sm:w-40 h-36 sm:h-40 bg-[#3A30FF]/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-44 sm:w-48 h-44 sm:h-48 bg-[#FFD33D]/20 rounded-full blur-3xl animate-pulse"></div>
    </section>
  );
}
