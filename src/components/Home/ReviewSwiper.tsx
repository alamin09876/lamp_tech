"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper/types";

import imageOne from "../../../public/assest/reviewImage/comma.png";
import imageThree from "../../../public/assest/reviewImage/Group 143725945.png";
import {
  default as imageA,
  default as imageC,
} from "../../../public/assest/reviewImage/Rectangle 21868.png";
import imageB from "../../../public/assest/reviewImage/review.png";
import imageTwo from "../../../public/assest/reviewImage/Star 17.png";

const reviews = [
  {
    image: imageA,
    text: `I'm genuinely impressed with these pants! I ordered them kind of last minute for a work event, and honestly, I wasn't expecting much — but they completely exceeded my expectations. The fit is perfect – the waist and hips but not too tight.`,
  },
  {
    image: imageB,
    text: `Absolutely love the fabric! It's so soft and breathable, yet gives a sleek professional look. I got so many compliments at work.`,
  },
  {
    image: imageC,
    text: `These pants have become my go-to for both casual and formal events. Fit is spot on and quality feels premium.`,
  },
];

const ReviewSwiper = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<SwiperType | null>(null);

  const handlePrev = () => {
    swiperRef.current?.slidePrev();
  };

  const handleNext = () => {
    swiperRef.current?.slideNext();
  };

  return (
    <div className="grid sm:grid-cols-2 gap-2 py-10 justify-between select-none">
      {/* Left side image block */}
      <div>
        <div className="relative ml-32">
          <Image
            src={reviews[activeIndex].image}
            width={350}
            height={400}
            alt="Review"
            className="w-[400px] h-[450px] border-2 border-[#062D3E] rounded-4xl"
          />
          <div className="absolute -top-9 right-0 left-87">
            <Image
              src={imageTwo}
              width={350}
              height={400}
              alt="Star"
              className="object-contain w-[100px] h-[80px]"
            />
          </div>
          <div className="absolute -top-3 right-0 left-[374px]">
            <Image
              src={imageOne}
              width={350}
              height={400}
              alt="Comma"
              className="object-contain w-[50px] h-[30px]"
            />
          </div>
        </div>
      </div>

      {/* Right side swiper block */}
      <div className="flex flex-col justify-center items-center gap-6 relative">
        <div>
          <h2 className="text-[#062D3E] text-[22px] md:text-[26px] font-semibold text-center mt-10">
            Customer Reviews
          </h2>
          <div className="absolute -top-12 right-0 left-[400px]">
            <Image
              src={imageThree}
              width={350}
              height={400}
              alt="BG Graphic"
              className="object-contain w-[200px] h-[200px]"
            />
          </div>
        </div>

        <Swiper
          modules={[Navigation]}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          navigation={false}
          spaceBetween={30}
          slidesPerView={1}
          loop
          className="w-full max-w-md"
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index}>
              <div
                className="bg-white border border-[#C8C8C8] p-6 text-[#333] text-[16px] leading-relaxed shadow-md max-w-md relative"
                style={{
                  clipPath:
                    "polygon(11% 99%, 0 90%, 0 0, 100% 0, 100% 20%, 100% 86%, 89% 100%, 78% 86%, 68% 99%, 55% 89%, 42% 100%, 28% 89%)",
                }}
              >
                {review.text}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Arrows */}
        <div className="flex items-center gap-2 -mt-72">
          <button
            onClick={handlePrev}
            className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center hover:bg-gray-800 transition-all shadow-md"
          >
            <FaLongArrowAltLeft />
          </button>
          <button
            onClick={handleNext}
            className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center hover:bg-gray-800 transition-all shadow-md"
          >
            <FaLongArrowAltRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewSwiper;
