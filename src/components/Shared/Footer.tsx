import Image from "next/image";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import image from "../../../public/assest/HeroImage/Group.png";

const Footer = () => {
  return (
    <div className="grid lg:grid-cols-12 col-span-1 gap-4 bg-[#062D3E] px-4 py-8 lg:py-0">
      {/* Logo Section */}
      <div className="lg:col-span-3 flex justify-center items-center max-lg:mb-8">
        <p className="text-white text-lg font-medium">Shop-First</p>
      </div>

      {/* Image Section */}
      <div className="lg:col-span-3 flex justify-center max-lg:mb-8">
        <Image
          src={image}
          alt="Profile"
          width={250}
          height={200}
          className="rounded-md object-contain w-[200px] h-[150px] lg:w-[250px] lg:h-[200px]"
        />
      </div>

      {/* Navigation & Social Section */}
      <div className="lg:col-span-6 mt-20 max-lg:mt-0">
        {/* Navigation Links */}
        <div className="flex gap-6 max-lg:gap-4 max-lg:flex-wrap max-lg:justify-center">
          <p className="text-white text-sm hover:text-gray-300 cursor-pointer">
            About
          </p>
          <p className="text-white text-sm hover:text-gray-300 cursor-pointer">
            Project
          </p>
          <p className="text-white text-sm hover:text-gray-300 cursor-pointer">
            Service
          </p>
          <p className="text-white text-sm hover:text-gray-300 cursor-pointer">
            Client
          </p>
          <p className="text-white text-sm hover:text-gray-300 cursor-pointer">
            Team
          </p>
          <p className="text-white text-sm hover:text-gray-300 cursor-pointer">
            Blog
          </p>
          <p className="text-white text-sm hover:text-gray-300 cursor-pointer">
            Contact
          </p>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-6 mt-6 max-lg:flex-col max-lg:mt-8 max-lg:gap-4">
          <p className="text-white text-sm max-lg:hidden">Flow</p>
          <div className="flex gap-4 max-lg:justify-center">
            <div className="border border-white p-2 rounded-full hover:bg-white transition-colors">
              <FaFacebookF className="text-white hover:text-[#062D3E] text-sm" />
            </div>
            <div className="border border-white p-2 rounded-full hover:bg-white transition-colors">
              <FaTwitter className="text-white hover:text-[#062D3E] text-sm" />
            </div>
            <div className="border border-white p-2 rounded-full hover:bg-white transition-colors">
              <FaSquareInstagram className="text-white hover:text-[#062D3E] text-sm" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
