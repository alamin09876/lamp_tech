import Image from "next/image";
import imageFour from "../../../public/assest/brandImage/Ellipse 336.png";
import imageThree from "../../../public/assest/brandImage/Ellipse 338.png";
import imageTwo from "../../../public/assest/brandImage/Ellipse 339.png";
import { default as image } from "../../../public/assest/brandImage/Frame.png";
import imageOne from "../../../public/assest/brandImage/Group 143725941.png";

const BrandName = () => {
  return (
    <div className="grid lg:grid-cols-12 col-span-1 gap-4 bg-[#ED5C01] py-6 justify-items-center px-4">
      {/* First left-side logo */}
      <div className="lg:col-span-1 flex justify-center items-center">
        <Image
          src={image}
          width={100}
          height={70}
          alt="Brand logo"
          className="w-[80px] h-[60px] lg:w-[100px] lg:h-[70px]"
        />
      </div>

      {/* Main Brand image */}
      <div className="lg:col-span-4 flex justify-center items-center">
        <Image
          src={imageOne}
          width={250}
          height={150}
          alt="Main brand image"
          className="w-[200px] h-[120px] lg:w-[250px] lg:h-[150px]"
        />
      </div>

      {/* Two stacked small items */}
      <div className="lg:col-span-1 flex flex-row lg:flex-col items-center gap-4 lg:gap-8">
        {[imageTwo, imageFour].map((img, index) => (
          <div
            key={index}
            className="relative group w-[60px] h-[50px] lg:w-[80px] lg:h-[70px]"
          >
            <Image
              src={img}
              alt="Brand item"
              fill
              className="relative z-10 object-contain"
            />
          </div>
        ))}
      </div>

      {/* Special offer image */}
      <div className="lg:col-span-2 flex justify-center items-center">
        <Image
          src={imageThree}
          width={170}
          height={150}
          alt="Special offer"
          className="w-[120px] h-[100px] lg:w-[170px] lg:h-[150px]"
        />
      </div>

      {/* Repeated small brand sections */}
      {[1, 2, 3, 4].map((item) => (
        <div
          key={item}
          className="lg:col-span-1 flex flex-row lg:flex-col items-center gap-4 lg:gap-8"
        >
          {[1, 2].map((subItem) => (
            <div
              key={subItem}
              className="relative group w-[60px] h-[50px] lg:w-[80px] lg:h-[70px]"
            >
              <Image
                src={imageTwo}
                alt="Brand item"
                fill
                className="relative z-10 object-contain"
              />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default BrandName;
