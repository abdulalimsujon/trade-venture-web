import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

const WayToInvest = () => {
  // ways to invest fake data for fetching
  const fakeInvestData = [
    {
      id: 1,
      title: "Personal investment account",
      description:
        "Open a standard account and build a portfolio account of a alternative investment",
      linkText: "Open an Account",
    },
    {
      id: 2,
      title: "Success your mission",
      description:
        "Open a standard account and build a portfolio account of a alternative investment",
      linkText: "Request for fund",
    },
    {
      id: 3,
      title: "Personal investment account",
      description:
        "Open a standard account and build a portfolio account of a alternative investment",
      linkText: "Open an Account",
    },
  ];
  return (
    <div className="section-padding bg-[#f2f2f2]">
      <div className="container">
        <h2 className="section-title text-center text-main mb-10 md:mb-14">
          Ways To Invest
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {fakeInvestData?.map((item) => (
            <div
              key={item?.id}
              className="bg-white rounded-lg pt-[30px] pb-10 px-7"
            >
              <h2 className="lg:text-[30px] md:text-[22px] text-[18px] text-main capitalize  font-semibold mb-5">
                {item?.title}
              </h2>
              <p className="text-base text-text">{item.description}</p>

              <Link
                className="flex items-center gap-2 duration-300 hover:gap-4 hover:text-secondary text-main text-base font-semibold mt-6"
                href="#"
              >
                {item?.linkText}
                <FaArrowRightLong size={18} color="#1c1c1c" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WayToInvest;
