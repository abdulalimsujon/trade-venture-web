"use client";
import dynamic from "next/dynamic";
import Image from "next/image";
import { FaExpand } from "react-icons/fa";
import { HiOutlineLightBulb } from "react-icons/hi";
import { IoMdArrowRoundBack } from "react-icons/io";
import { LiaCheckDoubleSolid } from "react-icons/lia";
import { LuUpload } from "react-icons/lu";
import "react-quill/dist/quill.snow.css";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const CreateEvent = () => {
  return (
    <div className="pl-5">
      <h3 className="font-sans text-[40px] font-semibold leading-[48px] tracking-[-0.02em] text-left w-[242px] h-[48px] top-[123px] left-[376px] my-5">
        Create Event
      </h3>
      <div className="flex">
        <div>
          <div className="bg-white w-full max-w-[872px] p-6 rounded-[8px] border border-gray-200 shadow-md">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold text-gray-800">
                Event Details
              </h2>
              <button className="text-sm text-gray-500 hover:text-gray-700 flex items-center space-x-1 border border-gray-500 rounded-lg p-2 pt-2 pr-4 pb-2 pl-4">
                <IoMdArrowRoundBack />
                <span>Back</span>
              </button>
            </div>
            <div className="mb-4">
              <div className="flex align-center my-2">
                <label
                  htmlFor="description"
                  className="mr-3 block text-sm font-bold text-gray-700"
                >
                  Description
                </label>
                <p className="text-xs w-[380px] text-gray-500 bg-slate-200 p-1 rounded-md flex align-center justify-between">
                  <HiOutlineLightBulb />
                  Pro tip: Provide context for the problem your startup is
                  solving
                </p>
              </div>
              <ReactQuill
                rows="4"
                theme="snow"
                className="mt-1 w-full"
                placeholder="Provide context for the problem your startup is solving."
              />
            </div>
            <div>
              <div className="flex align-center my-2">
                <h3 className="text-sm mr-3 font-bold text-gray-700 mb-2">
                  Key features
                </h3>
                <p className="text-xs text-gray-500 bg-slate-200 p-1 rounded-md flex align-center justify-between">
                  <HiOutlineLightBulb />
                  Pro tips : Clearly articulate the problem your target audience
                  faces
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Value"
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
                  style={{ backgroundColor: "#f4f4f4" }}
                />
                <input
                  type="text"
                  placeholder="Value"
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
                  style={{ backgroundColor: "#f4f4f4" }}
                />
                <input
                  type="text"
                  placeholder="Value"
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
                  style={{ backgroundColor: "#f4f4f4" }}
                />
                <input
                  type="text"
                  placeholder="Value"
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
                  style={{ backgroundColor: "#f4f4f4" }}
                />
              </div>
              <button className="mt-4 text-black font-bold border border-gray-300 rounded-md p-2">
                Add more
              </button>
            </div>
            <div className="mt-6">
              <div className="flex align-center my-2">
                <label
                  htmlFor="cover-image"
                  className=" mr-3 text-sm font-bold text-gray-700"
                >
                  Cover Image
                </label>
                <p className="text-xs text-gray-500 bg-slate-200 p-1 rounded-md flex align-center justify-between">
                  <HiOutlineLightBulb />
                  Pro tips : Use data and real-life examples to validate the
                  significance of the problem{" "}
                </p>
              </div>
              <div
                className="mt-2 border-2 border-dashed border-gray-300 rounded-md p-6 text-center cursor-pointer hover:bg-gray-50"
                style={{ backgroundColor: "#f4f4f4" }}
              >
                <label
                  htmlFor="cover-image-upload"
                  className="text-black font-bold border border-gray-300 rounded-md p-2 m-6 inline-flex items-center"
                >
                  <span className="flex items-center space-x-2">
                    <LuUpload />
                    <span>Click or drop image</span>
                  </span>
                  <input
                    id="cover-image-upload"
                    type="file"
                    className="hidden"
                  />
                </label>
              </div>
              <p className="text-xs text-gray-500 mt-2">
                Pro tip: Use data and real-life examples to validate the
                significance of the problem.
              </p>
            </div>
          </div>
          <div className="mt-5 mb-5 bg-white w-full max-w-[672px] p-4 rounded-[8px] border border-gray-200 shadow-md">
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-1">
                <LiaCheckDoubleSolid />
                <span className="mx-4">
                  Last saved{" "}
                  <b>
                    {new Date().toLocaleString("en-US", {
                      month: "short",
                      day: "2-digit",
                      year: "numeric",
                    })}{" "}
                    -{" "}
                    {new Date().toLocaleTimeString("en-US", {
                      hour: "2-digit",
                      minute: "2-digit",
                      hour12: false,
                    })}
                  </b>
                </span>
              </div>
              <div className="flex space-x-2">
                <button className="text-sm text-gray-500 hover:text-gray-700 flex items-center space-x-1 border border-gray-500 rounded-lg p-2 pt-2 pr-4 pb-2 pl-4">
                  Save Draft
                </button>
                <button className="text-sm bg-black text-white hover:text-gray-300 flex items-center space-x-1 border border-gray-500 rounded-lg p-2 pt-2 pr-4 pb-2 pl-4">
                  Continue
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white w-[340px] h-[496px] ml-10 rounded-[8px] border border-gray-200 shadow-md">
          <div className="flex justify-between items-center m-5">
            <h2 className="text-lg font-semibold text-gray-800">Preview</h2>
            <button className=" text-gray-500 hover:text-gray-700 flex items-center space-x-1">
              <FaExpand />
            </button>
          </div>
          <div className="flex justify-center">
            <div className="bg-blue-100 w-[292px] h-[200px] rounded-[12px] border border-gray-200 shadow-md mx-auto"></div>
          </div>
          <div className="m-5">
            <h2 className="text-lg font-semibold text-gray-800 ">
              Show the Pitch Titles Here
            </h2>
            <button className="mt-2 text-black bg-pink-300 font-bold border border-gray-300 rounded-md p-2">
              Category 1
            </button>
            <div className="flex">
              <button className="mt-2 mr-1 text-black bg-blue-300 font-bold border border-gray-300 rounded-md py-2 px-4">
                Tag 1
              </button>
              <button className="mt-2 mx-1 text-black bg-red-300 font-bold border border-gray-300 rounded-md py-2 px-4">
                Tag 2
              </button>
              <button className="mt-2 ml-1 text-black bg-green-300 font-bold border border-gray-300 rounded-md py-2 px-4">
                Tag 2
              </button>
            </div>
            <div className="flex mt-5">
              <Image
                src="/1.jpg"
                width={25}
                height={25}
                className="rounded-full object-cover"
                alt="user avatar"
              />
              <span className="ml-3">
                by <b>Hortans</b>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateEvent;
