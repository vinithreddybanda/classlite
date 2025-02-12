
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaHome, FaBook, FaUsers, FaCog, FaBars } from "react-icons/fa";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <motion.div
      animate={{ width: isOpen ? "250px" : "80px" }}
      className="h-screen bg-blue-600 text-white p-5 flex flex-col shadow-lg"
    >
      {/* Toggle Button */}
      <button onClick={toggleSidebar} className="mb-6 focus:outline-none">
        <FaBars size={24} />
      </button>
      
      {/* Menu Items */}
      <div className="flex flex-col space-y-6">
        <NavItem icon={<FaHome />} text="Dashboard" isOpen={isOpen} />
        <NavItem icon={<FaBook />} text="Courses" isOpen={isOpen} />
        <NavItem icon={<FaUsers />} text="Students" isOpen={isOpen} />
        <NavItem icon={<FaCog />} text="Settings" isOpen={isOpen} />
      </div>
    </motion.div>
  );
};

const NavItem = ({ icon, text, isOpen }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      className="flex items-center space-x-4 cursor-pointer"
    >
      {icon}
      {isOpen && <span>{text}</span>}
    </motion.div>
  );
};

export default Sidebar;
