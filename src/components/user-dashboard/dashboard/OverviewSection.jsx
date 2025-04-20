"use client";
import React, { useState } from "react";
import OverviewCard from "./OverviewCard";
import { IoChevronDownSharp } from "react-icons/io5";
import FadeUp from "@/components/motion/FadeUp";
import TitleBadge from "@/components/common/TitleBadge";
import CardContainer from "@/components/common/CardContainer";

const OverviewSection = () => {
  const [selectedRange, setSelectedRange] = useState("This week");

  const dateRangeOptions = ["This week", "Last 7 days", "Last 30 days"];

  const handleRangeChange = (event) => {
    setSelectedRange(event.target.value);
  };

  return (
    <CardContainer>
      <div className="flex justify-between">
        <TitleBadge bg_color="bg-[#CABDFF]" text="Overview" />
        <div className="relative">
          <select
            className="appearance-none outline-none inline-flex text-sm items-center border-2 rounded-xl border-[#EFEFEF] pl-3 pr-7 py-2 text-gray-500 font-semibold cursor-pointer w-auto"
            value={selectedRange}
            onChange={handleRangeChange}
            style={{ minWidth: "120px" }}
          >
            {dateRangeOptions.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
          <IoChevronDownSharp className="absolute right-3 top-3 text-gray-500 pointer-events-none" />
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5">
        <FadeUp delay={0.2}>
          <OverviewCard bg_color="bg-[#B5E4CA40]" />
        </FadeUp>
        <FadeUp delay={0.4}>
          <OverviewCard bg_color="bg-[#B1E5FC40]" />
        </FadeUp>
        <FadeUp delay={0.6}>
          <OverviewCard bg_color="bg-[#CABDFF40]" />
        </FadeUp>
      </div>
    </CardContainer>
  );
};

export default OverviewSection;
