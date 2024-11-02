"use client";
import Link from "next/link";
import React, { useRef } from "react";
import Button from "../shared/Button";
import articles from "@/data/shop";
import { Swiper, SwiperSlide, SwiperRef } from "swiper/react";
import { Navigation, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

const ShopSection = () => {
  const swiperRef = useRef<SwiperRef | null>(null);

  // Split articles into chunks of 5 for Swiper slides
  const chunkedArticles = [];
  for (let i = 0; i < articles.length; i += 5) {
    chunkedArticles.push(articles.slice(i, i + 5));
  }

  // Function to navigate to the previous slide
  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  // Function to navigate to the next slide
  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideNext();
    }
  };

  return (
    <section className="pt-[50px]">
      <div className="m-auto w-[95%] block">
        <h2 className=" text-[160px] lowercase font-bold text-white -tracking-wider leading-none mx-auto w-[90%] translate-y-[55px] z-[2] relative">
          Shop
        </h2>
      </div>

      {/* view content */}
      <div className="w-full mx-auto ">
        {/* arrow buttons */}
        <div className="relative">
          <button
            onClick={handlePrev}
            className="absolute w-20 h-[22px] text-primary top-[-50px] right-[calc(5%+130px)] cursor-pointer z-[2]"
          >
            prev
          </button>
          <button
            onClick={handleNext}
            className="absolute w-20 h-[22px] text-primary top-[-50px] right-[5%] cursor-pointer z-[2]"
          >
            next
          </button>
        </div>

        <Swiper
          ref={swiperRef}
          modules={[Navigation, EffectFade]} // Enable the Navigation module
          spaceBetween={10} // Space between slides
          slidesPerView={1} // Show one slide (which contains multiple cards)
          effect={"fade"}
          navigation={false}
          loop
        >
          {chunkedArticles.map((chunk, index) => (
            <SwiperSlide key={index}>
              <div className="w-full">
                {chunk.map((article) => (
                  <article key={article.id} className="article__card">
                    <figure className="relative block">
                      <div className="article_card__thumb pb-[100%] relative">
                        <div className="article_card__thumb-overlay">
                          <Link href={article.link}>
                            <Button variant="outline">shop now</Button>
                          </Link>
                        </div>
                        <div className="__thumb-bg-color"></div>
                        <div
                          className="__thumb-bg-image"
                          style={{
                            backgroundImage: `url(${article.imageUrl})`,
                          }}
                        ></div>
                      </div>
                      <div className="article_card__footer">
                        <div className="__footer-header">
                          <h3>{article.title}</h3>
                          <h4>{article.price}</h4>
                        </div>
                      </div>
                    </figure>
                  </article>
                ))}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ShopSection;
