"use client";
import React, { useState, useEffect, useRef } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { BiMessageDetail } from "react-icons/bi";
import { LuBell } from "react-icons/lu";
import AccountDropdown from "./AccountDropdown";
import { CiSearch } from "react-icons/ci";
import Image from "next/image";
import profileImage from "@/assets/events/person2.png";
import { BsThreeDots } from "react-icons/bs";
import { LuMessageSquare } from "react-icons/lu";
import Link from "next/link";
import { useRouter } from "next/navigation";

const DashboardTopNavbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const router = useRouter();
  const dropdownRef = useRef(null);

  // Function to toggle the dropdown
  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const handleNavigation = () => {
    toggleDropdown();
    router.push("/users/dashboard/notifications");
  };

  // Close dropdown if clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="py-[20px] shadow-sm bg-white w-[1151px] h-[89px] mx-auto rounded px-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-[12px] relative">
          <input
            type="text"
            className="pl-10 pr-4 border rounded-xl w-[360px] h-[40px] focus:outline-none bg-[#F4F4F4]"
            placeholder="Search..."
          />
          <button className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-500">
            <CiSearch className="w-6 h-6" />
          </button>
        </div>

        {/* Profile Section */}
        <div className="flex items-center space-x-5">
          <div className="relative">
            <LuMessageSquare className="w-6 h-6"  color="#6F767E" />
            <div className="w-[10px] h-[10px] rounded-full bg-[#ff6a5f] absolute top-0 right-0"></div>
          </div>

          <div className="relative">
            <button onClick={toggleDropdown}>
              <LuBell className="w-6 h-6" color="#6F767E" />
              <div className="w-[10px] h-[10px] rounded-full bg-[#ff6a5f] absolute top-0 right-0"></div>
            </button>
          </div>
          <AccountDropdown />
        </div>
      </div>

      {isDropdownOpen && (
        <div
          ref={dropdownRef}
          className="absolute right-0 mt-5 bg-white border border-gray-200 rounded-lg shadow-lg z-10 w-[392px] p-4 mr-3"
        >
          <div className="flex justify-between">
            <div>
              <h1 className="font-semibold text-lg">Notification</h1>
            </div>
            <div className="w-8 h-8 rounded-full bg-[#EFEFEF] flex items-center justify-center">
              <BsThreeDots />
            </div>
          </div>
          <div>
            {/* Notifications */}
            {[...Array(4)].map((_, index) => (
              <div
                key={index}
                className="flex justify-between mt-5 border-b py-2"
              >
                <div className="flex gap-2">
                  <div className="bg-[#FFBC99] rounded-full relative">
                    <Image
                      src={profileImage}
                      className="rounded-full h-12 w-12"
                      alt="Profile Image"
                    />
                    <div className="absolute bottom-0 right-0 bg-[#2A85FF] rounded-full p-1">
                      <LuMessageSquare className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  <div>
                    <p>
                      <span className="font-bold text-base">Domenica</span>
                      <span className="text-[#9A9FA5]">@domenica</span>
                    </p>
                    <p>
                      <span className="text-[#9A9FA5]">Comment on </span>
                      <span className="font-bold">Pitch no-03</span>
                    </p>
                  </div>
                </div>
                <div className="flex gap-2 items-center">
                  <span className="text-[#9A9FA5] font-semibold text-sm">
                    1h
                  </span>
                  <div className="h-3 w-3 rounded-full bg-[#2A85FF]"></div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-2">
            <button
              onClick={handleNavigation}
              className="outline-none rounded-md py-2 font-semibold text-white bg-[#2A85FF] w-full"
            >
              See all notifications
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DashboardTopNavbar;
