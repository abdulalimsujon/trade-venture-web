import TabTitle from "@/components/shared/tabTitle/TabTitle";
import { startupTeamTabData } from "@/fakeData/startupPageData";
import { FaFacebookSquare, FaInstagram } from "react-icons/fa";
import { FaXTwitter, FaLinkedin } from "react-icons/fa6";

import Image from "next/image";
import React from "react";

const TeamTabContent = () => {
  return (
    <div className="mt-5">
      <TabTitle>Teams</TabTitle>
      {/* team card start here */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-10">
        {startupTeamTabData?.map((item) => (
          <div
            key={item?.id}
            className="border border-border rounded-lg py-5 px-5"
          >
            <div className="flex items-center gap-5">
              <div className="relative w-[70px] h-[70px] rounded-full">
                <Image
                  src={item?.image}
                  alt="profile image"
                  fill
                  className="rounded-full"
                />
              </div>

              <div>
                <h2 className="text-secondary md:text-[20px] text-[18px] font-semibold ">
                  {item?.name}
                </h2>
                <p className="text-text font-normal  text-base">
                  {item?.desecration}
                </p>
              </div>
            </div>
            <p className="text-text text-sm font-normal mt-5">{item.text}</p>
            <div className="mt-6 flex items-center gap-2 ">
              <FaFacebookSquare
                size={18}
                className="text-secondary cursor-pointer hover:text-primary transition-color duration-300"
              />
              <FaInstagram
                size={18}
                className="text-secondary cursor-pointer hover:text-primary transition-color duration-300"
              />
              <FaXTwitter
                size={18}
                className="text-secondary cursor-pointer hover:text-primary transition-color duration-300"
              />
              <FaLinkedin
                size={18}
                className="text-secondary cursor-pointer hover:text-primary transition-color duration-300"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamTabContent;
