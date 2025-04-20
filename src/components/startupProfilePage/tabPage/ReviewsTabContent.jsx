import TabTitle from "@/components/shared/tabTitle/TabTitle";
import { reviewContentData } from "@/fakeData/startupPageData";
import Image from "next/image";
import React from "react";

const ReviewsTabContent = () => {
  return (
    <div className="mt-5">
      <TabTitle>Hear from some of the 214 investors in Plei</TabTitle>

      <div className="mt-10">
        {reviewContentData.map((item, index) => (
          <div key={index} className="py-6 px-4 border-b border-border">
            <div>
              <div className="flex items-center gap-5">
                <div className="relative w-[60px] h-[60px] ">
                  <Image
                    src={item?.profile}
                    alt="profile image"
                    fill
                    className="rounded-md"
                  />
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <h2 className="text-secondary md:text-[20px] text-[18px] font-bold ">
                      {item?.name}
                    </h2>

                    <p className="text-base text-secondary font-bold">
                      {item?.price}
                    </p>
                  </div>
                  <div className="flex items-center gap-3 mt-1">
                    <span className="px-2 py-1 text-primary rounded-xl bg-green-200 text-[12px] font-medium capitalize">
                      {item.status}
                    </span>
                    <span className="text-sm text-text font-normal">
                      {item?.lastInvest}
                    </span>
                  </div>
                </div>
              </div>
              <p className="text-text font-normal text-base mt-4">
                {item?.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewsTabContent;
