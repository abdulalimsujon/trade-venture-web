import React from "react";
import { MdOutlineAddPhotoAlternate } from "react-icons/md";

const SettingPage = () => {
  return (
    <div className="p-5">
      <div className="bg-white w-full max-w-[1136px] p-6 rounded-[8px] border border-gray-200 shadow-md">
        <div className="justify-center items-center">
          <h2 className="text-red-500 font-bold">Account Setting</h2>
          <hr className="max-w-[150px] border-7 border-red-400 mt-2 mb-5" />
        </div>
        <h3 className="mb-3">Your profile picture</h3>
        <div className="w-32 h-32 border-2 border-dashed rounded-xl flex items-center justify-center">
          <div className="flex flex-col items-center p-3">
            <input type="file" id="fileInput" className="hidden" />
            <label htmlFor="fileInput" className="cursor-pointer">
              <MdOutlineAddPhotoAlternate size={40} className="text-gray-500 hover:text-gray-700" />
            </label>
            <p className="text-center text-sm text-gray-500 mt-1">Upload your photo</p>
          </div>
        </div>
        <hr className="w-full border-gray-400 my-5" />
        <div className="grid grid-cols-2 gap-4">
          <label
            htmlFor="name"
            className=" mr-3 text-sm text-gray-700"
          >
            Full Name
            <input
              type="text"
              id="name"
              placeholder="Please enter your full name"
              className="mt-2 w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
              style={{ backgroundColor: "#f4f4f4" }}
            />
          </label>
          <label
            htmlFor="email"
            className=" mr-3 text-sm text-gray-700"
          >
            Email
            <input
              type="email"
              id="email"
              placeholder="Please enter your email"
              className="mt-2 w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
              style={{ backgroundColor: "#f4f4f4" }}
            />
          </label>
          <label
            htmlFor="username"
            className=" mr-3 text-sm text-gray-700"
          >
            Username
            <input
              type="text"
              id="username"
              placeholder="Please enter your full name"
              className="mt-2 w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
              style={{ backgroundColor: "#f4f4f4" }}
            />
          </label>
          <label
            htmlFor="phone"
            className=" mr-3 text-sm text-gray-700"
          >
            Phone Number
            <input
              type="number"
              id="phone"
              placeholder="Please enter your phone number"
              className="mt-2 w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
              style={{ backgroundColor: "#f4f4f4" }}
            />
          </label>
          <label
            htmlFor="password"
            className=" mr-3 text-sm text-gray-700"
          >
            Password
            <input
              type="password"
              id="password"
              placeholder="*****"
              className="mt-2 w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
              style={{ backgroundColor: "#f4f4f4" }}
            />
          </label>
          <label
            htmlFor="confirm-password"
            className=" mr-3 text-sm text-gray-700"
          >
            Confirm Password
            <input
              type="password"
              id="confirm-password"
              placeholder="*****"
              className="mt-2 w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
              style={{ backgroundColor: "#f4f4f4" }}
            />
          </label>
        </div>
        <h2 className="mt-8 font-bold">Turn on your notification</h2>
        <button className="mt-2 text-white hover:text-gray-700 flex items-center space-x-1 rounded-lg p-2 px-6" style={{ backgroundColor: "#8d8d8d" }}>
          Notification Off
        </button>
        <div className="flex mt-8">
          <div className="flex justify-center items-center">
            <button className="text-white hover:text-gray-700 flex items-center space-x-1 rounded-lg p-2 px-6" style={{ backgroundColor: "#22cd5a" }}>
              Update Profile
            </button>
            <button className="ml-7 text-gray-400">Reset</button>
          </div>
        </div>
      </div>
      <div className="mt-4 p-6">
        <div>
          <h3 className="font-bold">Last sign in</h3>
          <h3 className="text-sm text-gray-600 mt-3">Today at 18:34, Safary 198.123.23.23</h3>
          <div className="mt-8">
            <div className="flex justify-between">
              <h3 className="font-bold">Total active session (5)</h3>
              <h3 className="text-gray-600">All</h3>
            </div>
            <div className="mt-5">
              <h3 className="text-sm text-gray-600">DESKTOP-6TIG6EC • Kyiv, Ukraine</h3>
              <h6 className="text-gray-500 text-sm mt-2">Chrome • Used right now</h6>
            </div>
            <hr className="w-full border-gray-400 my-2" />
            <div className="mt-3">
              <h3 className="text-sm text-gray-600">Iphone 11 • Kyiv, Ukraine</h3>
              <h6 className="text-gray-500 text-sm mt-2">Chrome • 04/19/2022</h6>
              <hr className="w-full border-gray-400 my-2" />
            </div>
          </div>
        </div>
        <div className="flex justify-end mt-10">
          <button className="text-white hover:text-gray-700 flex items-center space-x-1 rounded-md p-2 px-6" style={{ backgroundColor: "#22cd5a" }}>
            + Reset all activity session
          </button>
        </div>
      </div>
    </div>
  );
};

export default SettingPage;