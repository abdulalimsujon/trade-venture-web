"use client";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const SignUpForm = () => {
  const [passwordShow, setPasswordShow] = useState(false);
  return (
    <div className="flex w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg  lg:max-w-4xl xl:mt-[110px] lg:mt-[90px] md:mt-[60px] mt-10">
      <div className="hidden bg-cover lg:block lg:w-1/2 signup-bg"></div>

      <div className="w-full px-6 py-8 md:px-8 lg:w-1/2">
        <div>
          <label htmlFor="name" className="text-lg font-medium text-text ">
            Email
          </label>
          <input
            type="text"
            placeholder="Enter your email address..."
            className="placeholder-[#bbb] outline-none py-[10px] px-[20px] block w-full border border-[#E4E3E3] rounded-md mt-3"
          />
        </div>

        <div className="mt-5">
          <label htmlFor="name" className="text-lg font-medium text-text ">
            Password
          </label>
          <div className="relative">
            <input
              type={passwordShow ? "text" : "password"}
              placeholder="Enter your password ..."
              className="placeholder-[#bbb] outline-none py-[10px] px-[20px] block w-full border border-[#E4E3E3] rounded-md mt-3"
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

        <div className="mt-5">
          <label htmlFor="name" className="text-lg font-medium text-text ">
            Confirm Password
          </label>
          <div className="relative">
            <input
              type={passwordShow ? "text" : "password"}
              placeholder="Retype your password ..."
              className="placeholder-[#bbb] outline-none py-[10px] px-[20px] block w-full border border-[#E4E3E3] rounded-md mt-3"
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

        <div className="mt-6">
          <Link href="/home">
            <button className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#17C550] rounded-lg hover:bg-[#056b27] focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50">
              Sign Up
            </button>
          </Link>
        </div>

        <div className=" mt-4">
          <p className="text-sm text-gray-500 text-center">
            Already have an account?{" "}
            <Link href="/sign-in" className="text-[#17C550]">
              sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
