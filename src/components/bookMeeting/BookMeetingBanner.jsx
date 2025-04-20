import React from "react";

const BookMeetingBanner = ({ title }) => {
  return (
    <div className="startup-banner">
      <div className="container relative">
        <div className="pt-24">
          {/* search field */}
          <div className="flex gap-5 md:items-center justify-center text-center h-full">
            <h2 className="text-3xl font-bold text-white">Kim Jun Qung</h2>
          </div>

          <div className="flex items-center justify-center mt-16 ">
            <h2 className="text-white font-bold capitalize lg:text-[62px] text-[22px]">
              {title}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookMeetingBanner;
