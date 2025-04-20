"use client";
import CardContainer from "@/components/common/CardContainer";
import TitleBadge from "@/components/common/TitleBadge";
import React, { useState } from "react";
import { IoChevronDownSharp } from "react-icons/io5";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { date: "22", amount: 4000 },
  { date: "23", amount: 3000 },
  { date: "24", amount: 2000 },
  { date: "25", amount: 2780 },
  { date: "26", amount: 1890 },
  { date: "27", amount: 2390 },
  { date: "28", amount: 3490 },
];

const CustomTooltip = ({ payload, label }) => {
  if (!payload || payload.length === 0) return null;

  const amount = payload[0].value;

  return (
    <div className="bg-white p-2 rounded-lg shadow-md border border-gray-200">
      <div className="">{label}</div>
      <div className="flex items-center gap-2">
        <div
          className="size-4 rounded-md"
          style={{ backgroundColor: "#82ca9d" }}
        ></div>
        <div className="">{`${amount}K`}</div>
      </div>
    </div>
  );
};

const TotalInvestmentFound = () => {
  const [selectedRange, setSelectedRange] = useState("This week");

  const dateRangeOptions = ["This week", "Last 7 days", "Last 30 days"];

  const handleRangeChange = (event) => {
    setSelectedRange(event.target.value);
  };

  return (
    <CardContainer>
      <div className="flex justify-between">
        <TitleBadge bg_color="bg-[#CABDFF]" text="Total investment found" />
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
      <div className="h-[400px] w-full py-5">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis tickFormatter={(value) => `${value / 1000}`} />
            <Tooltip content={<CustomTooltip />} />
            <Bar dataKey="amount" fill="#82ca9d" barSize={30} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </CardContainer>
  );
};

export default TotalInvestmentFound;
