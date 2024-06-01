"use client";

import Link from "next/link";
import React, { useState, ReactElement } from "react";
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

interface SidebarItemProps {
  icon: ReactElement;
  label: string;
  isOpen: boolean;
  to: string;
}

const sidebarItems: SidebarItemProps[] = [
  { icon: <FiHome />, label: "Dashboard", to: "/dashboard", isOpen: false },
  { icon: <FiUpload />, label: "Upload", to: "/dashboard/add_product", isOpen: false },
  { icon: <MdProductionQuantityLimits />, label: "All Products Items", to: "/dashboard/my_products", isOpen: false },
  { icon: <FiBarChart2 />, label: "Main Category", to: "/dashboard/main_cat", isOpen: false },
  { icon: <RxAlignTop />, label: "Top Category", to: "/dashboard/top_cat", isOpen: false },
  { icon: <VscTypeHierarchySub />, label: "Sub Category", to: "/dashboard/sub_cat", isOpen: false },
  { icon: <FiSend />, label: "Reviews", to: "/review", isOpen: false },
  { icon: <FiTrash2 />, label: "Delete User", to: "/delete", isOpen: false }
];

const SidebarItem: React.FC<SidebarItemProps> = ({ icon, label, isOpen, to }) => (
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

const DashboardSidebar: React.FC = () => {
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
        {/* Sidebar Content */}
        <nav className="px-4 py-8">
          <ul className="space-y-2">
            {sidebarItems.map((item, index) => (
              <SidebarItem
                key={index}
                icon={item.icon}
                label={item.label}
                isOpen={isOpen}
                to={item.to}
              />
            ))}
          </ul>
        </nav>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-white opacity-25"
          onClick={handleToggle}
          style={{ zIndex: 9 }}
        ></div>
      )}
    </div>
  );
};

export default DashboardSidebar;
