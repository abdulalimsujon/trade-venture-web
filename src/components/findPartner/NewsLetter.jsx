const NewsLetter = () => {
  return (
    <div className="bg-[#e9faee] pt-[28px] pb-[38px] lg:pt-[58px] lg:pb-[68px] md:pt-[38px] md:pb[48px]">
      <div className="container">
        <div className="flex items-center md:justify-center flex-col md:gap-[25px] gap-[20px]  lg:gap-[30px] md:text-center">
          <p className="text-base md:text-lg lg:text-xl font-medium text-main">
            We will let you know when we are launching{" "}
          </p>

          <div className="flex flex-col justify-center mx-auto mt-3 space-y-3 md:space-y-0 md:flex-row">
            <input
              id="email"
              type="text"
              className="px-4 py-2 text-[#1c1c1c] bg-transparent border rounded-md    focus:border-[#e4e4e4]  focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-[#e4e4e4] lg:w-[488px]"
              placeholder="Enter Email Address"
            />

            <button className="w-full px-6 py-2.5 text-sm font-medium tracking-wider text-white transition-colors duration-300 transform md:w-auto md:mx-4 focus:outline-none bg-[#22CD5A] rounded-lg hover:bg-[#09ac3f] focus:ring focus:ring-[#22CD5A] focus:ring-opacity-80">
              Get Notified
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
