import PlusIcon from "@/components/icons/PlusIcon";
import TikIcon from "@/components/icons/TikIcon";
import Image from "next/image";
import Link from "next/link";
import { FaRegUser } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { TbGenderGenderfluid } from "react-icons/tb";
import banner from "../../../../assets/user/Cover.png";
import profile from "../../../../assets/user/userprofile.png";
const ProfilePage = () => {
  return (
    <div className="bg-gray-200 pb-10">
      <div className="w-full h-[300px] relative border ">
        <Image
          src={banner}
          alt="Banner"
          layout="fill"
          objectFit="cover" // This ensures the image covers the full area
        />
      </div>
      <div className="bg-gray-50 py-10 mx-10 px-5 relative z-20  -mt-10 mb-5 rounded-lg">
        <div className=" flex justify-between border-b py-5">
          <div className="flex gap-2">
            {/* Profile Image with Tick Icon in Bottom-Right */}
            <div className="relative h-16 w-16">
              <Image
                height={60}
                width={60}
                src={profile}
                className="rounded-full"
                alt="Profile"
              />
              <div className="absolute bottom-2 right-1 bg-white rounded-full p-0.5">
                <PlusIcon size={16} />
              </div>
            </div>

            {/* Name with Tick Icon */}
            <div>
              <div className="flex items-center gap-2">
                <p className="text-lg font-semibold">Chelsie Heley</p>
                <TikIcon size={20} /> {/* Tick Icon after Name */}
              </div>
              <p>Dream big. Think different. Do Great!</p>
            </div>
          </div>
          <div>
            <Link
              href="/users/edit-profile"
              className="text-white bg-blue-500 px-3 py-2 rounded-lg"
            >
              Edit Profile
            </Link>
          </div>
        </div>
        <div className=" py-5">
          <button className="bg-gray-100 rounded-lg p-2">Basic Info</button>
        </div>
      </div>

      {/* another card */}

      <div className="mx-10 px-5 py-5  bg-white space-y-7 rounded-lg">
        <div className="flex items-center gap-2">
          {/* icon */}
          <p className="bg-gray-200 h-10 w-5"></p>
          <p className="text-lg font-semibold">General Information</p>
        </div>

        <div className="flex justify-between ">
          <div className="space-y-5">
            <div className="flex items-center gap-2 ">
              <p className="text-[#2F7889]">
                <FaRegUser />
              </p>
              <p>Nick Name</p>
            </div>
            <div className="flex items-center gap-2">
              <p className="text-[#2F7889]">
                <TbGenderGenderfluid />
              </p>
              <p>Gender</p>
            </div>

            <div className="flex items-center gap-2">
              <p className="text-[#2F7889]">
                <MdEmail />
              </p>
              <p>Email Address</p>
            </div>

            <div className="flex items-center gap-2">
              <p className="text-[#2F7889]">
                <FaLocationDot />
              </p>
              <p>Location</p>
            </div>

            <div className="flex items-center gap-2">
              <p className="text-[#2F7889]">
                <IoCall />
              </p>
              <p>Contact Number</p>
            </div>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <TikIcon size={100} />
            <div>
              <button className="bg-[#032D2C] py-2 px-5 text-white rounded-lg">
                Apply for verification
              </button>
            </div>
            <p className="text-sm">If you verify, There is a huge chance of </p>
            <p className="text-sm">
              investor who’ll love to invest in your pitch
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
