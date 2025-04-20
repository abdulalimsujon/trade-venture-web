import TabTitle from "@/components/shared/tabTitle/TabTitle";
import React from "react";

const TermTabContent = () => {
  const overviewData = [
    {
      text: "PRICE PER SHARE",
      title: "US$1.65",
    },
    {
      text: "VALUATION",
      title: "$58.68M",
    },
    {
      text: "DEADLINE",
      title: "Oct. 14, 2024 at 12:59 PM",
    },
    {
      text: "FUNDING GOAL",
      title: "$39.6 - $20.7M",
    },
  ];
  const brakeDownData = [
    {
      text: "MIN INVESTMENT",
      title: "US$39.60",
    },
    {
      text: "Offering type",
      title: "Equity",
    },
    {
      text: "MAX INVESTMENT",
      title: "US$1,000,000",
    },
    {
      text: "ASSET TYPE",
      title: "Common Stock",
    },
    {
      text: "MIN NUMBER OF SHARES OFFERED",
      title: "24",
    },
    {
      text: "SHARES OFFERED",
      title: "Class A Common Stock",
    },
    {
      text: "MAX NUMBER OF SHARES OFFERED",
      title: "12,545,454",
    },
  ];

  return (
    <div className="mt-5">
      {/* overview part */}
      <TabTitle>Overview</TabTitle>

      <div className="grid grid-cols-2 gap-10 mt-10">
        {overviewData?.map((item, index) => (
          <div key={index}>
            <h6 className="text-[16px] text-main font-medium uppercase">
              {item?.text}
            </h6>
            <h2 className="text-[26px] font-bold text-secondary mt-1">
              {item?.title}
            </h2>
          </div>
        ))}
      </div>

      {/* breakdown part */}
      <div className="lg:mt-[56px] mt-[40px]">
        <TabTitle>Breakdown</TabTitle>

        <div className="grid grid-cols-2 gap-10 mt-10">
          {brakeDownData?.map((item, index) => (
            <div key={index}>
              <h6 className="text-[16px] text-main font-medium uppercase">
                {item?.text}
              </h6>
              <h2 className="text-[26px] font-bold text-secondary mt-1">
                {item?.title}
              </h2>
            </div>
          ))}
        </div>
      </div>

      {/* Risk part */}
      <div className="mt-10">
        <TabTitle>Risks</TabTitle>
        <p className="text-text mt-5 text-base font-normal">
          A crowdfunding investment involves risk. You should not invest any
          funds in this offering unless you can afford to lose your entire
          investment. In making an investment decision, investors must rely on
          their own examination of the issuer and the terms of the offering,
          including the merits and risks involved. These securities have not
          been recommended or approved by any federal or state securities
          commission or regulatory authority. Furthermore, these authorities
          have not passed upon the accuracy or adequacy of this document. The
          U.S. Securities and Exchange Commission does not pass upon the merits
          of any securities offered or the terms of the offering, nor does it
          pass upon the accuracy or completeness of any offering document or
          literature. These securities are offered under an exemption from
          registration; however, the U.S. Securities and Exchange Commission has
          not made an independent determination that these securities are exempt
          from registration.
        </p>
      </div>
    </div>
  );
};

export default TermTabContent;
