import Brands from "@/components/findPartner/Brands";
import HeroBanner from "@/components/pro-home/HeroBanner";
import ProGlobalNetwork from "@/components/pro-home/ProGlobalNetwork";
import RepublicGlobalEcosystem from "@/components/pro-home/RepublicGlobalEcosystem";
import TotalResource from "@/components/pro-home/TotalResource";
import WayToInvest from "@/components/pro-home/WayToInvest";
import React from "react";

const ProtectHomePage = () => {
  return (
    <>
      <HeroBanner />
      <Brands title={"Top fund raise startup"} />
      <WayToInvest />
      <ProGlobalNetwork />
      <RepublicGlobalEcosystem />
      <TotalResource />
    </>
  );
};

export default ProtectHomePage;
