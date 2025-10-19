import { FaLinkedin } from "react-icons/fa";

export default function ProfileCard({ image, name, title, message, linkedinUrl }) {
  return (
    <div className="bg-[#1A1A2E] rounded-xl shadow-lg p-6 w-72 text-center hover:scale-105 transition-transform duration-300 ease-in-out">
      {/* Profile Image */}
      <div className="w-28 h-28 mx-auto mb-4">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover rounded-full border-2 border-[#FFD33D]"
        />
      </div>

      {/* Name and Title */}
      <h3 className="text-xl font-bold">{name}</h3>
      <p className="text-[#FFD33D] text-sm mb-3">{title}</p>

      {/* Message */}
      <p className="text-gray-400 text-sm mb-4">{message}</p>

      {/* LinkedIn Button */}
      <a
        href={linkedinUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-4 py-2 text-sm bg-[#FFD33D] text-black font-medium rounded-lg hover:bg-yellow-400 transition"
      >
        <FaLinkedin />
        Connect
      </a>
    </div>
  );
}
