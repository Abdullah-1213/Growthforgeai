import { Zap, Flame } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#03031A] text-white py-16 px-6 sm:px-10 md:px-16 relative overflow-hidden">
      
      {/* Background glow circles */}
      <div className="absolute top-0 left-1/4 w-40 h-40 bg-[#3A30FF] rounded-full blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-0 right-1/3 w-60 h-60 bg-[#FFD33D] rounded-full blur-3xl opacity-15 animate-pulse"></div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col md:flex-row justify-between gap-12">

        {/* About & Branding */}
        <div className="md:w-1/3">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
            GrowthForgeAI <span className="text-[#FFD33D]">Automation</span>
          </h2>
          <p className="text-white/80 text-sm sm:text-base">
            We help brands become future-ready with cutting-edge AI-driven automation solutions that elevate your business efficiency and growth.
          </p>

          <div className="flex items-center gap-3 mt-6">
            <div className="bg-yellow-400/10 p-2 rounded-full">
              <Flame size={20} className="text-yellow-400" />
            </div>
            <p className="text-white/90 text-sm">
              5+ years of AI innovation
            </p>
          </div>
        </div>

        {/* Quick Links */}
        <div className="md:w-1/3">
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <ul className="flex flex-col gap-3 text-white/80">
            <li className="hover:text-[#FFD33D] cursor-pointer transition">Home</li>
            <li className="hover:text-[#FFD33D] cursor-pointer transition">Services</li>
            <li className="hover:text-[#FFD33D] cursor-pointer transition">Projects</li>
            <li className="hover:text-[#FFD33D] cursor-pointer transition">About Us</li>
            <li className="hover:text-[#FFD33D] cursor-pointer transition">Contact</li>
          </ul>
        </div>

        {/* Contact & CTA */}
        <div className="md:w-1/3 flex flex-col gap-4">
          <h3 className="text-xl font-bold mb-2">Contact Us</h3>
          <p className="text-white/80 text-sm">info@growthforgeai.com</p>
          <p className="text-white/80 text-sm">+92 300 1234567</p>

          <button className="mt-4 bg-[#FFD33D] text-black font-semibold px-5 py-2 rounded-full flex items-center gap-2 hover:bg-yellow-300 transition shadow-md hover:shadow-yellow-400/30 w-max">
            <Zap size={16} className="text-black" />
            BOOK A CALL
          </button>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="mt-12 border-t border-white/20 pt-6 text-center text-white/60 text-sm">
        © {new Date().getFullYear()} GrowthForgeAI. All rights reserved.
      </div>
    </footer>
  );
}
