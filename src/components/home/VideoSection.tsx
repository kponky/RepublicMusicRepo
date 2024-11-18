"use client";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import Button from "../shared/Button";
import articles from "@/data/shop";
import { Swiper, SwiperSlide, SwiperRef } from "swiper/react";
import { Navigation, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import videoArticles from "@/data/video";
import CustomCursor, { CustomCursorRef } from "../shared/CustomCursor";

const VideoSection = () => {
  const swiperRef = useRef<SwiperRef | null>(null);
  const cursorRef = useRef<CustomCursorRef | null>(null);

  // Split articles into chunks of 5 for Swiper slides
  const chunkedArticles = [];
  for (let i = 0; i < videoArticles.length; i += 4) {
    chunkedArticles.push(videoArticles.slice(i, i + 4));
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

  const handleMouseEnter = () => {
    if (cursorRef.current) cursorRef.current.setHovering(true);
  };

  const handleMouseLeave = () => {
    if (cursorRef.current) cursorRef.current.setHovering(false);
  };

  return (
    <section className="pt-[50px] ">
      <div className="m-auto w-[95%] block">
        <h2 className=" text-[160px] lowercase font-bold text-white -tracking-wider leading-none mx-auto w-[90%] translate-y-[55px] z-[2] relative pointer-events-none">
          Videos
        </h2>
      </div>

      {/* view content */}
      <div className="w-full mx-auto">
        {/* arrow buttons */}
        <div className="relative">
          <button onClick={handlePrev} className="slick-prev ">
            prev
          </button>
          <button onClick={handleNext} className="slick-next">
            next
          </button>
        </div>

        <CustomCursor ref={cursorRef} />

        <Swiper
          ref={swiperRef}
          modules={[Navigation, EffectFade]} // Enable the Navigation module
          spaceBetween={10} // Space between slides
          slidesPerView={1} // Show one slide (which contains multiple cards)
          effect={"fade"}
          navigation={false}
          loop
          className="w-full"
        >
          {chunkedArticles.map((chunk, index) => (
            <SwiperSlide key={index}>
              <div className="w-full relative flex flex-row flex-wrap h-full min-h-[1px] float-left">
                {chunk.map((videoArticle) => (
                  <article
                    key={videoArticle.id}
                    className="video-article__card"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <figure className="relative block">
                      <div className="video-article_card__thumb">
                        <div className="video-article_card__thumb-overlay">
                          <Link
                            href={videoArticle.link}
                            target="_blank"
                            className="play-button"
                            title="Play Video"
                          >
                            <span>Play Video</span>
                          </Link>
                        </div>
                        <div
                          className="__thumb-bg-image"
                          style={{
                            backgroundImage: `url(${videoArticle.imageUrl})`,
                          }}
                        ></div>
                      </div>
                      <div className="video-article_card__footer">
                        <div className="__footer-header">
                          <h3>{videoArticle.title}</h3>
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

export default VideoSection;
