"use client";
import dynamic from "next/dynamic";
import { useState } from "react";
import { IoIosInformationCircle } from "react-icons/io";
import "react-quill/dist/quill.snow.css";

// Dynamically import React Quill
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const Page = () => {
  const [formData, setFormData] = useState({
    displayName: "",
    nickName: "",
    bio: "",
    gender: "",
    contactNumber: "",
    email: "",
    location: "",
  });

  const [errors, setErrors] = useState({});
  const [coverImage, setCoverImage] = useState(null);

  // React Quill toolbar configuration
  const quillModules = {
    toolbar: [
      [{ header: "1" }, { header: "2" }, { font: [] }],
      [{ size: [] }],
      ["bold", "italic", "underline", "strike"],
      [{ color: [] }, { background: [] }],
      [{ script: "sub" }, { script: "super" }],
      [{ list: "ordered" }, { list: "bullet" }],
      [{ align: [] }],
      ["blockquote", "code-block"],
      ["link", "image", "video"],
      ["clean"],
    ],
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleFileChange = (e) => {
    setCoverImage(e.target.files[0]);
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.displayName)
      newErrors.displayName = "Display name is required";
    if (!formData.nickName) newErrors.nickName = "Nick name is required";
    if (!formData.bio) newErrors.bio = "Bio is required";
    if (!formData.contactNumber)
      newErrors.contactNumber = "Contact number is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.location) newErrors.location = "Location is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted:", formData);
      // Proceed with form submission (e.g., API call)
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen px-5">
      <p className="text-3xl font-semibold py-5">Edit Profile</p>
      <div className="flex flex-col md:flex-row gap-6  ">
        {/* Left Card - Profile Information */}

        <div className="flex-1 bg-white shadow-lg rounded-lg p-6">
          <div className="flex  gap-2">
            <p className="bg-green-200 h-7 w-4"></p>
            <h2 className="text-lg font-semibold mb-4">Profile Information</h2>
          </div>

          {/* Profile Image Section */}
          <div className="flex items-center mb-6">
            <img
              src="https://via.placeholder.com/50"
              alt="Profile"
              className="w-16 h-16 rounded-full mr-4"
            />
            <div>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2">
                Upload new picture
              </button>
              <button className="bg-gray-200 px-4 py-2 rounded-md">
                Remove
              </button>
            </div>
          </div>

          {/* Form Section */}
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className=" text-gray-700 flex items-center gap-1 py-1">
                Display name
                <IoIosInformationCircle />
              </label>
              <input
                type="text"
                name="displayName"
                value={formData.displayName}
                onChange={handleChange}
                className={`w-full p-3 border rounded-md ${
                  errors.displayName ? "border-red-500" : ""
                }`}
                placeholder="Display name"
              />
              {errors.displayName && (
                <span className="text-red-500 text-sm">
                  {errors.displayName}
                </span>
              )}
            </div>

            <div>
              <label className=" text-gray-700 flex items-center gap-1 py-1">
                Nick name <IoIosInformationCircle />
              </label>
              <input
                type="text"
                name="nickName"
                value={formData.nickName}
                onChange={handleChange}
                className={`w-full p-3 border rounded-md ${
                  errors.nickName ? "border-red-500" : ""
                }`}
                placeholder="Nick name"
              />
              {errors.nickName && (
                <span className="text-red-500 text-sm">{errors.nickName}</span>
              )}
            </div>

            {/* Gender Selection */}
            <div className="flex justify-between  gap-3">
              <div className="w-full">
                <label className=" text-gray-700 flex items-center gap-1 py-1">
                  Gender <IoIosInformationCircle />
                </label>
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-md"
                >
                  <option value="">Select gender </option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="w-full">
                <label className=" text-gray-700 flex items-center gap-1 py-1">
                  Contact Number <IoIosInformationCircle />
                </label>
                <input
                  type="text"
                  name="contactNumber"
                  value={formData.contactNumber}
                  onChange={handleChange}
                  className={`w-full p-3 border rounded-md ${
                    errors.contactNumber ? "border-red-500" : ""
                  }`}
                  placeholder="Contact Number"
                />
                {errors.contactNumber && (
                  <span className="text-red-500 text-sm">
                    {errors.contactNumber}
                  </span>
                )}
              </div>
            </div>

            <div>
              <label className=" text-gray-700 flex items-center gap-1 py-1">
                Email <IoIosInformationCircle />
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full p-3 border rounded-md ${
                  errors.email ? "border-red-500" : ""
                }`}
                placeholder="Email"
              />
              {errors.email && (
                <span className="text-red-500 text-sm">{errors.email}</span>
              )}
            </div>

            <div>
              <label className=" text-gray-700 flex items-center  gap-1 py-1">
                Location <IoIosInformationCircle />
              </label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                className={`w-full p-3 border rounded-md ${
                  errors.location ? "border-red-500" : ""
                }`}
                placeholder="Location"
              />
              {errors.location && (
                <span className="text-red-500 text-sm">{errors.location}</span>
              )}
            </div>

            {/* //text editor */}
            {/* Bio Section with Rich Text Editor */}
            <div className="py-4">
              <label className=" text-gray-700 flex items-center gap-1 py-1">
                Bio <IoIosInformationCircle />
              </label>
              <ReactQuill
                value={formData.bio}
                onChange={(value) => setFormData({ ...formData, bio: value })}
                modules={quillModules}
                className={`${
                  errors.bio ? "border-red-500" : ""
                } h-32 rounded-md`}
                placeholder="Write your bio..."
              />
              {errors.bio && (
                <span className="text-red-500 text-sm">{errors.bio}</span>
              )}
            </div>

            {/* Cover Image Upload */}
            <div className="pt-16">
              <label className=" text-gray-700 mb-2 flex  items-center gap-1 py-1">
                Cover Image <IoIosInformationCircle />
              </label>
              <label
                htmlFor="coverImageUpload"
                className="w-full flex items-center justify-center p-3 border-dashed border-2 rounded-md text-gray-500 cursor-pointer"
              >
                Click or drop image
                <input
                  type="file"
                  id="coverImageUpload"
                  name="coverImage"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="hidden"
                />
              </label>
            </div>

            {/* Save Button */}
            <div className="mt-6">
              <button
                type="submit"
                className="bg-[#2F7889] text-white px-6 py-2 rounded-md w-full md:w-auto"
              >
                Save info
              </button>
            </div>
          </form>
        </div>

        {/* Right Card - Preview */}
        <div className="w-full md:w-1/3 bg-white shadow-lg rounded-lg p-6">
          <div className="flex  gap-2">
            <p className="bg-green-200 h-7 w-4"></p>
            <h2 className="text-lg font-semibold mb-4">Preview</h2>
          </div>
          <div className="bg-purple-100 rounded-lg h-24 flex items-center justify-center mb-4">
            <span>Show the Uploaded Cover photo here</span>
          </div>
          <div className="flex items-center">
            <img
              src="https://via.placeholder.com/50"
              alt="Profile Preview"
              className="w-12 h-12 rounded-full mr-4"
            />
            <div>
              <span className="font-semibold">Display name here</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
