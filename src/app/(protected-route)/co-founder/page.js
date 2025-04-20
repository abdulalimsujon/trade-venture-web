import CoFounderCard from "@/components/co-founder/CoFounderCard";
import PageBanner from "@/components/startup/StartupBanner";
import { coFounderCardData } from "@/fakeData/coFounderCardData";
import React from "react";

const CoFounderPage = () => {
  return (
    <div>
      <PageBanner title={"Find your best Co-Founder"} />
      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-20">
        {coFounderCardData?.map((item) => (
          <CoFounderCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default CoFounderPage;
