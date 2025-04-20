"use client";
import Image from "next/image";
import logo from "../../assets/home/logo.png";
import Link from "next/link";
import { HiMiniBars3 } from "react-icons/hi2";
import { IoMdClose } from "react-icons/io";
import MobileNavbar from "./MobileNavbar";
import { useState } from "react";
import { usePathname } from "next/navigation";

export const menuItems = [
  {
    id: 1,
    text: "Home",
    link: "/",
  },
  {
    id: 2,
    text: "Find Partner",
    link: "/find-partner",
  },
  {
    id: 3,
    text: "Blog",
    link: "/blog",
  },
  {
    id: 4,
    text: "About Us",
    link: "/about",
  },
  {
    id: 5,
    text: "Contact Us",
    link: "/contact",
  },
];

const Navbar = () => {
  const [navbarShow, setNavbarShow] = useState(false);
  const pathName = usePathname();

  return (
    <div className="bg-white py-[16px] lg:py-[24px] border-b border-[#eaeaea]">
      <div className="container relative">
        <div className="flex items-center justify-between ">
          <div>
            <Link href="/">
              <Image src={logo} alt="Logo" width={121} />
            </Link>
          </div>

          <nav className="hidden lg:block">
            <ul className="flex items-center gap-[30px]">
              {menuItems.map((menu) => (
                <li key={menu.id}>
                  <Link
                    href={menu.link}
                    className={
                      pathName === menu.link
                        ? "text-lg font-medium text-[#17c550] duration-300"
                        : "text-lg font-medium text-main duration-300"
                    }
                  >
                    {menu.text}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="hidden lg:block">
            <div className="flex gap-4">
              <Link href="/sign-in">
                <button className="outline-none py-2 px-[25px] rounded-[8px] text-lg font-normal text-text bg-transparent border border-[#e4e4e4] duration-300 hover:bg-main hover:text-white hover:border-main">
                  Sign In
                </button>
              </Link>
              <Link href={"/sign-up"}>
                <button className="outline-none py-2 px-[25px] rounded-[8px] text-lg font-normal text-white bg-main border border-main duration-300 hover:bg-transparent hover:text-text hover:border-[#e4e4e4]">
                  Sign Up
                </button>
              </Link>
            </div>
          </div>
          {/* responsive design bar here */}
          <div
            className="block lg:hidden cursor-pointer duration-300"
            onClick={() => setNavbarShow(!navbarShow)}
          >
            {!navbarShow ? (
              <HiMiniBars3 size={30} className="cursor-pointer" />
            ) : (
              <IoMdClose size={30} className="cursor-pointer" />
            )}
          </div>
        </div>

        <div
          className={
            navbarShow
              ? "absolute top-full right-0 w-full mt-4 duration-300"
              : "absolute top-[-1000px] right-0 w-full mt-4 duration-300"
          }
        >
          <MobileNavbar setNavbarShow={setNavbarShow} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
