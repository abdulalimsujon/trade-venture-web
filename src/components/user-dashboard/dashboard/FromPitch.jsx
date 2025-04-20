"use client";
import TitleBadge from "@/components/common/TitleBadge";
import React, { useState } from "react";
import { IoChevronDownSharp } from "react-icons/io5";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const data = [
  { name: "Sep 22", uv: 4000, pv: 2400, amt: 2400 },
  { name: "Sep 23", uv: 3000, pv: 1398, amt: 2210 },
  { name: "Sep 24", uv: 2000, pv: 9800, amt: 2290 },
  { name: "Sep 25", uv: 2780, pv: 3908, amt: 2000 },
  { name: "Sep 26", uv: 1890, pv: 4800, amt: 2181 },
  { name: "Sep 27", uv: 2390, pv: 3800, amt: 2500 },
  { name: "Sep 28", uv: 3490, pv: 4300, amt: 2100 },
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

const FromPitch = () => {
  const [selectedRange, setSelectedRange] = useState("This week");

  const dateRangeOptions = ["This week", "Last 7 days", "Last 30 days"];

  const handleRangeChange = (event) => {
    setSelectedRange(event.target.value);
  };

  return (
    <div className="w-full bg-white rounded-lg">
      <div className="flex justify-between mb-5 p-5">
        <TitleBadge bg_color="bg-[#22CD5A]" text="From pitch" />

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
          <IoChevronDownSharp className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none" />
        </div>
      </div>
      <div className="h-[400px] w-full py-5">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis
              tickFormatter={(value) => `${value}K`}
              ticks={[0, 2000, 4000, 6000, 8000]}
            />
            <Tooltip content={<CustomTooltip />} />

            <Line
              type="monotone"
              dataKey="pv"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
              strokeWidth={5}
            />
            <Line
              type="monotone"
              dataKey="uv"
              stroke="#82ca9d"
              strokeWidth={5}
            />

            <Line
              type="monotone"
              dataKey="amt"
              stroke="#ff7300"
              strokeWidth={5}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default FromPitch;
