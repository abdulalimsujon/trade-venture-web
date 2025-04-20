import ChooseUsCardWrapper from "./ChooseUsCardWrapper";

const WhyChooseUs = () => {
  return (
    <div className="py-[40px] md:py-[50px] lg:py-[95px] xl:py-[110px] bg-[#f6f6f6]">
      <div className="container">
        <div className="flex flex-col justify-center text-center">
          <h2 className="xl:text-[50px] lg:text-[42px] md:text-[28px] text-[22px] font-bold text-text">
            Why Choose Trade Ventures
          </h2>
          <p className="text-text xl:text-[18px] lg:text-[16px] text-base mt-5 font-normal w-2/4]">
            Pet food subscription makes sure your pet never runs out of food.{" "}
            <br /> You can choose to receive regular shipments.
          </p>
        </div>

        <div>
          <ChooseUsCardWrapper />
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
