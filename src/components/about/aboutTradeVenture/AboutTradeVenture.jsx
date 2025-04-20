import React from "react";
import about1 from "../../../assets/about/about-1.png";
import about2 from "../../../assets/about/about-2.png";
import Image from "next/image";

const AboutTradeVenture = () => {
  return (
    // <div className="container lg:mt-[45px]">
    //   <div className="grid grid-cols-10 gap-5">
    //     <div className="lg:col-span-6 col-span-12">
    //       <Image src={about1} alt="About image" width={692} height={711} />
    //     </div>
    //     <div className="col-span-4">
    //       <div className="">
    //         <div className="row-span-2 bg-indigo-700">
    //           <Image
    //             src={about2}
    //             alt=""
    //             width={488}
    //             height={345}
    //             style={{
    //               maxWidth: "100%",
    //               height: "auto",
    //             }}
    //           />
    //         </div>
    //         <div className="row-span-2">
    //           <div className="border border-[#e4e4e4] rounded-[30px] py-[60px] px-[37px] mt-5">
    //             <p>
    //               At Trade Ventures, we are more than just a company we are your
    //               trusted partner in navigating the intricate world of global
    //               trade and commerce. Our journey began with a vision to
    //               revolutionize the way businesses connect, grow, and prosper in
    //               an increasingly interconnected world.
    //             </p>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <div className="container">
      <div className="grid lg:h-[711px] grid-cols-10 gap-4 mt-10">
        <div className=" col-span-10 lg:col-span-6">
          <div className="w-full lg:h-[345px] lg:mb-0 mb-5 relative group">
            <Image
              src={about1}
              alt="About image"
              width={692}
              height={711}
              style={{
                maxWidth: "100%",
                height: "auto",
              }}
            />
          </div>
        </div>
        <div className="col-span-10 lg:col-span-4">
          <div className="flex md:flex-row flex-col lg:flex-col gap-5">
            <div className="h-full  w-full">
              <Image
                src={about2}
                alt=""
                width={488}
                height={345}
                style={{
                  maxWidth: "100%",
                  height: "auto",
                }}
              />
            </div>

            <div className="lg:h-[250px] w-full ">
              <div className="border border-[#e4e4e4] rounded-[30px] py-[60px] px-[37px] ">
                <p>
                  At Trade Ventures, we are more than just a company we are your
                  trusted partner in navigating the intricate world of global
                  trade and commerce. Our journey began with a vision to
                  revolutionize the way businesses connect, grow, and prosper in
                  an increasingly interconnected world.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutTradeVenture;
