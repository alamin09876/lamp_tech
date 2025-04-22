import SignUp from "@/components/Authentication/SignUp";
import Footer from "@/components/Shared/Footer";
import Header from "@/components/Shared/Header";

const page = () => {
  return (
    <div className="bg-[#EBE3CC]">
      <Header />
      <SignUp />
      <Footer />
    </div>
  );
};

export default page;
