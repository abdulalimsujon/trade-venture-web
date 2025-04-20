import ContactDetails from "@/components/contact/ContactDetails";
import Brands from "@/components/findPartner/Brands";
import NewsLetter from "@/components/findPartner/NewsLetter";
import AccordionContainer from "@/components/home/AccordionContainer";
import { findPartnerAccordion } from "@/fakeData/fakeAccordionData";

const ContactPage = () => {
  return (
    <div>
      <ContactDetails />
      <NewsLetter />
      <Brands />
      <div className="bg-[#f6f6f6]">
        <div className=" py-[30px] lg:py-[50px] md:py-[35px] container">
          <h2 className="lg:text-[35px] md:text-[28px] text-[22px] md:font-medium text-main font-bold text-center">
            Frequently Asked <span className="text-[#22CD5A]">Questions </span>
          </h2>

          <AccordionContainer faqData={findPartnerAccordion} />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
