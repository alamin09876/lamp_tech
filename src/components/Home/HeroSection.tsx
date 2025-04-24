import Image from "next/image";
import lowerFrame from "../../../public/assest/backgroundImage/Frame (1).png";
import upperFrame from "../../../public/assest/backgroundImage/Frame.png";
import imageOne from "../../../public/assest/backgroundImage/FrameOne.png";
import bg from "../../../public/assest/backgroundImage/Group.png";
import image from "../../../public/assest/backgroundImage/GroupOne.png";
import girl from "../../../public/assest/HeroImage/Group 143725924.png";

const HeroSection = () => {
  return (
    <div className="relative bg-[#EFE6D0] min-h-[650px] overflow-hidden">
      <div className="max-w-6xl mx-auto pt-24 pl-8 md:pl-24">
        <p className="lg:text-2xl text-sm text-blue-500 flex items-center gap-2">
          <span className="text-pink-500 ">
            <Image src={imageOne} width={70} height={40} alt="Decoration" />
          </span>{" "}
          Available in select states
        </p>
        <div className="flex">
          <div>
            <h2 className="mt-4 lg:text-7xl text-4xl md:text-6xl font-bold text-[#0A2A34] leading-tight">
              Everything <br />{" "}
              <span className="text-orange-500">YOU NEED</span>, All <br />
              in One Place
            </h2>
          </div>
          <div>
            <Image
              src={image}
              width={150}
              height={100}
              alt="Decoration"
              className="pt-10 -ml-7"
            />
          </div>
        </div>

        <button className="mt-6 bg-[#ED5C01] hover:bg-orange-600 text-white font-medium px-6 py-4 rounded-full text-xl transition mx-auto">
          Shop Now
        </button>
      </div>

      <div className="block sm:hidden mt-10">
        <div className="relative h-[400px] w-full bg-[#062D3E] overflow-hidden">
          <div className="absolute -top-10 left-4 z-10">
            <Image src={upperFrame} alt="Upper Frame" />
          </div>

          <div className="absolute top-20 left-4 scale-[0.75] origin-top">
            <Image
              src={girl}
              alt="Girl Shopping"
              className="z-10 relative  ml-28"
            />
            <div className="absolute top-[-40px] left-[70px] z-0">
              <Image src={bg} alt="Yellow Arc Background" />
            </div>
          </div>

          <div className="absolute bottom-0 left-4 z-10">
            <Image src={lowerFrame} alt="Lower Frame" />
          </div>
        </div>
      </div>

      <div className="hidden sm:block absolute top-0 right-0 h-full w-[250px] sm:w-[300px] md:w-[360px] bg-[#062D3E]">
        <div className="absolute -top-10 left-[-60px] z-10">
          <Image src={upperFrame} alt="Upper Frame" />
        </div>

        <div className="absolute top-10 bottom-[160px] left-[-60px] z-20 scale-[0.7] sm:scale-100 origin-bottom sm:origin-center">
          <Image src={girl} alt="Girl Shopping" className="z-10 relative" />
          <div className="absolute top-[-40px] left-[70px] z-0">
            <Image src={bg} alt="Yellow Arc Background" />
          </div>
        </div>

        <div className="absolute bottom-0 left-[-50px] z-10">
          <Image src={lowerFrame} alt="Lower Frame" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
