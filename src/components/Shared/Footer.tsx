import Image from "next/image";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import image from "../../../public/assest/HeroImage/Group.png";

const Footer = () => {
  return (
    <div className=" grid lg:grid-cols-12 col-span-1  gap-4 bg-[#062D3E]">
      <div className="lg:col-span-3 flex justify-center items-center">
        <p>Shop-First</p>
      </div>
      <div className="lg:col-span-3 ">
        <Image
          src={image}
          alt="Profile"
          width={250}
          height={200}
          className="rounded-md object-contain"
        />
      </div>
      <div className="lg:col-span-6 mt-20">
        <div className="flex gap-6">
          <p>About</p>
          <p>Project</p>
          <p>Service</p>
          <p>Client</p>
          <p>Team</p>
          <p>Blog</p>
          <p>Contact</p>
        </div>

        <div className="flex items-center gap-6 mt-6">
          <p>Flow</p>
          <div className="border border-white px-2 py-2 rounded-4xl hover:bg-white">
            <FaFacebookF className="text-white hover:text-[#062D3E]" />
          </div>
          <div className="border border-white px-2 py-2 rounded-4xl hover:bg-white">
            <FaTwitter className="text-white hover:text-[#062D3E]" />
          </div>
          <div className="border border-white px-2 py-2 rounded-4xl hover:bg-white">
            <FaSquareInstagram className="text-white hover:text-[#062D3E]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
