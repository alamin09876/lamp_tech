import { ArrowRight } from "lucide-react";
import Image from "next/image";
import imageOne from "../../../public/assest/reviewImage/Group.png";
import image from "../../../public/assest/reviewImage/review.png";

const SubscribeSection = () => {
  return (
    <div className="flex flex-col md:flex-row w-full h-full">
      <div className="bg-[#fcb900] md:w-1/2 flex justify-center items-center ">
        <Image
          src={image}
          alt="Profile"
          width={350}
          height={250}
          className="rounded-md object-contain"
        />
      </div>

      <div className="relative bg-[#e85d04] md:w-1/2 p-8 flex flex-col justify-center space-y-6">
        <h2 className="text-2xl md:text-4xl font-semibold text-[#062D3E] leading-snug">
          Subscribe & Get Fashion <br />
          Updatenews
        </h2>

        <div className="relative w-full max-w-md">
          <input
            type="email"
            placeholder="Mail"
            className="w-full border-b border-white bg-transparent placeholder-white text-white py-2 pr-10 focus:outline-none"
          />
          <ArrowRight className="absolute right-0 top-2 text-white cursor-pointer" />
        </div>

        <div className="absolute right-4 bottom-4">
          <Image
            src={imageOne}
            alt="Decorative"
            width={100}
            height={80}
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default SubscribeSection;
