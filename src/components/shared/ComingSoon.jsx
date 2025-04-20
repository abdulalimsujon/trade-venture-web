"use client";
import { usePathname } from "next/navigation";

const ComingSoon = () => {
  const params = usePathname();

  const pageName = params.substring(1);

  return (
    <div className="h-screen w-full flex justify-center items-center flex-col">
      <h2 className="lg:text-[96px] md:text-[48px] text-[28px] font-extrabold mt-10 text-main uppercase">
        {" "}
        C<span className="text-secondary">o</span>ming{" "}
        <span>
          S<span className="text-secondary">oo</span>n 😍
        </span>
      </h2>
    </div>
  );
};

export default ComingSoon;
