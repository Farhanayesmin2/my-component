"use client";

import Link from "next/link";
import React, { useState } from "react";
import {
  FiMenu,
  FiX,
  FiHome,
  FiUpload,
  FiBarChart2,
  FiTrash2,
  FiSend,
} from "react-icons/fi";
import { RxAlignTop } from "react-icons/rx";
import { VscTypeHierarchySub } from "react-icons/vsc";
import { MdProductionQuantityLimits } from "react-icons/md";

const sidebarItems = [
  { icon: <FiHome />, label: "Dashboard", to: "/dashboard" },
  { icon: <FiUpload />, label: "Upload", to: "/dashboard/add_product" },
  { icon: <MdProductionQuantityLimits />, label: "All Products Items", to: "/dashboard/my_products" },
  { icon: <FiBarChart2 />, label: "Main Category", to: "/dashboard/main_cat" },
  { icon: <RxAlignTop />, label: "Top Category", to: "/dashboard/top_cat" },
  { icon: <VscTypeHierarchySub />, label: "Sub Category", to: "/dashboard/sub_cat" },
  { icon: <FiSend />, label: "Reviews", to: "/review" },
  { icon: <FiTrash2 />, label: "Delete User", to: "/delete" }
];

const SidebarItem = ({ icon, label, isOpen, to }) => (
  <li
    className={`flex items-center text-gray-700 hover:text-teal-500 font-medium py-2 px-4 ${
      isOpen ? "justify-start" : "justify-center"
    }`}
  >
    <Link href={to}>
      <div className="flex items-center">
        {icon}
        {isOpen && <span className="ml-2 inline">{label}</span>}
      </div>
    </Link>
  </li>
);

const DashboardSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 z-10 bg-white border-r transition duration-300 ease-in-out transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } ${isOpen ? "w-[50%] sm:w-[20%]" : "w-0"}`}
      >
        {/* Sidebar Toggle Button */}
        <div className="pl-2 pt-2">
          <button
            onClick={handleToggle}
            className="z-10 w-12 h-12 bg-white rounded-full shadow-md transition duration-300 ease-in-out flex items-center justify-center"
          >
            {isOpen ? (
              <FiX className="text-gray-500 hover:text-gray-700 text-2xl" />
            ) : (
              <FiMenu className="text-gray-500 hover:text-gray-700 text-2xl" />
            )}
          </button>
        </div>
      
      </div>

      {/* Overlay */}
     
    </div>
  );
};

export default DashboardSidebar;