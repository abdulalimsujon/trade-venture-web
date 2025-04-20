import Image from "next/image";
import about from "../../assets/home/about.png";
import Link from "next/link";
const About = () => {
  return (
    <div className="py-[40px] md:py-[50px] lg:py-[95px] xl:py-[110px] container">
      <div className="flex flex-col lg:flex-row items-center w-full lg:gap-[70px] gap-[30px]">
        <div className="xl:w-[588px] lg:w-[500px]">
          <p className="text-[22px] font-normal text-text">About Us</p>
          <h1 className="xl:text-[35px] lg:text-[28px] font-bold text-main mt-4 mb-[18px]">
            Introducation To Best Investor Sratrup Company
          </h1>
          <p className="text-subText text-base  font-normal mb-[28px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </p>
          <Link href="/about">
            <button className="outline-none py-2 xl:px-[25px] px-[15px] md:px-[20px]  rounded-[8px] lg:text-lg text-base font-bold text-main bg-primary border border-primary duration-300 hover:bg-transparent hover:text-primary hover:border-primary">
              Read More
            </button>
          </Link>
        </div>

        <div className="">
          <Image src={about} alt="" width={482} className="object-cover " />
        </div>
      </div>
    </div>
  );
};

export default About;
