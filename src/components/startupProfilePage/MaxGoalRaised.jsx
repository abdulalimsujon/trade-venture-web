import Link from "next/link";

const MaxGoalRaised = () => {
  return (
    <div>
      {/* max goal raised */}
      <div>
        <h2 className="section-title lg:text-[56px] font-semibold text-main">
          $387,329
        </h2>
        <p className="text-20 text-text">31% raised of $1.24M max goal</p>
        <div className="w-full h-2 bg-gray-200 rounded-md mt-[10px]">
          <div className="w-1/2 h-full bg-primary rounded-md"></div>
        </div>
      </div>

      {/* Investors */}
      <div className="mt-3">
        <h2 className="section-title text-main ">212</h2>
        <p className="text-20 lg:text-2xl text-text mb-2">Investors</p>
        <hr className="bg-[#eaeaea]" />
      </div>
      {/* left to invest */}
      <div className="mt-3">
        <h2 className="section-title text-main ">26 days</h2>
        <p className="text-20 lg:text-2xl text-text mb-2">Left to invest</p>
      </div>
      {/* booking button */}
      <div className="flex flex-col gap-4 lg:mt-9 md:mt-7 mt-5">
        <button className="common-button bg-primary text-white hover:bg-secondary">
          Invest
        </button>
        <Link href="/book-meeting">
          <button className="common-button border-primary text-primary hover:bg-primary hover:text-white w-full">
            Book a meeting
          </button>
        </Link>
      </div>
      <p className="text-base font-normal text-center text-text mt-2">
        $150 minimum investment
      </p>
    </div>
  );
};

export default MaxGoalRaised;
