import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";

export const metadata = {
  title: "Trade Venture",
  description: "This is an official Application",
};

export default function RootLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
