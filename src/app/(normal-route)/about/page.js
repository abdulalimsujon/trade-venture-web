import SectionTitle from "@/components/shared/sectionTitle/SectionTitle";
import styles from "./AboutPage.module.css";

import WhyChoose from "@/components/about/WhyChoose/WhyChoose";
import JoinForFutureTeam from "@/components/about/JoinForFutureTeam/JoinForFutureTeam";
import TradeVentureTagLine from "@/components/about/TradeventureTagLine/TradeVentureTagLine";
import AboutTradeVenture from "@/components/about/aboutTradeVenture/AboutTradeVenture";
import OurMission from "@/components/about/ourMission/OurMission";

const AboutPage = () => {
  return (
    <div className={styles.aboutPage}>
      <SectionTitle title={"About Trade Ventures"} />
      {/* <AboutTradeVenture /> */}
      <AboutTradeVenture />
      <OurMission />
      <WhyChoose />
      <JoinForFutureTeam />
      <TradeVentureTagLine />
    </div>
  );
};

export default AboutPage;
