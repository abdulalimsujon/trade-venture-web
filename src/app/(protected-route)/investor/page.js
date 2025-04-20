import InvestorCard from "@/components/investors/InvestorCard";
import ComingSoon from "@/components/shared/ComingSoon";
import PageBanner from "@/components/startup/StartupBanner";
import { investorsCardData } from "@/fakeData/investorPageData";
import React from "react";

const InvestorPage = () => {
  return (
    <div>
      <PageBanner title={"Choose your investor"} />
      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-20">
        {investorsCardData?.map((item) => (
          <InvestorCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default InvestorPage;
