"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { banners } from "@/data/banners";
import Button from "../shared/Button";
import { motion } from "framer-motion";
import {
  buttonVariants,
  subtitleVariants,
  titleVariants,
} from "@/utils/animationVariants";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = banners.length;

  // Automatically change slides every 5 seconds
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 10000);

    return () => clearInterval(slideInterval); // Clear interval on unmount
  }, [totalSlides]);

  const handleBulletClick = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className="min-h-dvh fixed top-0 left-0 h-full w-full bg-black overflow-hidden ">
      {banners.map((item, index) => (
        <div
          key={index}
          className="w-full h-full transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateY(-${currentSlide * 100}vh)`,
          }}
        >
          <div className="relative w-full h-full">
            <div className="banner_bg">
              <div
                className="single__banner"
                style={{ backgroundImage: `url(${item.imageUrl})` }}
              ></div>
            </div>

            <div className="banner_fg">
              <div className="max-w-[850px] ml-auto text-right w-full relative z-[1] text-white top-0">
                <div>
                  <motion.h3
                    variants={titleVariants}
                    initial="hidden"
                    animate={currentSlide === index ? "visible" : "hidden"}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="text-[145px] lowercase leading-[0.9] -tracking-wider"
                  >
                    {item.title}
                  </motion.h3>
                  <motion.p
                    variants={subtitleVariants}
                    initial="hidden"
                    animate={currentSlide === index ? "visible" : "hidden"}
                    transition={{ duration: 0.5, delay: 1 }}
                    className="w-[80%] text-base leading-6"
                  >
                    {item.subtitle}
                  </motion.p>
                  <div className="flex">
                    <Link href={item.link} className="ml-auto mt-[30px]">
                      <motion.div
                        variants={buttonVariants}
                        initial="hidden"
                        animate={currentSlide === index ? "visible" : "hidden"}
                        transition={{ duration: 0.5, delay: 1.4 }}
                      >
                        <Button variant="outline">Listen Now</Button>
                      </motion.div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Custom Pagination */}
      <div className="absolute bottom-10 right-10 flex z-[1] w-full">
        <ul className="ml-auto bg-transparent text-center">
          {banners.map((_, index) => (
            <li key={index} className="relative inline-block w-auto m-[5px]">
              <button
                key={index}
                className={`w-[18px] h-[18px] block rounded-full border border-white bg-transparent transition-colors duration-300 hover:bg-primary hover:border-primary ${
                  index === currentSlide ? "bg-primary border-primary" : ""
                }`}
                onClick={() => handleBulletClick(index)}
              ></button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Hero;
