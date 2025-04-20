import Image from "next/image";
import review1 from "../../assets/home/review1.png";
import review2 from "../../assets/home/review2.png";
import { FaQuoteLeft } from "react-icons/fa";

const VoiceOfSuccess = () => {
  return (
    <div className="py-[40px] md:py-[50px] lg:py-[95px] xl:py-[110px] ">
      <div className="container">
        <div className="flex flex-col justify-center text-center">
          <h2 className="xl:text-[50px] lg:text-[42px] md:text-[28px] text-[22px] font-bold text-text">
            Voices of Success
          </h2>
          <p className="text-text xl:text-[18px] lg:text-[16px] text-base mt-5 font-normal w-2/4]">
            Testimonials from Thriving Entrepreneurs and Visionary Investors
          </p>
        </div>

        <div className="xl:mt-[80px] lg:mt-[60pxp] md:mt-[40px] mt-[35px] flex items-center lg:flex-row flex-col gap-[30px] justify-center">
          <div className="lg:w-1/2 w-full">
            <div className="bg-[#f6f6f6] rounded-md pt-[30px] pb-[35px] px-[20px] relative">
              <span className="absolute top-[30px] left-[30px]">
                <FaQuoteLeft size={48} className="text-[#bbb]" />
              </span>
              <div className="flex items-center flex-col">
                <Image src={review1} alt="" width={70} />
                <h2 className="text-[22px] font-medium text-text mt-5">
                  MD. Samiul Islam
                </h2>
                <p className="text-[18px] text-[#777] font-normal">
                  Entrepreneur
                </p>

                <p className="text-lg font-normal text-[#777] mt-6 text-center">
                  {`"Working with this platform has been an absolute game-changer
                  for my startup. The insightful guidance and connections I
                  received were invaluable in navigating the competitive
                  business landscape. Highly recommended!"`}
                </p>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 w-full">
            <div className="bg-[#f6f6f6] rounded-md pt-[30px] pb-[35px] px-[20px] relative">
              <span className="absolute top-[30px] left-[30px]">
                <FaQuoteLeft size={48} className="text-[#bbb]" />
              </span>
              <div className="flex items-center flex-col">
                <Image src={review2} alt="" width={70} />
                <h2 className="text-[22px] font-medium text-text mt-5">
                  MD. Samiul Islam
                </h2>
                <p className="text-[18px] text-[#777] font-normal">
                  Entrepreneur
                </p>

                <p className="text-lg font-normal text-[#777] mt-6 text-center">
                  {`"Working with this platform has been an absolute game-changer
                  for my startup. The insightful guidance and connections I
                  received were invaluable in navigating the competitive
                  business landscape. Highly recommended!"`}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VoiceOfSuccess;
