import { RiPriceTag3Line } from "react-icons/ri";

import { MdVerified } from "react-icons/md";
import Image from "next/image";
import React from "react";

const CoFounderProfileGrid = () => {
  return (
    <div className="lg:p-6 md:p-4 p-3 border border-[#f0f0f0] bg-[#f0f0f0] ">
      {/* profile image */}
      <div className="flex flex-col items-center">
        <Image
          src={"/1.jpg"}
          alt="profile image"
          width={200}
          height={200}
          className="rounded-md"
        />
        <div className="flex items-center gap-x-1 mt-4">
          <h2 className="text-[30px] font-bold text-main mt-2">
            Tom Blaisdell
          </h2>
          <MdVerified size={18} className="text-primary" />
        </div>
        <span className="text-text text-sm font-normal">
          Digital Marketing Specialist
        </span>
      </div>

      {/* button */}
      <div className="mt-5 md:mt-6 lg:mt-10">
        <div className="lg:flex gap-3 mb-2">
          <button className="outline-none py-2 px-[15px] md:px-[20px] w-full rounded-[8px] lg:text-sm text-base font-normal hover:bg-secondary  border duration-300 bg-primary text-white">
            Follow Up
          </button>
          <button className="mt-2 lg:mt-0 outline-none py-2 px-[15px] md:px-[20px] w-full rounded-[8px] lg:text-sm text-base font-normal hover:bg-secondary  border duration-300 bg-primary text-white">
            Message
          </button>
        </div>
        <button className="outline-none py-2 px-[15px] md:px-[20px] w-full  rounded-[8px] lg:text-sm text-base font-semibold hover:bg-secondary  border duration-300 bg-[#EAECF0] border-[#f7f7f7] text-main hover:text-white">
          Book Meeting
        </button>
      </div>
      {/* skills */}

      <div className="mt-5 md:mt-6 lg:mt-10">
        <h2 className="text-xl font-bold text-main">Skills</h2>

        <div className="flex flex-wrap mt-3 gap-3">
          <div className="text-main px-2 py-1 flex items-center gap-2 border border-[#f9f9f9] bg-[#fff] rounded-md ">
            <RiPriceTag3Line />
            <p className="tex-main font-normal text-sm ">User Research</p>
          </div>
          <div className="text-main px-2 py-1 flex items-center gap-2 border border-[#f9f9f9] bg-[#fff] rounded-md ">
            <RiPriceTag3Line />
            <p className="tex-main font-normal text-sm ">Wireframing</p>
          </div>
          <div className="text-main px-2 py-1 flex items-center gap-2 border border-[#f9f9f9] bg-[#fff] rounded-md ">
            <RiPriceTag3Line />
            <p className="tex-main font-normal text-sm ">Interface Design</p>
          </div>
          <div className="text-main px-2 py-1 flex items-center gap-2 border border-[#f9f9f9] bg-[#fff] rounded-md ">
            <RiPriceTag3Line />
            <p className="tex-main font-normal text-sm ">Prototyping</p>
          </div>
          <div className="text-main px-2 py-1 flex items-center gap-2 border border-[#f9f9f9] bg-[#fff] rounded-md ">
            <RiPriceTag3Line />
            <p className="tex-main font-normal text-sm ">
              Information Architecture
            </p>
          </div>
          <div className="text-main px-2 py-1 flex items-center gap-2 border border-[#f9f9f9] bg-[#fff] rounded-md ">
            <RiPriceTag3Line />
            <p className="tex-main font-normal text-sm ">UX Designer</p>
          </div>
        </div>
      </div>

      {/* Expertise Level */}
      <div className="mt-5 md:mt-6 lg:mt-10">
        <h2 className="text-xl font-bold text-main">Expertise Level</h2>
        <div className="border border-[#f9f9f9]  w-full py-[10px] px-3 bg-white mt-3 font-semibold text-main rounded-md">
          Beginner, Intermediate, Expert
        </div>
      </div>

      {/* education */}
      <div className="mt-5 md:mt-6 lg:mt-10">
        <h2 className="text-xl font-bold text-main">Education</h2>

        <div className="lg:mt-4 ">
          <div className="pl-3 border-l border-gray-300 mb-4">
            <h2 className="text-base font-semibold text-main ">
              Computer Science & Engineering
            </h2>
            <p className="text-base font-normal text-text">
              2012- 2016 <br />
              University of Bangladesh
            </p>
          </div>
          <div className="pl-3 border-l border-gray-300 ">
            <h2 className="text-base font-semibold text-main ">
              Computer Science & Engineering
            </h2>
            <p className="text-base font-normal text-text">
              2012- 2016 <br />
              University of Bangladesh
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoFounderProfileGrid;
