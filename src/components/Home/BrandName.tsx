import Image from "next/image";
import imageFour from "../../../public/assest/brandImage/Ellipse 336.png";
import imageThree from "../../../public/assest/brandImage/Ellipse 338.png";
import imageTwo from "../../../public/assest/brandImage/Ellipse 339.png";
import image from "../../../public/assest/brandImage/Frame.png";
import imageOne from "../../../public/assest/brandImage/Group 143725941.png";

const BrandName = () => {
  return (
    <div className=" grid lg:grid-cols-12 col-span-1  gap-4 bg-[#ED5C01] py-6">
      <div className="lg:col-span-1">
        <Image
          src={image}
          width={500}
          height={500}
          alt="Picture of the author"
          className="w-[100px] h-[70px] top-0"
        />
      </div>
      <div className="lg:col-span-4 flex justify-center items-center">
        <Image
          src={imageOne}
          width={500}
          height={500}
          alt="Picture of the author"
          className="w-[250px] h-[150px]"
        />
      </div>
      <div className="lg:col-span-1  ">
        <Image
          src={imageTwo}
          width={500}
          height={500}
          alt="Picture of the author"
          className="w-[80px] h-[70px] mb-8"
        />
        <Image
          src={imageFour}
          width={500}
          height={500}
          alt="Picture of the author"
          className="w-[80px] h-[70px]"
        />
      </div>
      <div className="lg:col-span-2  flex justify-center items-center">
        <Image
          src={imageThree}
          width={500}
          height={500}
          alt="Picture of the author"
          className="w-[170px] h-[150px]"
        />
      </div>
      <div className="lg:col-span-1  ">
        <Image
          src={imageTwo}
          width={500}
          height={500}
          alt="Picture of the author"
          className="w-[80px] h-[70px] mb-8"
        />
        <Image
          src={imageTwo}
          width={500}
          height={500}
          alt="Picture of the author"
          className="w-[80px] h-[70px]"
        />
      </div>
      <div className="lg:col-span-1  ">
        <Image
          src={imageTwo}
          width={500}
          height={500}
          alt="Picture of the author"
          className="w-[80px] h-[70px] mb-8"
        />
        <Image
          src={imageTwo}
          width={500}
          height={500}
          alt="Picture of the author"
          className="w-[80px] h-[70px]"
        />
      </div>
      <div className="lg:col-span-1  ">
        <Image
          src={imageTwo}
          width={500}
          height={500}
          alt="Picture of the author"
          className="w-[80px] h-[70px] mb-8"
        />
        <Image
          src={imageTwo}
          width={500}
          height={500}
          alt="Picture of the author"
          className="w-[80px] h-[70px]"
        />
      </div>
      <div className="lg:col-span-1  ">
        <Image
          src={imageTwo}
          width={500}
          height={500}
          alt="Picture of the author"
          className="w-[80px] h-[70px] mb-8"
        />
        <Image
          src={imageTwo}
          width={500}
          height={500}
          alt="Picture of the author"
          className="w-[80px] h-[70px]"
        />
      </div>
    </div>
  );
};

export default BrandName;
