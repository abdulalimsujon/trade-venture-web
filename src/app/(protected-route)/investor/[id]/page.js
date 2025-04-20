import Brands from "@/components/findPartner/Brands";
import InvestorInfo from "@/components/investors/InvestorInfo";
import ProfileBanner from "@/components/startupProfilePage/ProfileBanner";
import Link from "next/link";
import React from "react";

const InvestorDetailsPage = () => {
  return (
    <div>
      <ProfileBanner />
      <InvestorInfo />
      <div className="container lg:my-7 md:my-5 my-3">
        <Link href={"/book-meeting"}>
          <button className="common-button bg-primary text-white hover:bg-secondary">
            Request for a meeting
          </button>
        </Link>
      </div>

      <h2 className="container mb-5 md:mb-10 lg:mt-20 md:mt-10 mt-5 text-lg md:text-[20px] lg:text-[26px] font-bold text-main">
        Last Invested on company
      </h2>
      <Brands />
    </div>
  );
};

export default InvestorDetailsPage;
