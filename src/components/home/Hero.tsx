"use client";
import { banners } from "@/data/banners";
import Link from "next/link";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Button from "../shared/Button";

import "swiper/css";
import "swiper/css/pagination";

const Hero = () => {
  return (
    <section className="min-h-screen fixed top-0 left-0 w-full h-full bg-black overflow-hidden">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        direction={"vertical"}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop
        modules={[Autoplay, Pagination]}
        pagination={{ clickable: true }}
      >
        {banners.map((item, i) => {
          return (
            <SwiperSlide key={i}>
              <div className="relative">
                <div className="banner_bg">
                  <div
                    className="single__banner"
                    style={{
                      backgroundImage: `url(${item.imageUrl})`,
                    }}
                  ></div>
                </div>
                <div className="banner_fg">
                  <div className="max-w-[850px] text-right w-full relative z-[1] text-white top-0">
                    <div>
                      <div className="">
                        <h3 className="text-[145px] lowercase leading-[0.9] -tracking-wider">
                          {item.title}
                        </h3>
                      </div>
                      <div>
                        <p className="w-[80%] text-base ml-auto leading-6">
                          {item.subtitle}
                        </p>
                      </div>
                      <div className="flex">
                        <Link href={item.link} className="ml-auto mt-[30px]">
                          <Button variant="outline">listen now</Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Hero;
