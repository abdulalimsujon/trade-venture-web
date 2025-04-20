import CardContainer from "@/components/common/CardContainer";
import TitleBadge from "@/components/common/TitleBadge";
import Image from "next/image";
import React from "react";
import { CgMathPlus } from "react-icons/cg";
import { FaShoppingBag } from "react-icons/fa";

const pitchIdeas = [
  {
    title: "Pitch Idea 01",
    totalInvestors: 21,
  },
  {
    title: "Pitch Idea 02",
    totalInvestors: 15,
  },
  {
    title: "Pitch Idea 03",
    totalInvestors: 30,
  },
];

const PitchIdea = ({ title, totalInvestors }) => {
  return (
    <div className="flex items-center py-4">
      <div className="flex items-center justify-center size-16 rounded-full border-2 border-gray-200">
        <FaShoppingBag className=" text-gray-700" size={26} />
      </div>
      <div className="ml-4 flex flex-col">
        <p className="text-lg font-semibold">{title}</p>
        <div className="mt-1 flex items-center space-x-2">
          <span className="px-3 py-1.5   text-sm  bg-[#CABDFF]  font-bold rounded-md">
            New
          </span>
          <div className="flex gap-1 items-center border-2 border-[#EFEFEF] rounded-lg p-0.5">
            <Image
              src="/dashboard/investor.png"
              alt="person1"
              width={24}
              height={24}
              className=" rounded-sm "
            />
            <Image
              src="/dashboard/investor.png"
              alt="person2"
              width={24}
              height={24}
              className=" rounded-sm "
            />
            <Image
              src="/dashboard/investor.png"
              alt="person3"
              width={24}
              height={24}
              className=" rounded-sm "
            />
            <span className="px-2 py-1 text-sm font-bold text-[#6F767E]">
              {totalInvestors} investors
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

const PitchUpdates = () => {
  return (
    <CardContainer>
      <div className="flex justify-between  ">
        <TitleBadge bg_color="bg-[#B5E4CA]" text="Pitch updates" />
        <div className="relative">
          <button className="flex items-center gap-2 rounded-xl bg-[#032D2C] px-5 text-base font-medium py-3 text-white">
            <CgMathPlus size={24} className="text-white" />
            Create
          </button>
        </div>
      </div>
      <p className="text-[#6F767E] mb-2">
        Need some ideas for the next product?
      </p>

      <section className="grid grid-cols-1 2xl:grid-cols-2">
        {pitchIdeas.map((idea, index) => (
          <PitchIdea
            key={index}
            title={idea.title}
            totalInvestors={idea.totalInvestors}
          />
        ))}
      </section>
    </CardContainer>
  );
};

export default PitchUpdates;
