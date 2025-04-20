import Link from "next/link";
import { menuItems } from "./Navbar";

const MobileNavbar = ({ setNavbarShow }) => {
  return (
    <div className="min-w-full w-full bg-[#f2f2f2] z-50 h-full px-5 py-10 shadow-md relative">
      <ul className="flex flex-col gap-5">
        {menuItems.map((menu) => (
          <li key={menu.id}>
            <Link
              href={menu.link}
              className="text-lg font-medium text-main duration-300"
              onClick={() => setNavbarShow(false)}
            >
              {menu.text}
            </Link>
          </li>
        ))}
        <div className="flex gap-5 flex-col z-50">
          <Link href="/sign-in">
            <button
              onClick={() => setNavbarShow(false)}
              className="outline-none py-2 px-[25px] rounded-[8px] text-lg font-normal text-text bg-transparent border border-[#e4e4e4] duration-300 hover:bg-main hover:text-white hover:border-main w-max"
            >
              Sign In
            </button>
          </Link>
          <Link href="/sign-up">
            <button
              onClick={() => setNavbarShow(false)}
              className="outline-none py-2 px-[25px] rounded-[8px] text-lg font-normal text-white bg-main border border-main duration-300 hover:bg-transparent hover:text-text hover:border-[#e4e4e4] w-max"
            >
              Sign Up
            </button>
          </Link>
        </div>
      </ul>
    </div>
  );
};

export default MobileNavbar;
