import { useState } from "react";
import { ChevronDown, Phone, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-scroll";
import Logo from "../assets/white icom-01.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const navLinks = [
    "HOW WE WORK",
    "USE CASES",
    "PROJECTS",
    "DEDICATED TEAM",
    "FAQ",
  ];

  const serviceItems = [
    "AI Chatbots & Agents",
    "Automated Marketing Solutions",
    "Predictive Analytics",
    "Process Automation (RPA)",
    "n8n Workflow Automation",
    "Business Automation Tools",
    "AI-Powered Branding Solutions",
    "Data-Driven Insights",
    "Intelligent UI/UX Design",
    "Automated Email Campaigns",
    "AI Data Analysis",
    "Intelligent Customer Support",
  ];

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl border-b border-white/10 bg-gradient-to-r from-[#050517]/90 via-[#0B0B2E]/80 to-[#1A1A40]/90 shadow-[0_0_25px_rgba(60,60,255,0.25)]"
    >
      <nav className="flex justify-between items-center px-6 sm:px-10 py-4">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10">
            <img
              src={Logo}
              alt="Logo"
              className="w-full h-full object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]"
            />
          </div>
          <span className="font-bold tracking-wider text-white/90 text-sm sm:text-base">
            GROWTHFORGE <span className="text-[#FFD33D]">AI</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium">
          {/* SERVICES DROPDOWN */}
          <li className="relative group cursor-pointer">
            <div className="flex items-center gap-1  text-white font-medium hover:text-[#FFD33D] transition">
              SERVICES <ChevronDown size={14} />
            </div>

<motion.div
  initial={{ opacity: 0, y: -10 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.3 }}
  className="absolute top-7 left-0
             bg-white/
             
             text-white
             shadow-[0_0_25px_rgba(255,211,61,0.2)]
             rounded-2xl p-6 w-[30rem] z-50
             border border-white/20
             opacity-0 invisible
             group-hover:opacity-100 group-hover:visible
             transition-all duration-300
             grid grid-cols-2 md:grid-cols-3 gap-3"
>
  {serviceItems.map((item) => (
    <a
      key={item}
      href="#"
      className="px-3 py-2 rounded-lg text-gray-200 text-sm 
                 hover:bg-gradient-to-r 
                 hover:from-[#3A30FF]/60 hover:to-[#6F42C1]/60 
                 hover:text-[#FFD33D] 
                 transition-all duration-300
                 hover:shadow-[0_0_10px_rgba(255,211,61,0.3)]"
    >
      {item}
    </a>
  ))}
</motion.div>


          </li>

          {/* Smooth Scroll Links */}
          {navLinks.map((link) => {
            const id = link.toLowerCase().replace(/\s+/g, "-");
            return (
              <li
                key={link}
                className="relative group cursor-pointer text-white/80 hover:text-[#FFD33D] transition"
              >
                <Link
                  to={id}
                  smooth={true}
                  duration={700}
                  offset={-80}
                  className="cursor-pointer"
                >
                  {link}
                </Link>
                <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-gradient-to-r from-[#FFD33D] to-[#FF6F61] rounded-full group-hover:w-full transition-all duration-300"></span>
              </li>
            );
          })}
        </ul>

        {/* Contact Button (Desktop) */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="hidden md:flex bg-gradient-to-r from-[#FFD33D] to-[#FFB347] text-black font-semibold rounded-full px-5 py-2 text-sm items-center gap-2 shadow-md hover:shadow-yellow-400/30 transition"
        >
          CONTACT US
          <Phone
            size={20}
            className="bg-[#2C1FB2] rounded-full text-white p-1 shadow-[0_0_10px_rgba(44,31,178,0.6)]"
          />
        </motion.button>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white"
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {/* Subtle Bottom Glow Line */}
      <div className="h-[1px] bg-gradient-to-r from-transparent via-[#FFD33D]/40 to-transparent"></div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="md:hidden bg-[#0B0B2E]/95 backdrop-blur-xl border-t border-white/10 shadow-2xl"
          >
            <ul className="flex flex-col gap-3 p-6 text-white text-sm font-medium">
              {/* SERVICES ACCORDION */}
              <li>
        <button
          onClick={() => setServicesOpen(!servicesOpen)}
          className="flex justify-between items-center w-full text-left text-white hover:text-[#FFD33D] transition"
        >
          <span>SERVICES</span>
          <ChevronDown
            size={16}
            className={`transition-transform duration-300 ${
              servicesOpen ? "rotate-180 text-[#FFD33D]" : ""
            }`}
          />
        </button>

        <AnimatePresence>
          {servicesOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-3 flex flex-col gap-2 pl-3 border-l border-white/10"
            >
              {serviceItems.map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-gray-300 text-sm hover:text-[#FFD33D] transition"
                >
                  {item}
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </li>


              {/* Smooth Scroll Links */}
              {navLinks.map((link) => {
                const id = link.toLowerCase().replace(/\s+/g, "-");
                return (
                  <li key={link}>
                    <Link
                      to={id}
                      smooth={true}
                      duration={700}
                      offset={-80}
                      onClick={() => setMenuOpen(false)}
                      className="block py-2 hover:text-[#FFD33D] transition"
                    >
                      {link}
                    </Link>
                  </li>
                );
              })}

              {/* Contact Button (Mobile) */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-[#FFD33D] to-[#FFB347] text-black font-semibold rounded-full px-5 py-2 text-sm flex items-center justify-center gap-2 mt-3 shadow-md hover:shadow-yellow-400/30 transition"
              >
                CONTACT US
                <Phone
                  size={18}
                  className="bg-[#2C1FB2] rounded-full text-white p-1 shadow-[0_0_10px_rgba(44,31,178,0.6)]"
                />
              </motion.button>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
