import Image from "next/image";
import imageOne from "../../../public/assest/comfortImage/Frame (1).png";
import imageTwo from "../../../public/assest/comfortImage/Frame.png";
import image from "../../../public/assest/comfortImage/Union.png";

const ComfortSection = () => {
  return (
    <div className="relative bg-[#189CAB] text-white py-16 px-6 lg:px-20 grid lg:grid-cols-12 items-center overflow-hidden">
      {/* Left Squiggly Decoration */}
      <div className="absolute left-0 top-[50%] transform -translate-y-1/2 z-10 pr-20">
        <Image src={imageOne} width={130} height={57} alt="Decoration" />
      </div>

      {/* Main Image with Wavy Mask */}
      <div className="lg:col-span-4 flex justify-center items-center mb-8 lg:mb-0 pl-8">
        <Image
          src={image}
          width={350}
          height={400}
          alt="Comfort illustration"
          className="object-contain w-[400px] h-[400px]"
        />
      </div>

      {/* Text Content */}
      <div className="lg:col-span-6 lg:col-start-7 mt-10 lg:mt-0 space-y-6 text-center lg:text-left z-10">
        <h2 className="text-3xl lg:text-4xl font-semibold leading-snug">
          Perfect Fit, Everyday <br />
          Comfort, Timeless Style
        </h2>

        <p className="text-white/90 max-w-xl">
          Could this be the dog with the longest tail? The Rampur Greyhound -
          shy, sensitive, alert, and faithful. This is a breed that has climbed
          its way to being top dog because of its intelligence
        </p>

        {/* Feature List */}
        <ul className="space-y-2 text-white text-sm font-medium">
          <li className="flex items-center gap-3">
            <span className="w-3 h-3 bg-white rounded-full inline-block"></span>
            Premium Fabric
          </li>
          <li className="flex items-center gap-3">
            <span className="w-3 h-3 bg-white rounded-full inline-block"></span>
            Tailored Fit
          </li>
          <li className="flex items-center gap-3">
            <span className="w-3 h-3 bg-white rounded-full inline-block"></span>
            Ethically Made
          </li>
        </ul>

        <button className="bg-white text-[#189CAB] rounded-full px-8 py-2 font-semibold mt-4 hover:bg-white/90 transition">
          Explore
        </button>
      </div>

      {/* Top Right Circle Arrow */}
      <div className="absolute top-20 right-6 z-30">
        <div className="bg-white text-[#FF6B6B] rounded-full p-2 shadow-md hover:scale-105 transition cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 15l7-7 7 7"
            />
          </svg>
        </div>
      </div>

      {/* Right Brush Decoration */}
      <div className="absolute bottom-6 right-0 hidden lg:block">
        <Image
          src={imageTwo}
          width={70}
          height={50}
          alt="Brush"
          className="rotate-12"
        />
      </div>
    </div>
  );
};

export default ComfortSection;
