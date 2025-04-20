import RadioGroup from "./RadioGroup";

const ContactForm = () => {
  return (
    <div>
      <div className="flex items-center lg:flex-row flex-col lg:gap-10 md:gap-7 gap-5">
        <div className="lg:w-1/2 w-full">
          <label
            htmlFor="firstName"
            className="text-[#1c1c1c] text-sm font-medium"
          >
            First Name
          </label>
          <input
            type="text"
            placeholder="Ex: Jhon"
            className="outline-none bg-transparent border-b border-[#8d8d8d] pb-[10px] text-sm font-normal text-[#8d8d8d] w-full mt-2"
          />
        </div>
        <div className="lg:w-1/2 w-full">
          <label
            htmlFor="lastName"
            className="text-[#1c1c1c] text-sm font-medium"
          >
            Last Name
          </label>
          <input
            type="text"
            placeholder="Ex: Doe"
            className="outline-none bg-transparent border-b border-[#8d8d8d] pb-[10px] text-sm font-normal text-[#8d8d8d] w-full mt-2"
          />
        </div>
      </div>

      <div className="flex items-center lg:flex-row flex-col lg:gap-10 md:gap-7 gap-5 lg:mt-10 md:mt-7 mt-5">
        <div className="lg:w-1/2 w-full">
          <label
            htmlFor="firstName"
            className="text-[#1c1c1c] text-sm font-medium"
          >
            Email
          </label>
          <input
            type="text"
            placeholder="Ex: Jhon@exp.com"
            className="outline-none bg-transparent border-b border-[#8d8d8d] pb-[10px] text-sm font-normal text-[#8d8d8d] w-full mt-2"
          />
        </div>
        <div className="lg:w-1/2 w-full">
          <label
            htmlFor="lastName"
            className="text-[#1c1c1c] text-sm font-medium"
          >
            Phone Number
          </label>
          <input
            type="text"
            placeholder="Ex: +10214*****"
            className="outline-none bg-transparent border-b border-[#8d8d8d] pb-[10px] text-sm font-normal text-[#8d8d8d] w-full mt-2"
          />
        </div>
      </div>

      <div className="lg:mt-10 md:mt-7 mt-5">
        <h2 className="text-sm text-[#1c1c1c] font-medium">Select Subject?</h2>
        <div>
          <RadioGroup />
        </div>
      </div>
      <div className="lg:mt-10 md:mt-7 mt-5 w-full">
        <label
          htmlFor="firstName"
          className="text-[#1c1c1c] text-sm font-medium"
        >
          Message
        </label>
        <input
          type="text"
          placeholder="Type your message"
          className="outline-none bg-transparent border-b border-[#8d8d8d] pb-[10px] text-sm font-normal text-[#8d8d8d] w-full mt-2"
        />
      </div>
      <div className="flex justify-end lg:mt-10 md:mt-7 mt-5">
        <button className="w-full px-6 py-4 text-sm font-medium tracking-wider text-white transition-colors duration-300 transform md:w-auto md:mx-4 focus:outline-none bg-[#22CD5A] rounded-lg hover:bg-[#09ac3f] focus:ring focus:ring-[#22CD5A] focus:ring-opacity-80">
          Send Message
        </button>
      </div>
    </div>
  );
};

export default ContactForm;
