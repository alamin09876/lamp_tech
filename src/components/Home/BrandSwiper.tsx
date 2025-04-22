"use client";

import Image from "next/image";
import Link from "next/link";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "./styles.css";

import imageOne from "../../../public/assest/brandSwiper/Frame (1).png";
import imageTwo from "../../../public/assest/brandSwiper/Frame.png";
import image from "../../../public/assest/brandSwiper/Group 143725932.png";

const BrandSwiper = () => {
  const brands = [
    {
      title: "Shirts",
      description:
        "Comfort is key — and ONLY shirts deliver. Made from soft cotton, breathable viscose, and sustainable blends, they’re lightweight, gentle on the skin, and ideal for all-day wear. ",
    },
    {
      title: "Earping",
      description:
        "Comfort is key — and ONLY shirts deliver. Made from soft cotton, breathable viscose, and sustainable blends, they’re lightweight, gentle on the skin, and ideal for all-day wear. ",
    },
    {
      title: "Port",
      description:
        "Comfort is key — and ONLY shirts deliver. Made from soft cotton, breathable viscose, and sustainable blends, they’re lightweight, gentle on the skin, and ideal for all-day wear. ",
    },
    {
      title: "Port",
      description:
        "Comfort is key — and ONLY shirts deliver. Made from soft cotton, breathable viscose, and sustainable blends, they’re lightweight, gentle on the skin, and ideal for all-day wear. ",
    },
  ];

  return (
    <div className="relative bg-[#fff4e0] py-12 clip-wrapper">
      <div className=" grid lg:grid-cols-12 col-span-1  gap-4">
        <div className="lg:col-span-1">
          <Image
            src={imageTwo}
            width={130}
            height={70}
            alt="brand"
            className=" object-contain items-start flex justify-start "
          />
        </div>
        <div className="lg:col-span-10 ">
          <h2 className="text-2xl">Our Brands</h2>
        </div>
        <div className="lg:col-span-1 ">
          <Image
            src={imageOne}
            width={100}
            height={70}
            alt="brand"
            className=" object-contain items-start flex justify-start "
          />
        </div>
      </div>
      <div className="clip-swiper">
        <Swiper
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={2}
          spaceBetween={40}
          modules={[Pagination]}
          className="mySwiper"
        >
          {brands.map((brand, index) => (
            <SwiperSlide
              key={index}
              className={`hover:bg-[#FBBD08] w-[500px] h-[600px] px-10 py-10 border-2 border-[#EBE3CC] flex flex-col justify-between overflow-hidden ${
                index % 2 === 0 ? "even-clip" : "odd-clip"
              } rounded-4xl `}
            >
              <div className="flex flex-col ">
                <Image
                  src={image}
                  width={100}
                  height={70}
                  alt="brand"
                  className=" object-contain items-start flex justify-start "
                />
                <p className="text-2xl text-[#062D3E] pt-4">{brand.title}</p>
                <p className="text-sm text-[#062D3E] pt-6 pb-6">
                  {brand.description}
                </p>
              </div>
              <Link
                href="#"
                className="w-full mt-6 py-3 text-center px-6 rounded-full text-[#062D3E] font-medium border border-[#062D3E] hover:text-white transition-colors hover:bg-[#062D3E]"
              >
                Explore
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default BrandSwiper;
