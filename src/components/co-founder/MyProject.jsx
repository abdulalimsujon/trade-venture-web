"use client";
import Image from "next/image";
import React from "react";
import { useState, useMemo } from "react";
import { RiLoader2Line } from "react-icons/ri";
import { FaLink } from "react-icons/fa6";

const MyProject = () => {
  const companyImageGallery = useMemo(
    () => [
      "https://i.ibb.co/yQ9Hcdq/student-849824-1280.jpg",
      "https://i.ibb.co/dmqY2bb/entrepreneur-593357-1280.jpg",
      "https://i.ibb.co/TkQh7vk/entrepreneur-593378-1280.jpg",
    ],
    []
  );

  const [selectedImage, setSelectedImage] = useState(companyImageGallery[0]);
  const [initialLoadComplete, setInitialLoadComplete] = useState(false);

  const handleLoad = () => {
    setInitialLoadComplete(true);
  };

  return (
    <div>
      <div className="lg:w-3/4 w-full ">
        <div className="flex flex-col md:flex-row gap-3">
          <div className="relative w-full h-[260px] ">
            {!initialLoadComplete && (
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  background: "#f0f0f0",
                }}
              >
                <RiLoader2Line className="animate-spin " size={28} />
              </div>
            )}
            <Image
              src={selectedImage}
              alt=""
              fill
              onLoad={handleLoad}
              className={`rounded-xl w-full duration-[2s] opacity-0 transition-opacity ${
                initialLoadComplete ? "opacity-100" : "opacity-0"
              }`}
              onLoadingComplete={(image) => image.classList.remove("opacity-0")}
            />
          </div>
          <div className="flex md:flex-col flex-row gap-4">
            {companyImageGallery?.map((image, index) => (
              <div key={index} className="w-[130px] h-[70px] relative">
                {!initialLoadComplete ? (
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      background: "#f0f0f0",
                    }}
                  >
                    <RiLoader2Line className="animate-spin " size={18} />
                  </div>
                ) : (
                  <div>
                    <Image
                      onClick={() => setSelectedImage(image)}
                      src={image}
                      alt=""
                      fill
                      className="cursor-pointer rounded-[6px] hover:brightness-50 duration-[2s] transition-opacity opacity-0"
                      onLoadingComplete={(image) =>
                        image.classList.remove("opacity-0")
                      }
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* project description */}
      <div className="w-full mt-4">
        <div className="flex items-center gap-3 cursor-pointer">
          <h2 className="text-base font-semibold text-[#1D2939] hover:text-secondary duration-300">
            Edtech Platform UI design
          </h2>
          <FaLink size={20} className="text-main" />
        </div>

        <p className="text-[#1D2939] text-[14px] font-normal my-3">
          Explore Hot Talents and others from 1200+ Talents that match your
          requirments! Explore Hot Talents and others from 1200+ Talents... See
          more...
        </p>

        <div className="flex items-center gap-2   mt-5">
          <div className="py-1 px-2 bg-[#E9EFFF] rounded-[6px]">
            <span className="text-[#1D2939] text-sm font-medium whitespace-nowrap">
              UX Design
            </span>
          </div>
          <div className="py-1 px-2 bg-[#FFFBEE] rounded-[6px]">
            <span className="text-[#1D2939] text-sm font-medium whitespace-nowrap">
              UI Design
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProject;
