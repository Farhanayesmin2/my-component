'use client'
import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const DashboardSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex">
      <div className={`fixed inset-y-0 z-10 bg-white border-r transition duration-300 ease-in-out transform ${isOpen ? "translate-x-0" : "-translate-x-full"} ${isOpen ? "w-[50%] sm:w-[20%]" : "w-0"}`}>
        <div className="pl-2 pt-2">
          <button onClick={handleToggle} className="z-10 w-12 h-12 bg-white rounded-full shadow-md transition duration-300 ease-in-out flex items-center justify-center">
            {isOpen ? <FiX className="text-gray-500 hover:text-gray-700 text-2xl" /> : <FiMenu className="text-gray-500 hover:text-gray-700 text-2xl" />}
          </button>
        </div>
      </div>
      {isOpen && <div className="fixed inset-0 bg-white opacity-25" onClick={handleToggle} style={{ zIndex: 9 }}></div>}
    </div>
  );
};

export default DashboardSidebar;
