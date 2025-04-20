import { MdOutlineClose } from "react-icons/md";
import { AiOutlinePlus } from "react-icons/ai";
import { Collapse } from "react-collapse";

const Accordion = ({ open, toggle, title, desc }) => {
  return (
    <div className="pt-[10px]">
      <div
        className="bg-white py-[15px] px-4 flex justify-between items-center cursor-pointer"
        onClick={toggle}
      >
        <p className="text-[16px] font-medium text-text pr-5">{title}</p>
        <div className="text-[18px]">
          {open ? <MdOutlineClose /> : <AiOutlinePlus />}
        </div>
      </div>
      <Collapse isOpened={open}>
        <div className="bg-white smooth px-[24px] pt-4  pb-7 text-text font-normal text-[14px]">
          {desc}
        </div>
      </Collapse>
    </div>
  );
};

export default Accordion;
