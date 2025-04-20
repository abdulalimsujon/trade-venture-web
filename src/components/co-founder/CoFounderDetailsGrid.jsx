import Image from "next/image";
import Link from "next/link";
import {
  RiFacebookLine,
  RiWhatsappLine,
  RiLinkedinLine,
  RiGithubLine,
  RiTwitterXFill,
  RiMapPin2Line,
} from "react-icons/ri";
import MyProject from "./MyProject";
import { FaRegEnvelope } from "react-icons/fa";

import { MdPhone } from "react-icons/md";

const CoFounderDetailsGrid = () => {
  return (
    <div>
      <div className="flex items-center gap-[6px]">
        <h2 className="w-[150px] text-2xl font-bold text-main whitespace-nowrap">
          About Me
        </h2>
        <hr className="w-full h-[1px] bg-[#D0D5DD] " />
      </div>
      <p className="text-base text-[#1D2939] font-normal mt-3">
        I started web programming out of self interest and found out I enjoy
        designing and developing web application. It gives me the enlightenment
        of creating something that I can own. For more than 1 year I have been
        learning web development. I have excelled in frontend development
        technology and then backend as well. I have worked on 12 different
        projects of my own. I like to read books, go on tours and watch sci-fi
        movies.
      </p>

      <div className="flex items-center gap-2 flex-col md:flex-row md:mt-7 mt-5">
        <div className="py-1 px-2 bg-[#E9EFFF] rounded-[6px]">
          <span className="text-[#4478FF] text-sm font-semibold">
            Experience: 0-1 year
          </span>
        </div>
        <div className="py-1 px-2 bg-[#FFFBEE] rounded-[6px]">
          <span className="text-[#FF8C4B] text-sm font-semibold">
            Project done: 10+
          </span>
        </div>
      </div>

      <div className="flex items-center gap-4 icons lg:mt-10 md:mt-7 mt-5">
        <span>
          <RiFacebookLine size={20} />
        </span>
        <span>
          <RiWhatsappLine size={20} />
        </span>
        <span>
          <RiLinkedinLine size={20} />
        </span>
        <span>
          <RiGithubLine size={20} />
        </span>
        <span>
          <RiTwitterXFill size={20} />
        </span>
      </div>

      {/* job experience section */}
      <div className="flex items-center gap-[6px] lg:mt-10 md:mt-7 mt-5">
        <h2 className="w-[250px] text-2xl font-bold text-main whitespace-nowrap">
          Job Experience
        </h2>
        <hr className="w-full h-[1px] bg-[#D0D5DD] " />
      </div>

      <div className="md:mt-6 mt-4 p-4 border border-[#EAECF0] rounded-md">
        <div className="flex gap-3 w-full pb-6 border-b border-[#eaecf0]">
          <div className="w-full ">
            <h2 className="text-base font-semibold text-[#1D2939] ">
              Edtech Platform UI design
            </h2>
            <div className="mt-2">
              <Link
                href="#"
                className="text-sm text-[#22CD5A] pr-3 border-r border-[#eaecf0]"
              >
                https://ostad.app
              </Link>
              <span className="text-[##1D2939] text-[12px] font-medium pl-2">
                Dec, 2019 - Present
              </span>
            </div>

            <p className="text-[#1D2939] text-[14px] font-normal my-3">
              Explore Hot Talents and others from 1200+ Talents that match your
              requirments! Explore Hot Talents and others from 1200+ Talents...
              See more...
            </p>

            <div className="flex items-center gap-2   mt-5">
              <div className="py-1 px-2 bg-[#E9EFFF] rounded-[6px]">
                <span className="text-[#1D2939] text-sm font-medium whitespace-nowrap">
                  UX Design
                </span>
              </div>
              <div className="py-1 px-2 bg-[#FFFBEE] rounded-[6px]">
                <span className="text-[#1D2939] text-sm font-medium whitespace-nowrap">
                  UI Design
                </span>
              </div>
            </div>
          </div>
          <div className=" ">
            <Image src={"/project.png"} alt="" width={140} height={100} />
          </div>
        </div>
        <div className="flex gap-3 w-full pt-6 ">
          <div className="w-full ">
            <h2 className="text-base font-semibold text-[#1D2939] ">
              Edtech Platform UI design
            </h2>
            <div className="mt-2">
              <Link
                href="#"
                className="text-sm text-[#22CD5A] pr-3 border-r border-[#eaecf0]"
              >
                https://ostad.app
              </Link>
              <span className="text-[##1D2939] text-[12px] font-medium pl-2">
                Dec, 2019 - Present
              </span>
            </div>

            <p className="text-[#1D2939] text-[14px] font-normal my-3">
              Explore Hot Talents and others from 1200+ Talents that match your
              requirments! Explore Hot Talents and others from 1200+ Talents...
              See more...
            </p>

            <div className="flex items-center gap-2  mt-5">
              <div className="py-1 px-2 bg-[#E9EFFF] rounded-[6px]">
                <span className="text-[#1D2939] text-sm font-medium whitespace-nowrap">
                  UX Design
                </span>
              </div>
              <div className="py-1 px-2 bg-[#FFFBEE] rounded-[6px]">
                <span className="text-[#1D2939] text-sm font-medium whitespace-nowrap">
                  UI Design
                </span>
              </div>
            </div>
          </div>
          <div className=" ">
            <Image src={"/project.png"} alt="" width={140} height={100} />
          </div>
        </div>
      </div>

      {/* my project section */}
      <>
        <div className="flex items-center gap-[6px] lg:mt-10 md:mt-7 mt-5">
          <h2 className="w-[150px] text-2xl font-bold text-main whitespace-nowrap">
            My Projects
          </h2>
          <hr className="w-full h-[1px] bg-[#D0D5DD] " />
        </div>
        <div className="md:mt-6 mt-4 p-4 border border-[#EAECF0] rounded-md">
          <MyProject />
          <hr className="my-5 border-b border-[#eaecf0]" />
          <MyProject />
        </div>
      </>

      {/* software skill */}
      <>
        <div className="flex items-center gap-[6px] lg:mt-10 md:mt-7 mt-5">
          <h2 className="w-[170px] text-2xl font-bold text-main whitespace-nowrap">
            Software Skill
          </h2>
          <hr className="w-full h-[1px] bg-[#D0D5DD] " />
        </div>

        <div className="md:mt-6 mt-4 flex gap-5 flex-wrap">
          <div className="py-2 px-[35px] border border-[#eaecf0] rounded-md flex items-center justify-center flex-col gap-3">
            <Image src="/figma.png" alt="" width={30} height={40} />
            <h2 className="text-[18px] font-semibold text-main">Figma</h2>
          </div>
          <div className="py-2 px-[35px] border border-[#eaecf0] rounded-md flex items-center justify-center flex-col gap-3">
            <Image src="/flutter.png" alt="" width={30} height={40} />
            <h2 className="text-[18px] font-semibold text-main">Figma</h2>
          </div>
          <div className="py-2 px-[35px] border border-[#eaecf0] rounded-md flex items-center justify-center flex-col gap-3">
            <Image src="/wordpress.png" alt="" width={30} height={40} />
            <h2 className="text-[18px] font-semibold text-main">Figma</h2>
          </div>
          <div className="py-2 px-[35px] border border-[#eaecf0] rounded-md flex items-center justify-center flex-col gap-3">
            <Image src="/figma.png" alt="" width={30} height={40} />
            <h2 className="text-[18px] font-semibold text-main">Figma</h2>
          </div>
          <div className="py-2 px-[35px] border border-[#eaecf0] rounded-md flex items-center justify-center flex-col gap-3">
            <Image src="/flutter.png" alt="" width={30} height={40} />
            <h2 className="text-[18px] font-semibold text-main">Figma</h2>
          </div>
          <div className="py-2 px-[35px] border border-[#eaecf0] rounded-md flex items-center justify-center flex-col gap-3">
            <Image src="/wordpress.png" alt="" width={30} height={40} />
            <h2 className="text-[18px] font-semibold text-main">Figma</h2>
          </div>
        </div>
      </>

      {/* contact info */}
      <>
        <div className="flex items-center gap-[6px] lg:mt-10 md:mt-7 mt-5">
          <h2 className="w-[170px] text-2xl font-bold text-main whitespace-nowrap">
            Contact Us
          </h2>
          <hr className="w-full h-[1px] bg-[#D0D5DD] " />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 mt-6">
          <div>
            <MdPhone size={20} className="text-main" />
            <p className="text-base font-normal text-main mt-2">
              +880 1235 456778
            </p>
          </div>
          <div>
            <FaRegEnvelope size={20} className="text-main" />
            <p className="text-base font-normal text-main mt-2">
              abc@gmail.com
            </p>
          </div>
          <div>
            <RiMapPin2Line size={20} className="text-main" />
            <p className="text-base font-normal text-main mt-2">
              Mohammadpur, Dhaka-1207
            </p>
          </div>
        </div>
      </>
    </div>
  );
};

export default CoFounderDetailsGrid;
