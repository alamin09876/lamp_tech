import Image from "next/image";
import image from "../../../../public/assest/HeroImage/Group 143725924.png";

const HeroSection = () => {
  return (
    <div className=" grid lg:grid-cols-12 col-span-1  gap-4">
      <div className="lg:col-span-7  min-h-[100px] rounded-lg bg-orange-500 shadow"></div>
      <div
        className="lg:col-span-5  absolute right-0 top-0 w-2/5 bg-[#062D3E] z-0"
        style={{
          backgroundImage: "url('/assest/backgroundImage/Frame (1).png')",
          backgroundSize: "cover",
        }}
      >
        <Image
          src={image}
          width={400}
          height={300}
          alt="Picture of the author"
        />
      </div>
    </div>
  );
};

export default HeroSection;
