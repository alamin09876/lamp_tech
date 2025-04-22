import LogIn from "@/components/Login/LogIn";
import Footer from "@/components/Shared/Footer";
import Header from "@/components/Shared/Header";

const page = () => {
  return (
    <div className="bg-[#EBE3CC]">
      <Header />
      <LogIn />
      <Footer />
    </div>
  );
};

export default page;
