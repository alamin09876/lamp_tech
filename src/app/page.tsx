import BrandName from "@/components/Home/BrandName";
import BrandSwiper from "@/components/Home/BrandSwiper";
import ComfortSection from "@/components/Home/ComfortSection";
import HeroSection from "@/components/Home/HeroSection";
import ProductCards from "@/components/Home/ProductCards";
import ReviewSwiper from "@/components/Home/ReviewSwiper";
import SubscribeSection from "@/components/Home/SubscribeSection";
import Footer from "@/components/Shared/Footer";
import Header from "@/components/Shared/Header";

export default function Home() {
  return (
    <div className="bg-[#EBE3CC]">
      <Header />
      <HeroSection />
      <BrandName />
      <BrandSwiper />
      <ProductCards />
      <ComfortSection />
      <ReviewSwiper />
      <SubscribeSection />
      <Footer />
    </div>
  );
}
