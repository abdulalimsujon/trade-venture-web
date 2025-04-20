import Image from "next/image";
import React from "react";
import { BsHandbag } from "react-icons/bs";
import { FaCircleExclamation } from "react-icons/fa6";
import { GoArrowUp } from "react-icons/go";

const OverviewCard = ({ bg_color }) => {
  return (
    <div
      className={`  p-5 rounded-lg flex items-center justify-between ${bg_color}`}
    >
      <div className="flex flex-col gap-1">
        <div className="size-12 rounded-full bg-black grid place-items-center mb-3">
          <BsHandbag size={20} className="text-white" />
        </div>
        <p className="flex items-center gap-2">
          Total Investment <FaCircleExclamation size={20} />
        </p>
        <h2 className="font-bold text-5xl">$ 512</h2>
        <div>
          <p className="inline-flex font-semibold text-sm items-center gap-1 bg-white rounded-lg px-2 py-1">
            <span className="flex items-center text-green-500">
              <GoArrowUp size={20} /> 38.7%
            </span>
            this Week
          </p>
        </div>
      </div>

      <Image
        src="/dashboard/chart-wave-1.svg"
        width={200}
        height={200}
        alt=""
        className="size-16"
      />
    </div>
  );
};

export default OverviewCard;
