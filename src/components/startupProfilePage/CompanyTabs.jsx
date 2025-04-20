"use client";
import { useState } from "react";
import PitchTabContent from "./tabPage/PitchTabContent";
import AboutTabContent from "./tabPage/AboutTabContent";
import TeamTabContent from "./tabPage/TeamTabContent";
import TermTabContent from "./tabPage/TermTabContent";
import DiscussionTabContent from "./tabPage/DiscussionTabContent";
import ReviewsTabContent from "./tabPage/ReviewsTabContent";
// import About from "./TouristPlacesDetails/About";
// import History from "./TouristPlacesDetails/History";
// import TrailGuide from "./TouristPlacesDetails/TrailGuide";
// import Warning from "./TouristPlacesDetails/Warning";
// import Wildlife from "./TouristPlacesDetails/Wildlife";

const CompanyTabs = () => {
  const tabs = [
    { id: "pitch", label: "pitch" },
    { id: "about", label: "About" },
    { id: "team", label: "Team" },
    { id: "terms", label: "Terms" },
    { id: "discussion", label: "Discussion" },
    { id: "reviews", label: "Reviews" },
  ];

  const [activeTab, setActiveTab] = useState("pitch");
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  return (
    <div>
      <div className="flex justify-between py-3">
        <ul className={`flex gap-3 items-center flex-wrap`}>
          {tabs.map((tab) => (
            <li
              key={tab.id}
              onClick={() => handleTabClick(tab.id)}
              className={
                activeTab === tab.id
                  ? " text-primary pr-4 py-2 text-base  cursor-pointer font-medium whitespace-nowrap capitalize "
                  : "pr-4 py-2 text-[#101828] text-base cursor-pointer font-medium whitespace-nowrap capitalize"
              }
            >
              {tab.label}
            </li>
          ))}
        </ul>
      </div>

      {/* tab content start*/}
      <div className="mb-10">
        {activeTab === "pitch" && <PitchTabContent />}
        {activeTab === "about" && <AboutTabContent />}
        {activeTab === "team" && <TeamTabContent />}
        {activeTab === "terms" && <TermTabContent />}
        {activeTab === "discussion" && <DiscussionTabContent />}
        {activeTab === "reviews" && <ReviewsTabContent />}
      </div>
    </div>
  );
};

export default CompanyTabs;
