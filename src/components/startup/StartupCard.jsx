import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const StartupCard = ({ item }) => {
  const {
    id,
    image,
    title,
    tagline,
    description,
    facilities,
    investorAmount,
    totalInvestors,
    companyValuations,
    profile,
  } = item;
  return (
    <Link href={`/startup/${id}`}>
      <div className="w-full max-w-[400px]overflow-hidden bg-white rounded-xl  ">
        <div className="relative">
          <img
            className="object-cover w-full h-56 rounded-tl-xl rounded-tr-xl   "
            src={image}
            alt="avatar"
          />
          <div className="absolute right-4 bottom-[-20px] ">
            <Image
              src={profile}
              width={60}
              height={60}
              className="rounded-full shadow-md"
              alt="profile image"
            />
          </div>
        </div>

        <div className="py-5 px-4 bg-[#fafafa]">
          <h2 className="text-xl font-semibold text-main">{title}</h2>
          <p className="text-black text-base font-medium my-3">{tagline}</p>
          <p className="text-sm text-text font-normal mb-4">{description}</p>

          {facilities.map((element, index) => (
            <span
              key={index}
              className="text-[12px] bg-green-200 rounded-md py-1 mr-2 px-1 font-normal"
            >
              {element}
            </span>
          ))}
          <div className="border-t border-border mt-6"></div>
          <div className="flex items-center justify-between">
            <div className="flex flex-col gap-2 mt-4">
              <p className="text-[12px] font-normal text-main">
                <b>${investorAmount}</b> from {totalInvestors} investors
              </p>
              <p className="text-[12px]  font-normal text-main">
                <b>${companyValuations}</b> pre-money valuation
              </p>
            </div>
            <Link href={`/startup/${id}`}>
              <FaArrowRightLong size={26} color="#1c1c1c" />
            </Link>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default StartupCard;
