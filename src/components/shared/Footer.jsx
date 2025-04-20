import Image from "next/image";
import logo from "../../assets/home/footer-logo.png";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-secondary ">
      <div className="container px-6 py-12 mx-auto">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
          <div className="sm:col-span-2">
            <Image src={logo} alt="" width={190} />

            <p className="text-lg font-medium text-white mt-[30px]">
              Subscribe to Get The Latest Insight
            </p>

            <div className="mt-[26px]">
              <input
                type="email"
                placeholder="Email Address"
                className="outline-none  border-b border-white md:w-[345px] w-full text-base text-white py-2 bg-transparent"
              />
              <div className="flex md:items-center gap-2 mt-[15px]">
                <input type="checkbox" name="" id="" className="bg-white" />
                <p className="text-[#bbb] text-base font-normal">
                  I agree to receive emails from Stabila
                </p>
              </div>
              <button className="w-full md:w-[350px] py-[14px] bg-white text-main rounded-lg text-[20px] mt-10 font-bold ">
                Subscribe
              </button>
            </div>
          </div>

          <div>
            <p className="font-medium text-[22px] text-white ">Contact Us</p>

            <div className="flex flex-col items-start mt-5 space-y-2">
              <span className="text-base font-normal text-[#bbb]">
                hello@tradeventures.pro
              </span>
              <span className="text-base font-normal text-[#bbb]">
                +8801727887729
              </span>
              <span className="text-base font-normal text-[#bbb]">
                E14, ICT Tower, Sher-E Bangla Nagar, Agargaon , Dhaka-1207
              </span>
            </div>
          </div>

          <div>
            <p className="font-medium text-[22px] text-white ">About Us</p>

            <div className="flex flex-col items-start mt-5 space-y-2">
              <span className="text-base font-normal text-[#bbb]">Blog</span>
              <span className="text-base font-normal text-[#bbb]">
                Partners
              </span>
              <span className="text-base font-normal text-[#bbb]">
                Partners
              </span>
              <span className="text-base font-normal text-[#bbb]">
                Partners
              </span>
            </div>
          </div>
        </div>

        <hr className="my-6 border-[#bbb] md:my-8 " />

        <div className="flex items-center flex-col md:flex-row justify-between gap-y-[19px]">
          <p className="text-base  text-[#bbb] font-normal ">
            Copyright © 2023 tradeventures
          </p>

          <div className="flex -mx-2">
            <span className="mx-2">
              <FaFacebookF
                size={22}
                className=" text-white cursor-pointer duration-300 hover:text-[#bbb]"
              />
            </span>
            <span className="mx-2">
              <FaXTwitter
                size={22}
                className="cursor-pointer text-white duration-300 hover:text-[#bbb]"
              />
            </span>
            <span className="mx-2">
              <FaYoutube
                size={22}
                className="cursor-pointer text-white duration-300 hover:text-[#bbb]"
              />
            </span>
            <span className="mx-2">
              <FaInstagram
                size={22}
                className="cursor-pointer text-white duration-300 hover:text-[#bbb]"
              />
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
