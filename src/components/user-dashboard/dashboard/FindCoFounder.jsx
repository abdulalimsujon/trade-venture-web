import CardContainer from "@/components/common/CardContainer";
import TitleBadge from "@/components/common/TitleBadge";
import Image from "next/image";
import React from "react";

const FindCoFounder = () => {
  return (
    <CardContainer className="h-full">
      <TitleBadge bg_color="bg-[#FFBC99]" text="Find Co-founder" />
      <section className="flex items-center flex-wrap gap-2  my-5">
        <div>
          <Image
            src="/dashboard/co-founder.png"
            alt="User Avatar"
            width={60}
            height={60}
            className="rounded-full"
          />
          <p className="mt-2">Gladyce</p>
        </div>
        <div>
          <Image
            src="/dashboard/co-founder.png"
            alt="User Avatar"
            width={60}
            height={60}
            className="rounded-full"
          />
          <p className="mt-2">Gladyce</p>
        </div>
        <div>
          <Image
            src="/dashboard/co-founder.png"
            alt="User Avatar"
            width={60}
            height={60}
            className="rounded-full"
          />
          <p className="mt-2">Gladyce</p>
        </div>
        <div>
          <Image
            src="/dashboard/co-founder.png"
            alt="User Avatar"
            width={60}
            height={60}
            className="rounded-full"
          />
          <p className="mt-2">Gladyce</p>
        </div>
        <div>
          <Image
            src="/dashboard/co-founder.png"
            alt="User Avatar"
            width={60}
            height={60}
            className="rounded-full"
          />
          <p className="mt-2">Gladyce</p>
        </div>
      </section>

      <button className="border-2 text-base font-bold rounded-xl border-[#EFEFEF] w-full text-center py-3 ">
        View all
      </button>
    </CardContainer>
  );
};

export default FindCoFounder;
