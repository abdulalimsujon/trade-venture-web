"use client";
import { useState } from "react";
import Accordion from "./Accordion";

const AccordionContainer = ({ faqData }) => {
  const [open, setOpen] = useState(0);
  const toggle = (index) => {
    if (open === index) {
      return setOpen(null);
    }
    setOpen(index);
  };

  return (
    <div className="w-full  lg:mt-10 mt-5">
      {faqData
        ? faqData?.map((data, index) => (
            <Accordion
              key={index}
              open={index === open}
              title={data.title}
              desc={data.desc}
              toggle={() => toggle(index)}
            />
          ))
        : "nothing found"}
    </div>
  );
};

export default AccordionContainer;
