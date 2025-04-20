import Link from "next/link";
import { BiChevronRight } from "react-icons/bi";

const TeamInvestor = () => {
  return (
    <div className="py-[40px] md:py-[50px] lg:py-[95px] xl:py-[110px] bg-secondary">
      <div className="container">
        <div className="lg:pr-5">
          <p className="text-white text-[22px] font-normal">
            Short Term Investor
          </p>
          <h2 className="xl:text-[35px] lg:text-[30px] text-[24px] font-bold text-white mt-5 mb-[30px]">
            Unleashing Opportunities and Maximizing Profits through Astute
            Short-Term Investments in Todays Dynamic Business Landscape
          </h2>
          <ul>
            <li className="flex items-center gap-[10px] ">
              <span className="min-w-10 min-h-10 bg-primary rounded-full flex items-center justify-center">
                <BiChevronRight className="text-main" size={20} />
              </span>
              <p className="text-[#ededed] text-[14px] font-normal">
                <span className="text-lg font-medium mr-[6px]">
                  Rapid Growth Amplified -
                </span>
                Leverage short-term investments to propel your business forward
                at an accelerated pace.
              </p>
            </li>

            <li className="flex items-center gap-[8px] my-[18px]">
              <span className="min-w-10 min-h-10 bg-primary rounded-full flex items-center justify-center">
                <BiChevronRight className="text-main" size={20} />
              </span>
              <p className="text-[#ededed] text-[14px] font-normal">
                <span className="text-lg font-medium mr-[6px]">
                  Market Trend Mastery -
                </span>
                Capitalize on fleeting opportunities by strategically navigating
                evolving market dynamics
              </p>
            </li>

            <li className="flex items-center gap-[8px]">
              <span className="min-w-10 min-h-10 bg-primary rounded-full flex items-center justify-center">
                <BiChevronRight className="text-main" size={20} />
              </span>
              <p className="text-[#ededed] text-[14px] font-normal">
                <span className="text-lg font-medium mr-[6px]">
                  Financial Prosperity Secured -
                </span>
                Unlock the potential for substantial returns through informed
                and agile investment strategies
              </p>
            </li>
          </ul>

          <div className="mt-10">
            <Link href="/find-partner">
              <button className="outline-none py-2 px-[25px] rounded-[8px] text-lg font-bold text-main bg-primary border border-primary duration-300 hover:bg-transparent hover:text-primary hover:border-primary">
                Find Startup
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamInvestor;
