import Image from "next/image";
import map from "../../assets/home/map.png";

const ProGlobalNetwork = () => {
  return (
    <div className="section-padding ">
      <div className="container">
        <div className="flex flex-col justify-center text-center">
          <h2 className="xl:text-[50px] lg:text-[42px] md:text-[28px] text-[22px] font-bold text-text">
            Connect To Unparalleled{" "}
            <span className="text-primary">Global Network</span>
          </h2>
          <p className="text-text xl:text-[18px] lg:text-[16px] text-base mt-5 font-normal w-2/4]">
            Forging Pathways: Connecting You to a Vast Global Network for <br />
            Unprecedented Business Opportunities
          </p>
        </div>

        <div className="flex justify-center items-center lg:flex-row flex-col gap-[30px] xl:gap-[60px] w-full xl:mt-[80px] lg:mt-[50px] md:mt-[60px] mt-[40px]">
          <div className="w-full  flex items-center justify-center">
            <Image src={map} alt="" width={900} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProGlobalNetwork;
