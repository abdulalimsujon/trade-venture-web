import Image from "next/image";
import React from "react";
import { IoIosShareAlt } from "react-icons/io";
import companyLogo from "../../assets/company-logo.png";

const StartupCompnayInfo = () => {
  return (
    <div className="container">
      <div className="flex items-center justify-between mt-7">
        <div>
          <Image src={companyLogo} alt="compnay logo" width={60} height={40} />
          <h2 className="lg:text-2xl text-[18px] font-bold text-main mt-4">
            Infosys Technology
          </h2>
        </div>
        <div className="bg-primary px-3 py-1 flex items-center gap-2 rounded-md cursor-pointer">
          <span className="text-base font-normal text-white">Share</span>
          <IoIosShareAlt size={18} className="text-white" />
        </div>
      </div>
      <p className="text-xl font-medium text-main mt-5 lg:w-1/2">
        Making the power of Computer Vision accessible to everyone
      </p>
      <div className="mt-4 mb-6">
        <span className="px-3 py-1 text-sm rounded-md bg-green-100 text-main font-normal mx-1">
          Ai Vision
        </span>
        <span className="px-3 py-1 text-sm rounded-md bg-green-100 text-main font-normal mx-1">
          Software
        </span>
        <span className="px-3 py-1 text-sm rounded-md bg-green-100 text-main font-normal mx-1">
          B2B
        </span>
      </div>
    </div>
  );
};

export default StartupCompnayInfo;
