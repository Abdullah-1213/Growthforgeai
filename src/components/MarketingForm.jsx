import React from "react";
import { ArrowRight } from "lucide-react";

export default function MarketingForm({ onClose }) {
  return (
    <div className="bg-white rounded-2xl shadow-2xl w-[95%] sm:w-[600px] md:w-[720px] p-8 border border-gray-200 relative animate-fadeIn">
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-5 right-5 text-gray-500 hover:text-gray-700 text-2xl font-bold"
      >
        ×
      </button>

      {/* Header */}
      <div className="flex items-center mb-8">
        <div className="flex -space-x-2">
          <img
            src="https://randomuser.me/api/portraits/women/44.jpg"
            alt="avatar1"
            className="w-12 h-12 rounded-full border-2 border-white shadow"
          />
          <img
            src="https://randomuser.me/api/portraits/men/46.jpg"
            alt="avatar2"
            className="w-12 h-12 rounded-full border-2 border-white shadow"
          />
        </div>
        <div className="ml-4">
          <h2 className="text-xl md:text-2xl font-semibold text-gray-900">
            Connect with our marketing experts
          </h2>
          <p className="text-sm text-gray-500">
            to discuss your goals and build a project plan
          </p>
        </div>
      </div>

      {/* Form */}
      <form className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Full Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Full name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              className="w-full border-b border-gray-300 focus:border-purple-600 outline-none py-2 text-gray-800 text-base"
              placeholder="John Doe"
            />
          </div>

          {/* Company Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Company email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              className="w-full border-b border-gray-300 focus:border-purple-600 outline-none py-2 text-gray-800 text-base"
              placeholder="john@company.com"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Phone number
            </label>
            <div className="flex items-center gap-3 border-b border-gray-300 focus-within:border-purple-600 py-2">
              <select className="outline-none text-gray-700 bg-transparent">
                <option>+1</option>
                <option>+44</option>
                <option>+92</option>
              </select>
              <input
                type="text"
                placeholder="201-555-0123"
                className="flex-1 outline-none text-gray-800 text-base"
              />
            </div>
          </div>

          {/* Website */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Link to your website <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              className="w-full border-b border-gray-300 focus:border-purple-600 outline-none py-2 text-gray-800 text-base"
              placeholder="https://yourwebsite.com"
            />
          </div>
        </div>

        {/* Project Goals */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Tell us about your project goals <span className="text-red-500">*</span>
          </label>
          <textarea
            rows="3"
            className="w-full border-b border-gray-300 focus:border-purple-600 outline-none py-2 text-gray-800 text-base resize-none"
            placeholder="Describe your goals here..."
          ></textarea>
        </div>

        <div className="border-b border-gray-300 mt-6"></div>

        {/* Submit Button */}
        <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <button
            type="submit"
            className="flex items-center justify-center gap-2 bg-purple-700 hover:bg-purple-800 text-white font-medium px-8 py-3 rounded-full transition"
          >
            BOOK A CALL <ArrowRight className="w-5 h-5" />
          </button>

          <p className="text-xs text-gray-500 leading-snug max-w-sm">
            By submitting the form I agree with the{" "}
            <a href="#" className="text-purple-600 underline">
              Privacy Policy
            </a>{" "}
            and consent to receive SMS updates from Halo Lab.
          </p>
        </div>
      </form>
    </div>
  );
}
