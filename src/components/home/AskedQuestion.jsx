"use client";
import { useState } from "react";
import AccordionContainer from "./AccordionContainer";

import {
  contactFaqData,
  generalFaqData,
  paymentFaqData,
  refundFaqData,
  servicesFaqData,
} from "@/fakeData/fakeAccordionData";

const AskedQuestion = () => {
  const [activeTab, setActiveTab] = useState(0);
  const tabContents = ["general", "services", "payment", "Refund", "Contact"];

  return (
    <div className="py-[40px] md:py-[50px] lg:py-[95px] xl:py-[110px] bg-[#f6f6f6]">
      <div className="container">
        <div className="flex lg:flex-row flex-col gap-[30px] w-full">
          <div className="lg:w-1/2 w-full">
            <h2 className="text-main xl:text-[50px] lg:text-[42px] text-[28px] font-bold ">
              Frequently Asked Questions
            </h2>

            <ul className="xl:mt-20 lg:mt-16 md:mt-[42px] mt-[40px] flex lg:flex-col flex-row gap-[28px] flex-wrap">
              {tabContents?.map((tab, index) => (
                <li
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={
                    activeTab === index
                      ? "cursor-pointer text-base text-main font-semibold capitalize"
                      : "cursor-pointer text-base text-[#777] font-normal capitalize"
                  }
                >
                  {tab}
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:w-1/2 w-full">
            <div className="">
              <input
                type="text"
                placeholder="Type Your Email Address"
                className="w-full p-[16px] outline-none rounded-md placeholder-[#bbb]"
              />
            </div>

            <>
              <AccordionContainer
                faqData={
                  (activeTab === 0 && generalFaqData) ||
                  (activeTab === 1 && servicesFaqData) ||
                  (activeTab === 2 && paymentFaqData) ||
                  (activeTab === 3 && refundFaqData) ||
                  (activeTab === 4 && contactFaqData)
                }
              />
            </>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AskedQuestion;
