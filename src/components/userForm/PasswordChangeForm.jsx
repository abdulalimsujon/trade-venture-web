"use client";
import Link from "next/link";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useState } from "react";

const PasswordChangeForm = () => {
  const [passwordShow, setPasswordShow] = useState(false);

  return (
    <div className="flex w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg  lg:max-w-4xl">
      <div className="hidden bg-cover lg:block lg:w-1/2 signup-bg"></div>

      <div className="w-full px-6 py-8 md:py-16 md:px-8 lg:w-1/2">
      <div className="lg:mt-10 mt-5">
          <label htmlFor="name" className="text-lg font-medium text-text ">
            New Password
          </label>
          <div className="relative ">
            <input
              type={passwordShow ? "text" : "password"}
              placeholder="Enter your new password ..."
              className="placeholder-[#bbb] outline-none py-[10px] px-[20px] block w-full border border-[#E4E3E3] rounded-md mt-3 z-0"
            />
            <div
              className="absolute right-3 top-2 cursor-pointer"
              onClick={() => setPasswordShow(!passwordShow)}
            >
              {passwordShow ? (
                <AiOutlineEye className="text-[24px]" color="#bbb" />
              ) : (
                <AiOutlineEyeInvisible className="text-[24px]" color="#bbb" />
              )}
            </div>
          </div>
        </div>
        <div className="lg:mt-10 mt-5">
          <label htmlFor="name" className="text-lg font-medium text-text ">
            Confirm Password
          </label>
          <div className="relative ">
            <input
              type={passwordShow ? "text" : "password"}
              placeholder="Confirm password ..."
              className="placeholder-[#bbb] outline-none py-[10px] px-[20px] block w-full border border-[#E4E3E3] rounded-md mt-3 z-0"
            />
            <div
              className="absolute right-3 top-2 cursor-pointer"
              onClick={() => setPasswordShow(!passwordShow)}
            >
              {passwordShow ? (
                <AiOutlineEye className="text-[24px]" color="#bbb" />
              ) : (
                <AiOutlineEyeInvisible className="text-[24px]" color="#bbb" />
              )}
            </div>
          </div>
        </div>

        <div className="mt-5 lg:mt-10">
          <Link href="/home">
            <button className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-subText rounded-lg hover:bg-subText/90 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50">
              Update
            </button>
          </Link>
        </div>

        <div className=" mt-5 lg:mt-10">
          <p className="text-sm text-gray-500 text-center flex gap-3 justify-center">
           Already a member?
            <Link href="/sign-in" className="text-[#17C550]">
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PasswordChangeForm;
