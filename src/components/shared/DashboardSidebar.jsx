import Link from "next/link";
import logo from "../../assets/home/footer-logo.png";
import Image from "next/image";
import { MdDashboard, MdOutlineDarkMode } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { PiTelevisionLight } from "react-icons/pi";
import { FaRegBookmark } from "react-icons/fa6";
import { BsBank } from "react-icons/bs";
import { AiOutlineMessage } from "react-icons/ai";
import { SlCalender } from "react-icons/sl";
import { GiTorch } from "react-icons/gi";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { IoSettingsOutline, IoSunny } from "react-icons/io5";
import { IoMdHelpCircleOutline } from "react-icons/io";

const DashboardSidebar = () => {
  const dashboardMenuItem = [
    {
      id: 1,
      text: "Dashboard",
      link: "/users/dashboard",
      icon: <MdDashboard />,
    },
    {
      id: 2,
      text: "Profile",
      link: "/users/profile",
      icon: <FaUser />,
    },
    {
      id: 3,
      text: "Pitch",
      link: "/users/pitch",
      icon: <PiTelevisionLight />,
    },
    {
      id: 4,
      text: "Bookmark",
      link: "/users/bookmark",
      icon: <FaRegBookmark />,
    },
    {
      id: 5,
      text: "Banking",
      link: "/users/banking",
      icon: <BsBank />,
    },
    {
      id: 6,
      text: "Message",
      link: "/message",
      icon: <AiOutlineMessage />,
    },
    {
      id: 7,
      text: "Calender",
      link: "/users/calender",
      icon: <SlCalender />,
    },
    {
      id: 8,
      text: "Calender",
      link: "/users/calender",
      icon: <GiTorch />,
    },
    {
      id: 10,
      text: "Reports",
      link: "/users/reports",
      icon: <IoMdInformationCircleOutline />,
    },
    {
      id: 11,
      text: "Setting",
      link: "/users/setting",
      icon: <IoSettingsOutline />,
    },
  ];

  return (
    <div className="overflow-y-scroll hidden lg:block max-w-[340px] bg-secondary h-screen fixed w-full py-10 px-6 custom-scrollbar">
      <div className="flex justify-center">
        <Link href="/users/dashboard">
          <Image src={logo} alt="Logo" width={121} />
        </Link>
      </div>

      <ul className="mt-[60px] mb-[100px]">
        {dashboardMenuItem.map((item) => (
          <li
            key={item.id}
            className="px-3 rounded-md py-3 bg-transparent hover:bg-white text-white hover:text-secondary  duration-300"
          >
            <Link
              href={item.link}
              className="flex items-center gap-4 text-base font-medium  "
            >
              {item.icon} {item.text}
            </Link>
          </li>
        ))}
      </ul>

      <div className="w-full border-t border-[#0b3f1b] pt-4">
        <p className="flex items-center gap-4 text-[#6F767E] font-medium">
          <IoMdHelpCircleOutline /> Help & getting started
        </p>
        <div className="w-full rounded-3xl py-3 px-8 bg-white flex items-center justify-between mt-6">
          <div className="flex items-center gap-1 cursor-pointer">
            <IoSunny className="text-main" size={26} />
            <p className="text-main font-semibold">Light</p>
          </div>
          <div className="flex items-center gap-1 cursor-pointer">
            <MdOutlineDarkMode className="text-[#6F767E]" size={26} />
            <p className="text-[#132841] font-semibold">Light</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardSidebar;
