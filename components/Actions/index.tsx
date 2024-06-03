"use client";
import { useState } from "react";

interface ActionsProps {
  ip: number;
}

const Actions: React.FC<ActionsProps> = ({ ip }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = (): void => {
    setIsOpen(!isOpen);
  };

  const handleAction = (): void => {
    console.log(`Number of IP: ${ip}`);
  };

  return (
    <div className="relative">
      <button
        className="flex items-center justify-between w-full p-2 focus:outline-none"
        onClick={toggleDropdown}
      >
        <h2 className={`font-bold ${isOpen ? "text-[#4359CA]" : ""} `}>
          Actions
        </h2>
        <svg
          className={`w-6 h-6 transition-transform ${
            isOpen ? "transform rotate-180 text-[#4359CA]" : ""
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={3}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      {isOpen && (
        <div className="absolute top-full left-0 mt-1 bg-white shadow-lg rounded-md z-10">
          <button
            className="block w-full py-2 px-4 text-left hover:bg-gray-100"
            onClick={handleAction}
          >
            Processing
          </button>
          <button
            className="block w-full py-2 px-4 text-left hover:bg-gray-100"
            onClick={handleAction}
          >
            In Progress
          </button>
          <button
            className="block w-full py-2 px-4 text-left hover:bg-gray-100"
            onClick={handleAction}
          >
            Completed
          </button>
        </div>
      )}
    </div>
  );
};

export default Actions;
