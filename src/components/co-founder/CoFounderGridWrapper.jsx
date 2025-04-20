import CoFounderDetailsGrid from "./CoFounderDetailsGrid";
import CoFounderProfileGrid from "./CoFounderProfileGrid";

const CoFounderGridWrapper = () => {
  return (
    <div className="container  lg:-mt-[150px] md:-mt-[100px] -mt-[75px] mb-10 pb-5">
      <div className="z-50 relative bg-[#fff] border border-[#f1f1f1] rounded-md">
        <div className="grid grid-cols-1 md:grid-cols-9">
          <div className="md:col-span-3 lg:p-5">
            <CoFounderProfileGrid />
          </div>
          <div className="md:col-span-6 md:p-6 px-4">
            <CoFounderDetailsGrid />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoFounderGridWrapper;
