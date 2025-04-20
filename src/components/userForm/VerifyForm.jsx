"use client";
import Link from "next/link";
import OtpField from "../ui/input/OtpField";

const VerifyForm = () => {
  return (
    <div className="flex w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg  lg:max-w-4xl">
      <div className="hidden bg-cover lg:block lg:w-1/2 signup-bg"></div>

      <div className="w-full px-6 py-8 md:py-16 md:px-8 lg:w-1/2">
        <div>
          <OtpField></OtpField>
        </div>

        <div className="mt-5 lg:mt-10">
          <Link href="/home">
            <button className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-subText rounded-lg hover:bg-subText/90 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50">
              Continue
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

export default VerifyForm;
