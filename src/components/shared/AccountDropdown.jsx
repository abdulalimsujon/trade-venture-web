"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { MdLogout } from "react-icons/md";
import { AnimatePresence } from "framer-motion";
import { BiSolidBarChartAlt2 } from "react-icons/bi";
const AccountDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="relative" ref={dropdownRef}>
      <div
        onClick={handleToggle}
        className="flex items-center gap-2 cursor-pointer"
      >
        <Image
          src="/dashboard/commenter-1.png"
          alt="User Avatar"
          width={40}
          height={40}
          className="rounded-full"
        />
        <div>
          <div className="text-base font-semibold">Johan Smith</div>
          <div className="text-sm text-[#22CD5A]">Startup User</div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute right-0 mt-6 w-60 bg-white shadow-lg rounded-xl z-10"
          >
            <ul className="p-4">
              <li className="px-4 py-2.5 text-md font-semibold text-gray-500 rounded-xl hover:bg-[#032D2C0D] cursor-pointer">
                Profile
              </li>
              <li className="px-4 py-2.5 text-md font-semibold text-gray-500 rounded-xl hover:bg-[#032D2C0D] cursor-pointer">
                Edit Profile
              </li>
              <li className="border-b border-gray-200 my-2 mx-4"></li>
              <li className="px-4 flex text-[#3694FF] items-center gap-2 py-2.5 text-md font-semibold rounded-xl hover:bg-[#032D2C0D] cursor-pointer">
                <BiSolidBarChartAlt2 size={22} /> Upgrade to Pro
              </li>
              <li className="border-b border-gray-200 my-2 mx-4"></li>
              <li className="px-4 py-2.5 text-md font-semibold text-gray-500 rounded-xl hover:bg-[#032D2C0D] cursor-pointer">
                Account Settings
              </li>
              <li className="px-4 py-2.5 text-md flex gap-2 font-semibold text-[#E46363] rounded-xl hover:bg-[#032D2C0D] cursor-pointer">
                <MdLogout size={22} /> Log out
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AccountDropdown;
