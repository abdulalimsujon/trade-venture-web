import FadeUp from "@/components/motion/FadeUp";
import Comments from "@/components/user-dashboard/dashboard/Comments";
import FindCoFounder from "@/components/user-dashboard/dashboard/FindCoFounder";
import FromPitch from "@/components/user-dashboard/dashboard/FromPitch";
import OverviewSection from "@/components/user-dashboard/dashboard/OverviewSection";
import PitchUpdates from "@/components/user-dashboard/dashboard/PitchUpdates";
import TotalInvestmentFound from "@/components/user-dashboard/dashboard/TotalInvestmentFound";

import React from "react";

const DashboardPage = ({ children }) => {
  return (
    <div className="p-5 space-y-5">
      <h1 className="text-4xl font-semibold">Dashboard</h1>
      <OverviewSection />
      <div className="grid grid-cols-12 gap-5">
        <section className="col-span-12 xl:col-span-8 space-y-5">
          <FadeUp delay={0.8}>
            <TotalInvestmentFound />
          </FadeUp>
          {/* <FadeUp delay={0.12}>
            <FromPitch />
          </FadeUp> */}
          <FadeUp delay={0.14}>
            <PitchUpdates />
          </FadeUp>
        </section>
        <section className="col-span-12 xl:col-span-4 space-y-5">
          <FadeUp delay={0.12}>
            <Comments />
          </FadeUp>
          <FadeUp delay={0.14}>
            <FindCoFounder />
          </FadeUp>
        </section>
      </div>

      <>{children}</>
    </div>
  );
};

export default DashboardPage;
