import CompanyTabs from "@/components/startupProfilePage/CompanyTabs";
import DealTerms from "@/components/startupProfilePage/DealTerms";
import MaxGoalRaised from "@/components/startupProfilePage/MaxGoalRaised";
import ProfileBanner from "@/components/startupProfilePage/ProfileBanner";
import ProfileImageGallery from "@/components/startupProfilePage/ProfileImageGallery";
import StartupCompnayInfo from "@/components/startupProfilePage/StartupCompnayInfo";
import React from "react";

const SingleStartupPage = () => {
  return (
    <div>
      <ProfileBanner />
      <StartupCompnayInfo />
      <div className="grid grid-cols-1 lg:grid-cols-9 gap-x-20 container">
        <div className="lg:col-span-6">
          <ProfileImageGallery />
          <h2 className="uppercase text-primary text-36 mt-6  ">
            COMPANY VALUATION $1.32B{" "}
          </h2>
        </div>
        <div className="lg:col-span-3 ">
          <MaxGoalRaised />
        </div>
      </div>
      <div className="container bg-green-200 my-4 w-full h-[1px]" />

      {/* tab part and right part start */}
      <div className="grid grid-cols-1 lg:grid-cols-9 gap-x-20 container">
        <div className="lg:col-span-6">
          <CompanyTabs />
        </div>
        <div className="lg:col-span-3 ">
          <DealTerms />
        </div>
      </div>
    </div>
  );
};

export default SingleStartupPage;
