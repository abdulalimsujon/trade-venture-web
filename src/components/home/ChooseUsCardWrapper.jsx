import Image from "next/image";
import flag from "../../assets/home/flag.png";
import growth from "../../assets/home/growth.png";

import revenue from "../../assets/home/revenue.png";

const ChooseUsCardWrapper = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px] xl:mt-[80px] lg:mt-[60px] mt-[40px]">
      <div className="bg-white rounded-[8px] py-[40px] px-[26px]">
        <div className="w-[77px] h-[77px] rounded-full bg-main flex items-center justify-center">
          <Image src={flag} alt="" width={43} />
        </div>

        <h2 className="text-[26px] font-bold text-main mt-10">Start</h2>
        <p className="text-subText text-[18px] font-normal mt-[13px]">
          Got an idea? Let Us Guide You in Transforming it into a Thriving
          Business.
        </p>
      </div>

      <div className="bg-white rounded-[8px] py-[40px] px-[26px]">
        <div className="w-[77px] h-[77px] rounded-full bg-primary flex items-center justify-center">
          <Image src={growth} alt="" width={43} />
        </div>

        <h2 className="text-[26px] font-bold text-main mt-10">Grow</h2>
        <p className="text-subText text-[18px] font-normal mt-[13px]">
          Ready to Amplify Your Business? We’re here to propel your growth
          trajectory.
        </p>
      </div>

      <div className="bg-white rounded-[8px] py-[40px] px-[26px]">
        <div className="w-[77px] h-[77px] rounded-full bg-main flex items-center justify-center">
          <Image src={revenue} alt="" width={43} />
        </div>

        <h2 className="text-[26px] font-bold text-main mt-10">Revenue</h2>
        <p className="text-subText text-[18px] font-normal mt-[13px]">
          Ready to Skyrocket your Revenue? Let’s Catapult Your Business to New
          Heights.
        </p>
      </div>
    </div>
  );
};

export default ChooseUsCardWrapper;
