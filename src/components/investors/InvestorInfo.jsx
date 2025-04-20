const InvestorInfo = () => {
  return (
    <div className="container lg:mt-20 md:mt-10 mt-7">
      <h2 className="text-lg md:text-[20px] lg:text-[26px] font-bold text-main">
        Investor Info
      </h2>

      <div className="lg:mt-7 md:mt-5 mt-4">
        <p className="text-base font-normal text-main mb-2">
          <b className="mr-3">Founded:</b>
          2019
        </p>
        <p className="text-base font-normal text-main mb-2">
          <b className="mr-3">Location:</b>
          San Francisco, California, United States
        </p>
        <p className="text-base font-normal text-main mb-2">
          <b className="mr-3">Organization / Fund:</b>
          PANTASTIC
        </p>
        <p className="text-base font-normal text-main lg:pr-10 md:pr-5">
          <b className="mr-3">About:</b>
          Silicon Valley-based startup entrepreneur, venture capital and angel
          investor, board member, and advisor with a diverse and proven 25+ year
          track record across the e-commerce, software, Internet, and online
          media sectors.
        </p>
      </div>

      <div className="lg:mt-20 md:mt-10 mt-5">
        <h2 className="text-lg md:text-[20px] lg:text-[26px] font-bold text-main">
          Investment Criteria
        </h2>

        <div className="lg:mt-7 md:mt-5 mt-4">
          <p className="text-base font-normal text-main mb-2">
            <b className="mr-3">Type of Investor:</b>
            Individual Investor, Angel Investor, Investment Partner
          </p>
          <p className="text-base font-normal text-main mb-2">
            <b className="mr-3">Type of Investments:</b>
            Angel Investing, Venture Capital
          </p>
          <p className="text-base font-normal text-main mb-2">
            <b className="mr-3">Number of investments:</b>
            04
          </p>
          <p className="text-base font-normal text-main lg:pr-10 md:pr-5 mb-2">
            <b className="mr-3">Number of Portfolio Companies:</b>
            04
          </p>
          <p className="text-base font-normal text-main lg:pr-10 md:pr-5 mb-2">
            <b className="mr-3">Number of exits:</b>
            02
          </p>
          <p className="text-base font-normal text-main lg:pr-10 md:pr-5 mb-2">
            <b className="mr-3">Stage:</b>
            Seed Stage, Early Stage
          </p>
          <p className="text-base font-normal text-main lg:pr-10 md:pr-5 mb-2">
            <b className="mr-3">Sector:</b>
            E-Commerce, Software, Internet, Online Media
          </p>
          <p className="text-base font-normal text-main lg:pr-10 md:pr-5 mb-2">
            <b className="mr-3">Geography:</b>
            California, United States
          </p>
        </div>
      </div>
    </div>
  );
};

export default InvestorInfo;
