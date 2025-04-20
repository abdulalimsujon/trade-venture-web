import TabTitle from "@/components/shared/tabTitle/TabTitle";
import Link from "next/link";
import React from "react";
import { FaLink } from "react-icons/fa6";

const AboutTabContent = () => {
  return (
    <div className="mt-5">
      {/* <h2 className="tab-title">About</h2> */}
      <TabTitle>About</TabTitle>

      <div className="flex items-center justify-between mt-6">
        <h2 className="text-primary text-[18px] font-bold capitalize ">
          HEADQUARTERS
        </h2>
        <Link
          href="#"
          className="text-base text-secondary font-semibold flex items-center gap-2 hover:brightness-200 duration-300"
        >
          <FaLink />
          View Site
        </Link>
      </div>

      <h6 className="text-base font-semibold text-main mt-7 mb-5">
        1801 CENTURY PARK EAST 24TH
        <br /> FLOORLos Angeles, CA 90067
      </h6>

      <p className="text-base text-main font-normal">
        Legion M is the first entertainment company built to be owned by fans.
        Enabled by disruptive new securities laws, we are giving you a seat at
        the table -- and a stake in the outcome -- as we unite fans to shape the
        future of Film and Television!
      </p>
    </div>
  );
};

export default AboutTabContent;
