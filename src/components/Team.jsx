import { motion } from "framer-motion";
import ProfileCard from "./ProfileCard";
import profile1 from "../assets/Profile.jpg";
import profile2 from "../assets/Profile2.jpg";

export default function Team() {
  return (
    <section
      id="dedicated-team"
      className="relative bg-[#03031A] text-white px-6 md:px-16 py-24 overflow-hidden"
    >
      {/* Animated Background Glow */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-indigo-900/30 via-transparent to-purple-900/20 blur-3xl opacity-70"
        animate={{
          opacity: [0.5, 0.8, 0.5],
          scale: [1, 1.1, 1],
        }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
      />

      {/* Heading */}
      <motion.div
        className="text-center relative z-10 mb-14"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-4xl md:text-5xl font-extrabold mb-3">
          <span className="text-[#FFD33D]">Our</span> Team
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Meet the creative minds behind our success.
        </p>
      </motion.div>

      {/* Team Cards */}
      <div className="relative z-10 flex flex-col md:flex-row md:flex-wrap justify-center items-center gap-10 md:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.8 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <ProfileCard
            image={profile1}
            name="JOHN"
            title="CO-FOUNDER"
            message="Passionate about Leading and Automating the stuff"
            // linkedinUrl="https://linkedin.com"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.8 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <ProfileCard
            image={profile2}
            name="Nadir Rap"
            title="AI DEVELOPER"
            message="Loves turning complex ideas into clean, scalable digital solutions."
            Fiverr="https://www.fiverr.com/s/Ke1KVw8"
          />
        </motion.div>
      </div>
    </section>
  );
}

