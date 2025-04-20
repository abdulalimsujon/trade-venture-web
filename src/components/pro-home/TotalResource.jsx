"use client";
import React from "react";
import CountUp from "react-countup";

const TotalResource = () => {
  return (
    <div className="section-padding container">
      <h2 className="text-main section-title">Our Total Resources</h2>
      <p className="md:text-[24px] text-[18px] text-text font-medium">
        JOIN OVER 500,000 RESOURCE
      </p>

      {/* total information */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:mt-10 md:mt-7 mt-5">
        {/* median investment */}
        <div className="flex justify-center flex-col text-center">
          <h2 className="lg:text-[76px] md:text-[48px] text-[32px] font-semibold text-black">
            $
            <CountUp
              start={0}
              end={250}
              delay={0}
              enableScrollSpy={true}
            ></CountUp>
          </h2>
          <p className="md:text-[24px] text-[18px] text-main font-medium">
            Median Investment
          </p>
        </div>

        {/* founders founded */}
        <div className="flex justify-center flex-col text-center">
          <h2 className="lg:text-[76px] md:text-[48px] text-[32px] font-semibold text-black">
            <CountUp
              start={0}
              end={3164}
              delay={0}
              enableScrollSpy={true}
            ></CountUp>
          </h2>
          <p className="md:text-[24px] text-[18px] text-main font-medium">
            founders founded
          </p>
        </div>

        {/* raised on Wefunder */}
        <div className="flex justify-center flex-col text-center">
          <h2 className="lg:text-[76px] md:text-[48px] text-[32px] font-semibold text-black">
            $
            <CountUp
              start={0}
              end={675}
              delay={0}
              enableScrollSpy={true}
            ></CountUp>
            M
          </h2>
          <p className="md:text-[24px] text-[18px] text-main font-medium">
            raised on Wefunder
          </p>
        </div>

        {/* co-founders */}
        <div className="flex justify-center flex-col text-center">
          <h2 className="lg:text-[76px] md:text-[48px] text-[32px] font-semibold text-black">
            <CountUp
              start={0}
              end={2000}
              delay={0}
              enableScrollSpy={true}
            ></CountUp>
            +
          </h2>
          <p className="md:text-[24px] text-[18px] text-main font-medium">
            Co-Founders
          </p>
        </div>

        {/* business mentor */}
        <div className="flex justify-center flex-col text-center">
          <h2 className="lg:text-[76px] md:text-[48px] text-[32px] font-semibold text-black">
            <CountUp
              start={0}
              end={1000}
              delay={0}
              enableScrollSpy={true}
            ></CountUp>
            +
          </h2>
          <p className="md:text-[24px] text-[18px] text-main font-medium">
            Business Mentors
          </p>
        </div>

        {/* financial hub */}
        <div className="flex justify-center flex-col text-center">
          <h2 className="lg:text-[76px] md:text-[48px] text-[32px] font-semibold text-black">
            <CountUp
              start={0}
              end={100}
              delay={0}
              enableScrollSpy={true}
            ></CountUp>
            +
          </h2>
          <p className="md:text-[24px] text-[18px] text-main font-medium">
            Financial Hub
          </p>
        </div>
      </div>
    </div>
  );
};

export default TotalResource;
