import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import flagUSA from "../assets/usa-flag.png";
import aiRoomImg from "../assets/aiimage.webp";
import aiAutomationImg from "../assets/automation.png";
import aiDesignImg from "../assets/design.png";

export default function Projects() {
  const projects = [
    {
      image: aiRoomImg,
      categories: ["Healthcare", "AI & ML"],
      flag: flagUSA,
      title:
        "Building the brand and digital foundation for AI-powered operating rooms",
    },
    {
      image: aiAutomationImg,
      categories: ["Enterprise", "Robotics"],
      flag: flagUSA,
      title: "Developing adaptive robotic systems for enterprise operations",
    },
    {
      image: aiDesignImg,
      categories: ["Design", "AI"],
      flag: flagUSA,
      title:
        "Creating next-gen AI-driven design experiences for digital agencies",
    },
    {
      image: aiRoomImg,
      categories: ["Fintech", "Automation"],
      flag: flagUSA,
      title: "Designing automation workflows for global fintech scalability",
    },
  ];

  return (
    <section
      id="projects"
      className="relative bg-gradient-to-br from-[#03031A] via-[#08083A] to-[#0A0A5E] px-4 sm:px-8 md:px-16 py-16 sm:py-20 md:py-24 text-white overflow-hidden"
    >
      {/* Background Glows */}
      <div className="absolute top-10 -left-20 sm:-left-32 w-60 sm:w-80 md:w-96 h-60 sm:h-80 md:h-96 bg-blue-500/20 rounded-full blur-2xl sm:blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 -right-20 sm:-right-32 w-60 sm:w-80 md:w-96 h-60 sm:h-80 md:h-96 bg-purple-500/20 rounded-full blur-2xl sm:blur-3xl animate-pulse"></div>

      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-12 sm:mb-16 relative z-10"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-[#FFD33D] to-[#FF6B00] bg-clip-text text-transparent leading-tight">
          Our Latest AI Projects
        </h2>
        <p className="text-gray-300 max-w-xl sm:max-w-2xl mx-auto leading-relaxed text-sm sm:text-base">
          Explore how we help global brands harness{" "}
          <span className="text-white font-semibold">AI & Automation</span> to
          redefine innovation, efficiency, and digital growth.
        </p>
      </motion.div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10 justify-items-center relative z-10">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.15 }}
            viewport={{ once: true }}
            className="w-full max-w-xs sm:max-w-sm transition-transform hover:scale-105 hover:shadow-[0_0_25px_rgba(255,255,255,0.1)] rounded-2xl"
          >
            <ProjectCard {...project} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
