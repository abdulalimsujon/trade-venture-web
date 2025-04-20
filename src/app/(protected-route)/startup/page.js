import ComingSoon from "@/components/shared/ComingSoon";
import PageBanner from "@/components/startup/StartupBanner";
import StartupCard from "@/components/startup/StartupCard";
import { startupBlogData } from "@/fakeData/startupPageData";

const StartupPage = () => {
  return (
    <div>
      <PageBanner title={"Choose your startup"} />
      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-20">
        {startupBlogData?.map((item) => (
          <StartupCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default StartupPage;
