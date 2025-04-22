// Import Swiper React components
"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import image from "../../../public/assest/brandSwiper/Group 143725932.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import Image from "next/image";
import Link from "next/link";
import { Pagination } from "swiper/modules";

const BrandSwiper = () => {
  return (
    <Swiper
      // effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={2}
      // coverflowEffect={{
      //   rotate: 20,
      //   stretch: -40,
      //   depth: 400,
      //   modifier: 1,
      //   slideShadows: true,
      // }}
      spaceBetween={40}
      modules={[Pagination]}
      className="mySwiper "
    >
      <SwiperSlide className="rounded-4xl bg-[#FBBD08] first-swiper">
        <Image
          src={image}
          width={200}
          height={150}
          alt="Picture of the author"
        />
        <p className="text-2xl text-[#062D3E] pl-6 pb-6">Shirts</p>
        <p className="text-sm text-[#062D3E] pl-6 pb-20">
          Comfort is key — and ONLY shirts deliver. Made from soft cotton,
          breathable viscose, and sustainable blends, they’re lightweight,
          gentle on the skin, and ideal for all-day wear.{" "}
        </p>
        <Link
          href="#"
          className="w-full ml-6 py-3 text-center px-6 rounded-full text-[#062D3E] font-medium border border-[#062D3E]  hover:text-white transition-colors hover:bg-[#062D3E]"
        >
          Explore
        </Link>
      </SwiperSlide>
      <SwiperSlide className="bg-[#FBBD08] w-[400px] h-[400px] rounded-4xl second-swiper">
        <Image
          src={image}
          width={200}
          height={150}
          alt="Picture of the author"
          className="w-[11px] h-[111px]"
        />
        <p className="text-2xl text-[#062D3E] pl-6 pb-6">Shirts</p>
        <p className="text-sm text-[#062D3E] pl-6 pb-20">
          Comfort is key — and ONLY shirts deliver. Made from soft cotton,
          breathable viscose, and sustainable blends, they’re lightweight,
          gentle on the skin, and ideal for all-day wear.{" "}
        </p>
        <Link
          href="#"
          className="w-full ml-6 py-3 text-center px-6 rounded-full text-[#062D3E] font-medium border border-[#062D3E]  hover:text-white transition-colors hover:bg-[#062D3E]"
        >
          Explore
        </Link>
      </SwiperSlide>
      <SwiperSlide className="bg-[#FBBD08] w-[400px] h-[400px] rounded-4xl first-swiper">
        <Image
          src={image}
          width={200}
          height={150}
          alt="Picture of the author"
          className="w-[11px] h-[111px]"
        />
        <p className="text-2xl text-[#062D3E] pl-6 pb-6">Shirts</p>
        <p className="text-sm text-[#062D3E] pl-6 pb-20">
          Comfort is key — and ONLY shirts deliver. Made from soft cotton,
          breathable viscose, and sustainable blends, they’re lightweight,
          gentle on the skin, and ideal for all-day wear.{" "}
        </p>
        <Link
          href="#"
          className="w-full ml-6 py-3 text-center px-6 rounded-full text-[#062D3E] font-medium border border-[#062D3E]  hover:text-white transition-colors hover:bg-[#062D3E]"
        >
          Explore
        </Link>
      </SwiperSlide>
      <SwiperSlide className="hover:bg-[#FBBD08] w-[400px] h-[400px] rounded-4xl second-swiper">
        <Image
          src={image}
          width={200}
          height={150}
          alt="Picture of the author"
          className="w-[11px] h-[111px]"
        />
        <p className="text-2xl text-[#062D3E] pl-6 pb-6">Shirts</p>
        <p className="text-sm text-[#062D3E] pl-6 pb-20">
          Comfort is key — and ONLY shirts deliver. Made from soft cotton,
          breathable viscose, and sustainable blends, they’re lightweight,
          gentle on the skin, and ideal for all-day wear.{" "}
        </p>
        <Link
          href="#"
          className="w-full ml-6 py-3 text-center px-6 rounded-full text-[#062D3E] font-medium border border-[#062D3E]  hover:text-white transition-colors hover:bg-[#062D3E]"
        >
          Explore
        </Link>
      </SwiperSlide>
      <SwiperSlide className="hover:bg-[#FBBD08] w-[400px] h-[400px] rounded-4xl first-swiper">
        <Image
          src={image}
          width={200}
          height={150}
          alt="Picture of the author"
          className="w-[11px] h-[111px]"
        />
        <p className="text-2xl text-[#062D3E] pl-6 pb-6">Shirts</p>
        <p className="text-sm text-[#062D3E] pl-6 pb-20">
          Comfort is key — and ONLY shirts deliver. Made from soft cotton,
          breathable viscose, and sustainable blends, they’re lightweight,
          gentle on the skin, and ideal for all-day wear.{" "}
        </p>
        <Link
          href="#"
          className="w-full ml-6 py-3 text-center px-6 rounded-full text-[#062D3E] font-medium border border-[#062D3E]  hover:text-white transition-colors hover:bg-[#062D3E]"
        >
          Explore
        </Link>
      </SwiperSlide>
    </Swiper>
  );
};

export default BrandSwiper;
