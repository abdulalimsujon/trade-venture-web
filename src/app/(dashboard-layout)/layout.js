import DashboardSidebar from "@/components/shared/DashboardSidebar";
import DashboardTopNavbar from "@/components/shared/DashboardTopNavbar";

export const metadata = {
  title: "Trade Venture",
  description: "This is an official Application",
};

export default function DashboardLayout({ children }) {
  return (
    <>
      <div className="flex gap-5">
        <DashboardSidebar />
        <div className="lg:ml-[340px] w-full bg-[#f4f4f4]">
          <>
          <DashboardTopNavbar/>
           {children}
          </>
          
          </div>
      </div>
    </>
  );
}
