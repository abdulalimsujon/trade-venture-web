import SectionTitle from "../shared/sectionTitle/SectionTitle";
import styles from "./ContactDetails.module.css";
import { PiPhoneCallBold } from "react-icons/pi";
import { BsFillEnvelopeFill } from "react-icons/bs";
import { MdLocationPin } from "react-icons/md";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import Link from "next/link";
import RadioGroup from "./RadioGroup";
import ContactForm from "./ContactForm";

const ContactDetails = () => {
  return (
    <div className="md:pt-[34px] pt-[24px] container mb-5">
      <SectionTitle title={"Let’s talk with us"} />
      <div className="grid grid-cols-1 lg:grid-cols-8 mt-[31px] lg:shadow-xl hover:shadow-none duration-300">
        <div className="lg:col-span-3  bg-[#22CD5A] rounded-md py-10 px-10 relative">
          <div className={styles.circle}></div>
          <div className=" lg:h-full  h-[350px] flex justify-between flex-col">
            <div className=" ">
              <h2 className="text-white  lg:text-[28px] text-[22px] font-semibold">
                Contact Information
              </h2>
              <p className="lg:text-lg text-base text-white  font-normal mt-[6px]">
                Say something to start a live chat!
              </p>
            </div>
            <div className=" flex flex-col lg:gap-[50px] gap-[25px]">
              <div className="flex gap-[25px] items-center">
                <PiPhoneCallBold color="#fff" size={30} />
                <span className="text-base font-400 text-white ">
                  +880 1727887729
                </span>
              </div>
              <div className="flex gap-[25px] items-center">
                <BsFillEnvelopeFill color="#fff" size={30} />
                <span className="text-base font-400 text-white ">
                  hello@tradeventures.pro
                </span>
              </div>
              <div className="flex gap-[25px] items-center">
                <MdLocationPin color="#fff" size={30} />
                <span className="text-base font-400 text-white ">
                  E14, ICT Tower, Sher-E Bangla Nagar, Agargaon , Dhaka-1207
                </span>
              </div>
            </div>
            <div className="flex items-center gap-[10px]">
              <Link
                href="#"
                className="w-[40px] h-[40px] bg-transparent rounded-full border border-white flex items-center justify-center duration-300 hover:bg-white text-white hover:text-[#032D2C]    "
              >
                <FaFacebookF size={20} className="" />
              </Link>
              <Link
                href="#"
                className="w-[40px] h-[40px] bg-transparent rounded-full border border-white flex items-center justify-center duration-300 hover:bg-white text-white hover:text-[#032D2C]    "
              >
                <FaYoutube size={20} className="" />
              </Link>
              <Link
                href="#"
                className="w-[40px] h-[40px] bg-transparent rounded-full border border-white flex items-center justify-center duration-300 hover:bg-white text-white hover:text-[#032D2C]    "
              >
                <FaInstagram size={20} className="" />
              </Link>
              <Link
                href="#"
                className="w-[40px] h-[40px] bg-transparent rounded-full border border-white flex items-center justify-center duration-300 hover:bg-white text-white hover:text-[#032D2C]    "
              >
                <FaLinkedinIn size={20} className="" />
              </Link>
              <Link
                href="#"
                className="w-[40px] h-[40px] bg-transparent rounded-full border border-white flex items-center justify-center duration-300 hover:bg-white text-white hover:text-[#032D2C]    "
              >
                <FaTwitter size={20} className="" />
              </Link>
            </div>
          </div>
        </div>
        <div className="lg:col-span-5 rounded-md bg-white lg:px-[50px] lg:pt-[60px] lg:pb-[153px] pb-[50px] px-5 mt-10  lg:mt-0">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;
