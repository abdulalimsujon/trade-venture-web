import Link from "next/link";
import { BiChevronRight } from "react-icons/bi";

const CoFounder = () => {
  return (
    <div className="py-[40px] md:py-[50px] lg:py-[95px] xl:py-[110px] bg-[#F6F6F6]">
      <div className="container">
        <div className="lg:pr-5">
          <p className="text-text text-[22px] font-normal">
            For Mentor and Co-founder
          </p>
          <h2 className="xl:text-[35px] lg:text-[30px] text-[24px] font-bold text-main mt-5 mb-[30px]">
            Navigating the Entrepreneurial Landscape to Discover the Ideal
            Cofounder and Propel Your Business Success
          </h2>
          <ul>
            <li className="flex items-center gap-[8px]">
              <span className="min-w-10 min-h-10 bg-primary rounded-full flex items-center justify-center">
                <BiChevronRight className="text-white" size={20} />
              </span>
              <p className="text-main text-[14px] font-normal">
                <span className="text-lg font-medium mr-[6px]">
                  Visionary Alignment:
                </span>
                Unearth a cofounder who shares your entrepreneurial vision and
                drives cohesive business growth.
              </p>
            </li>

            <li className="flex items-center gap-[8px] my-[18px]">
              <span className="min-w-10 min-h-10 bg-primary rounded-full flex items-center justify-center">
                <BiChevronRight className="text-white" size={20} />
              </span>
              <p className="text-main text-[14px] font-normal">
                <span className="text-lg font-medium mr-[6px]">
                  Expertise Fusion:
                </span>
                Combine your unique skill sets to form a powerhouse team,
                covering all facets of business development.
              </p>
            </li>

            <li className="flex items-center gap-[8px]">
              <span className="min-w-10 min-h-10 bg-primary rounded-full flex items-center justify-center">
                <BiChevronRight className="text-white" size={20} />
              </span>
              <p className="text-main text-[14px] font-normal">
                <span className="text-lg font-medium mr-[6px]">
                  Accelerated Success:
                </span>
                With the right cofounder by your side, expedite your journey
                from ideation to market impact, backed by collective expertise.
              </p>
            </li>
          </ul>

          <div className="mt-10">
            <Link href="/find-partner">
              <button className="outline-none py-2 px-[25px] rounded-[8px] text-lg font-bold text-main bg-primary border border-primary duration-300 hover:bg-transparent hover:text-primary hover:border-primary">
                Find Co-Founder
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoFounder;
