import React from "react";

const DealTerms = () => {
  const terms = [
    {
      text: "Valuation cap",
      title: "$20,000,000",
    },
    {
      text: "Minimum investment",
      title: "$150",
    },
    {
      text: "Maximum investment",
      title: "$308,750",
    },
    {
      text: "Funding goal",
      title: "$1.24M",
    },

    {
      text: "Deadline",
      title: "December 12, 2023",
    },
    {
      text: "Type of security",
      title: "Crowd SAFE",
    },
    {
      text: "Nominee Lead",
      title:
        "Chief Executive Officer of the Company (currently Sebastian Duque)",
    },
  ];
  return (
    <div>
      <h2 className="md:text-[32px] text-[22px] font-bold  text-main capitalize ">
        Deal terms
      </h2>
      <div className="mt-8">
        {terms.map((term, index) => (
          <div key={index} className="pb-4 pt-3 border-b border-border">
            <p className="text-primary capitalize text-base font-semibold">
              {term.text}
            </p>
            <h2 className="text-main font-semibold md:text-[28px] text-[22px] mt-3">
              {term.title}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DealTerms;
