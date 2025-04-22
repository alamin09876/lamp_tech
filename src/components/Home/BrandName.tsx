import Image from "next/image";
import imageFour from "../../../public/assest/brandImage/Ellipse 336.png";
import imageThree from "../../../public/assest/brandImage/Ellipse 338.png";
import imageTwo from "../../../public/assest/brandImage/Ellipse 339.png";
import image from "../../../public/assest/brandImage/Frame.png";
import imageOne from "../../../public/assest/brandImage/Group 143725941.png";

const BrandName = () => {
  return (
    <div className="grid lg:grid-cols-12 col-span-1 gap-4 bg-[#ED5C01] py-6 justify-items-center px-4">
      {/* First Image */}
      <div className="lg:col-span-1 flex justify-center items-center">
        <Image
          src={image}
          width={500}
          height={500}
          alt="Brand logo"
          className="w-[80px] h-[60px] lg:w-[100px] lg:h-[70px]"
        />
      </div>

      {/* Second Image */}
      <div className="lg:col-span-4 flex justify-center items-center">
        <Image
          src={imageOne}
          width={500}
          height={500}
          alt="Main brand image"
          className="w-[200px] h-[120px] lg:w-[250px] lg:h-[150px]"
        />
      </div>

      {/* Stacked Images 1 - Horizontal on mobile */}
      <div className="lg:col-span-1 flex flex-row lg:flex-col items-center gap-4 lg:gap-8">
        <Image
          src={imageTwo}
          width={500}
          height={500}
          alt="Brand item"
          className="w-[60px] h-[50px] lg:w-[80px] lg:h-[70px]"
        />
        <Image
          src={imageFour}
          width={500}
          height={500}
          alt="Brand item"
          className="w-[60px] h-[50px] lg:w-[80px] lg:h-[70px]"
        />
      </div>

      {/* Third Image */}
      <div className="lg:col-span-2 flex justify-center items-center">
        <Image
          src={imageThree}
          width={500}
          height={500}
          alt="Special offer"
          className="w-[120px] h-[100px] lg:w-[170px] lg:h-[150px]"
        />
      </div>

      {/* Repeated Image Pairs - Horizontal on mobile */}
      {[1, 2, 3, 4].map((item) => (
        <div
          key={item}
          className="lg:col-span-1 flex flex-row lg:flex-col items-center gap-4 lg:gap-8"
        >
          <Image
            src={imageTwo}
            width={500}
            height={500}
            alt="Brand item"
            className="w-[60px] h-[50px] lg:w-[80px] lg:h-[70px]"
          />
          <Image
            src={imageTwo}
            width={500}
            height={500}
            alt="Brand item"
            className="w-[60px] h-[50px] lg:w-[80px] lg:h-[70px]"
          />
        </div>
      ))}
    </div>
  );
};

export default BrandName;
