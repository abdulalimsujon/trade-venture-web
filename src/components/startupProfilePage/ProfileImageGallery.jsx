"use client";

import Image from "next/image";
import { useEffect, useState, useMemo } from "react";

const ProfileImageGallery = () => {
  const companyImageGallery = useMemo(
    () => [
      "https://i.ibb.co/LdLRqDL/student-849828-1280.jpg",
      "https://i.ibb.co/2M9bpQY/computer-1185626-1280.jpg",
      "https://i.ibb.co/bNn0HLf/entrepreneur-593362-1280.jpg",
      "https://i.ibb.co/yQ9Hcdq/student-849824-1280.jpg",
      "https://i.ibb.co/dmqY2bb/entrepreneur-593357-1280.jpg",
      "https://i.ibb.co/TkQh7vk/entrepreneur-593378-1280.jpg",
    ],
    []
  );

  const [selectedImage, setSelectedImage] = useState([companyImageGallery[0]]);
  const [initialLoadComplete, setInitialLoadComplete] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const currentIndex = companyImageGallery.indexOf(selectedImage);

      const nextIndex = (currentIndex + 1) % companyImageGallery.length;

      setSelectedImage(companyImageGallery[nextIndex]);

      setInitialLoadComplete(true);
    }, 6000);

    return () => {
      clearInterval(intervalId);
    };
  }, [selectedImage, companyImageGallery]);

  return (
    <div className="px-1 lg:px-0">
      <div className="relative w-full h-[250px] md:h-[400px]">
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
            Loading...
          </div>
        )}
        <Image
          src={selectedImage}
          alt=""
          fill
          className={`rounded-xl w-full duration-[2s] opacity-0 transition-opacity ${
            initialLoadComplete ? "opacity-100" : "opacity-0"
          }`}
          onLoadingComplete={(image) => image.classList.remove("opacity-0")}
        />
      </div>
      <div className="flex flex-wrap gap-5 mt-2 mb-4">
        {companyImageGallery?.map((image, index) => (
          <Image
            onClick={() => setSelectedImage(image)}
            src={image}
            alt=""
            key={index}
            width={100}
            height={75}
            className="cursor-pointer rounded-xl hover:brightness-50 duration-[2s] transition-opacity opacity-0"
            onLoadingComplete={(image) => image.classList.remove("opacity-0")}
          />
        ))}
      </div>
    </div>
  );
};

export default ProfileImageGallery;
