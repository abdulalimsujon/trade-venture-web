import About from "@/components/home/About";
import Banner from "@/components/home/Banner";
import CoFounder from "@/components/home/CoFounder";
import Faq from "@/components/home/AskedQuestion";
import GlobalNetwork from "@/components/home/GlobalNetwork";
import TeamInvestor from "@/components/home/TeamInvestor";
import VoiceOfSuccess from "@/components/home/VoiceOfSuccess";
import WhyChooseUs from "@/components/home/WhyChooseUs";

export default function Home() {
  return (
    <main>
      <Banner />
      <About />
      <WhyChooseUs />
      <TeamInvestor />
      <GlobalNetwork />
      <CoFounder />
      <VoiceOfSuccess />
      <Faq />
    </main>
  );
}
