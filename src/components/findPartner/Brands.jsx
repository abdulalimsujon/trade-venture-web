import { brandImage } from "@/fakeData/brandImage";
import Image from "next/image";

const Brands = ({ title }) => {
  return (
    <div className="bg-[#e6eaea] py-10 md:py-20">
      <div className="container">
        <h2 className="text-center section-title text-main capitalize mb-5">
          {title}
        </h2>
        <div className="flex items-center justify-center  lg:gap-[100px] md:gap-[70px] gap-[50px] flex-wrap">
          {brandImage.map((item, index) => (
            <Image
              key={index}
              src={item}
              alt="Brand Image"
              width={130}
              height={130}
              style={{
                maxWidth: "100%",
                height: "auto",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Brands;
