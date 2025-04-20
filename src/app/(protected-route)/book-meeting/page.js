import BookMeetingBanner from "@/components/bookMeeting/BookMeetingBanner";
import { FaLongArrowAltRight } from "react-icons/fa";

const BookMeetingPage = () => {
  return (
    <div>
      <BookMeetingBanner title="Investor" />

      <div className="flex items-center justify-center my-7 container">
        <div className="px-6 py-4 border lg:w-1/2 w-full border-[#e8e8e8]">
          <h2 className="lg:text-[24px] text-[20px] font-bold text-main">
            Book your appointment now
          </h2>
          <p className="text-base font-normal text-main">
            So our team can reach out to you on time
          </p>

          <form className="mt-7">
            <div className="mb-6">
              <label
                htmlFor="agenda"
                className="text-main text-lg font-semibold capitalize "
              >
                Agenda
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-[#e9e9e9] outline-none mt-2"
                placeholder="Investment"
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="name"
                className="text-main text-lg font-semibold capitalize "
              >
                Your Name
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-[#e9e9e9] outline-none mt-2"
                placeholder="eg: Jhon Doe"
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="date"
                className="text-main text-lg font-semibold capitalize "
              >
                Available Date
              </label>
              <select
                name=""
                id="date"
                className="w-full px-4 py-2 border border-[#e9e9e9] outline-none mt-2"
              >
                <option value="">Select</option>
                <option value="">10 Jan, 2023</option>
                <option value="">10 Feb, 2023</option>
                <option value="">10 Mar, 2023</option>
                <option value="">10 Apr, 2023</option>
              </select>
            </div>

            <div className="mb-6">
              <label
                htmlFor="date"
                className="text-main text-lg font-semibold capitalize "
              >
                Available Time
              </label>
              <select
                name=""
                id="date"
                className="w-full px-4 py-2 border border-[#e9e9e9] outline-none mt-2"
              >
                <option value="">Select</option>
                <option value="">10:00 AM</option>
                <option value="">10:00 AM</option>
                <option value="">10:00 AM</option>
                <option value="">10:00 AM</option>
              </select>
            </div>

            <div className="mb-6">
              <label
                htmlFor="date"
                className="text-main text-lg font-semibold capitalize "
              >
                Share Your Message
              </label>

              <textarea
                name=""
                id=""
                rows="5"
                placeholder="Message..."
                className="w-full px-4 py-2 border border-[#e9e9e9] outline-none mt-2 resize-none"
              ></textarea>
            </div>

            <div>
              <button className="flex items-center gap-3 px-7 py-4 bg-primary hover:bg-secondary text-white text-base font-semibold rounded-sm duration-300 hover:rounded-[16px]">
                Book Now <FaLongArrowAltRight size={20} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookMeetingPage;
