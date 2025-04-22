"use client";

import Image from "next/image";
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
              <button className="absolute top-2 right-2 p-2 hover:text-red-500">
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
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
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
