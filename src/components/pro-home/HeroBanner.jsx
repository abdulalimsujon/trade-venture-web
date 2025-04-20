import React from "react";
import ProtectedSearchInput from "../userForm/ProtectedSearchInput";

const HeroBanner = () => {
  return (
    <div className="protected-bg">
      <div className="container relative h-full">
        <div className="flex flex-col gap-5 md:items-center justify-center text-center h-full">
          <h2 className="text-white heading-text capitalize">
            Accelerating the growth of <br /> new vision ecosystem
          </h2>
          {/* search field */}
          <div>
            <ProtectedSearchInput />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
