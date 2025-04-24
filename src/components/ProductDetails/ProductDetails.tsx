"use client";

import Image from "next/image";
import shirtImage from "../../../public/assest/detailsImage/image_2__2_-removebg-preview 1.png"; // Replace with your image path

const ProductDetails = () => {
  return (
    <div className="min-h-screen bg-[#EBE3CC] flex justify-center py-10 px-4">
      <div className="max-w-4xl w-full bg-[#EBE3CC] p-6">
        <div className="flex flex-col md:flex-row gap-8 ">
          {/* Image */}
          <div className="flex-shrink-0 mx-auto md:mx-0 bg-white">
            <Image
              src={shirtImage}
              alt="Womens Denim Jacket"
              width={400}
              height={400}
              className="rounded-lg"
            />
          </div>

          {/* Product Info */}
          <div className="flex flex-col justify-center text-center md:text-left lg:pl-20 ">
            <h2 className="text-lg font-semibold  text-[#272727]">
              Womens Denim Jacket <br />
              <span className="text-[#272727] font-medium">(Blue)</span>
            </h2>
            <p className="text-xl font-bold text-[#272727] mt-2">BDT 700</p>

            <button className="bg-[#f97316] hover:bg-[#fb923c] text-white mt-4 px-6 py-2 rounded-full text-sm font-semibold mx-auto md:mx-0">
              Add to Cart
            </button>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-8   mx-auto md:mx-0">
          <p className="text-sm font-medium text-[#0a2a34] px-2 -mb-[2px]  text-center pb-3">
            Product Details
          </p>
          <hr className="w-32 border-b border-[#0a2a34] mx-auto" />
        </div>

        {/* Description */}
        <div className="mt-4 space-y-4 text-sm text-[#0a2a34]">
          <div>
            <p className="font-semibold text-black">Product Details</p>
            <p>
              Blue washed jacket, has a spread collar, 4 pockets, button
              closure, long sleeves, straight hem
            </p>
          </div>

          <div>
            <p className="font-semibold text-black">Size & Fit</p>
            <p>The model (height 5&apos;8&quot;) is wearing a size S</p>
          </div>

          <div>
            <p className="font-semibold text-black">Material & Care</p>
            <p>100% cotton Machine Wash</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
