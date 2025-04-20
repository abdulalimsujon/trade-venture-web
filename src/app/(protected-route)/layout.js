import Footer from "@/components/shared/Footer";
import ProtectedNavbar from "@/components/shared/ProtectedNavbar";

export const metadata = {
  title: "Trade Venture",
  description: "This is an official Application",
};

export default function ProtectedLayout({ children }) {
  return (
    <>
      <ProtectedNavbar />
      {children}
      <Footer />
    </>
  );
}
