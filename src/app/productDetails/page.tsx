import ProductDetails from "@/components/ProductDetails/ProductDetails";
import Footer from "@/components/Shared/Footer";
import Header from "@/components/Shared/Header";

const page = () => {
  return (
    <div className="bg-[#EBE3CC]">
      <Header />
      <ProductDetails />
      <Footer />
    </div>
  );
};

export default page;
