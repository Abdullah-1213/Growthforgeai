import { useState } from "react";
import { Plus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How quickly can we start after the initial consultation?",
      answer:
        "Once we understand your project scope and requirements, we can typically begin within 1–2 weeks after the agreement.",
    },
    {
      question: "Can I have direct communication with the dedicated team?",
      answer:
        "Absolutely. You’ll have full access to communicate directly with the team through Slack, email, or video calls.",
    },
    {
      question: "Can I scale my team up or down?",
      answer:
        "Yes. We offer flexible scaling depending on your project’s current needs and timeline.",
    },
    {
      question: "Do your teams work in my time zone?",
      answer:
        "Our teams are distributed globally and can align with your time zone to ensure smooth collaboration.",
    },
    {
      question: "What industries can benefit from a dedicated team approach?",
      answer:
        "We work across multiple industries including healthcare, fintech, AI, eCommerce, and more.",
    },
    {
      question:
        "Is there a minimum or maximum contract period for a dedicated team?",
      answer:
        "We typically start with a 3-month minimum contract to ensure efficiency, but longer engagements are common.",
    },
  ];

  return (
    <section id="faq" className="relative bg-[#03031A] text-white px-6 md:px-16 py-24 overflow-hidden">
      {/* Animated Background Glow */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-indigo-900/30 via-transparent to-purple-900/20 blur-3xl opacity-70"
        animate={{
          opacity: [0.5, 0.8, 0.5],
          scale: [1, 1.1, 1],
        }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
      />

      {/* Title */}
      <motion.div
        className="text-center relative z-10 mb-14"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-4xl md:text-5xl font-extrabold mb-3">
          <span className="text-[#FFD33D]">Frequently</span> Asked Questions
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Everything you need to know before working with us.
        </p>
      </motion.div>

      {/* FAQ Box */}
      <div className="relative z-10 max-w-3xl mx-auto backdrop-blur-sm bg-white/5 rounded-2xl border border-white/10 overflow-hidden shadow-[0_0_25px_rgba(255,255,255,0.05)] divide-y divide-white/10">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            className="py-5 px-6 hover:bg-white/5 transition-colors duration-300"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <button
              onClick={() =>
                setOpenIndex(openIndex === index ? null : index)
              }
              className="w-full flex justify-between items-center text-left font-medium text-white/90 hover:text-white transition"
            >
              <span>{faq.question}</span>
              <motion.div
                animate={{ rotate: openIndex === index ? 45 : 0 }}
                transition={{ duration: 0.25 }}
                className="bg-indigo-500/20 rounded-full p-1 border border-indigo-400/30"
              >
                <Plus size={18} className="text-indigo-300" />
              </motion.div>
            </button>

            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  key="content"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="mt-3 text-sm text-gray-400 leading-relaxed">
                    {faq.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
