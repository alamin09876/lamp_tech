"use client";

import Image from "next/image";
import { FaRegHeart } from "react-icons/fa";
import image from "../../../public/assest/cardImage/image_2__2_-removebg-preview 1.png";
import imageOne from "../../../public/assest/cardImage/image_3-removebg-preview (1) 1.png";
import imageTwo from "../../../public/assest/cardImage/image_4-removebg-preview (1) 1.png";

const cardData = [
  { id: 1, image: imageOne },
  { id: 2, image: image },
  { id: 3, image: imageTwo },
  { id: 4, image: imageOne },
  { id: 5, image: image },
  { id: 6, image: imageTwo },
];

const ProductCards = () => {
  return (
    <div className="pb-10">
      <div className="pl-20 py-10">
        <h2 className="text-2xl">Our Best Products</h2>
      </div>
      <div className="mx-20 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {cardData.map((card) => (
          <div key={card.id} className="rounded-lg bg-white shadow-lg p-4">
            <div className="bg-[#FFF8F6] relative">
              <Image
                src={card.image}
                width={200}
                height={200}
                alt="Short Sleeve Shirt"
                className="mx-auto object-cover w-[200px] h-[200px]"
              />
              <button className="absolute top-2 right-2 p-2 hover:text-red-500 border bg-white rounded-4xl">
                <FaRegHeart />
              </button>
            </div>
            <div className="mt-4 space-y-3">
              <h3 className="font-semibold text-lg text-black">
                Short Sleeve Shirt
              </h3>
              <div className="flex justify-between">
                <div className="flex items-center gap-1 text-yellow-400">
                  ★★★★
                </div>
                <p className="text-gray-500 text-xs text-center mt-1">
                  (2k Reviews)
                </p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-black font-bold">৳ 275</span>
                <span className="text-gray-400 line-through text-sm">
                  ৳ 475
                </span>
              </div>
              <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors font-medium text-sm flex items-center justify-center gap-2">
                <span>Add To Cart</span>
              </button>
            </div>
          </div>
        ))}
      </div>
      <div>
        <button className="w-32 mt-10  mx-auto bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors font-medium text-sm flex items-center justify-center gap-2">
          <span className="">Learn More</span>
        </button>
      </div>
    </div>
  );
};

export default ProductCards;
