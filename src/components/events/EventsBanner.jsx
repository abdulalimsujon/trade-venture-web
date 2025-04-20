import React from "react";
import { IoMdOptions } from "react-icons/io";
import ProtectedSearchInput from "../userForm/ProtectedSearchInput";

const PageBanner = ({ title }) => {
    return (
        <div className="events-banner">
            <div className="container-fluid relative bg-[#22CD5A]">
                <div className="pt-24">
                    {/* search field */}
                    <div className="container flex gap-5 justify-between md:items-center  text-center h-full">
                        <ProtectedSearchInput />
                        <div className="w-[218px] bg-white px-4 rounded-md h-[45px] capitalize flex items-center font-semibold text-sm text-[#6D6D6D] justify-between">
                            <span>Options</span>
                            <span className="ml-4 font-medium"><IoMdOptions /></span>
                        </div>
                    </div>

                    <div className="container flex mt-16 pb-10 items-center text-left">
                        <h2 className="text-white font-bold capitalize lg:text-[62px] text-[22px]">
                            {title}
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PageBanner;