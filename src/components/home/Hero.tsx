"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Button from "../shared/Button";
import { motion } from "framer-motion";
import {
  buttonVariants,
  subtitleVariants,
  titleVariants,
} from "@/utils/animationVariants";
import { getSliders } from "@/lib/data";
import { ISlider } from "@/interfaces/slider.interface";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [sliders, setSliders] = useState<ISlider[]>([]);

  // Detect screen size to determine layout
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Automatically change slides every 5 seconds
  useEffect(() => {
    if (sliders.length === 0) return;

    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliders.length);
    }, 10000);

    return () => clearInterval(slideInterval); // Clear interval on unmount
  }, [sliders.length]);

  const handleBulletClick = (index: number) => {
    setCurrentSlide(index);
  };

  // get slider data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getSliders();
        setSliders(res?.data.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="min-h-dvh lg:fixed top-0 left-0 h-full w-full bg-black overflow-hidden ">
      <div
        className={`w-full h-full flex ${
          isMobile ? "flex-row" : "flex-col"
        } transition-transform duration-700 ease-in-out`}
        style={{
          transform: isMobile
            ? `translateX(-${currentSlide * 100}%)`
            : `translateY(-${currentSlide * 100}vh)`,
        }}
      >
        {sliders.map((item, index) => (
          <div
            key={index}
            className="w-full h-full shrink-0 flex-none relative"
          >
            <div className="banner_bg h-screen">
              <div
                className="single__banner"
                style={{ backgroundImage: `url(${item.entity_featured_url})` }}
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
                    className="lg:text-[145px] text-[54px] lowercase leading-[0.9] -tracking-wider"
                  >
                    {item.title_name}
                  </motion.h3>
                  <motion.p
                    variants={subtitleVariants}
                    initial="hidden"
                    animate={currentSlide === index ? "visible" : "hidden"}
                    transition={{ duration: 0.5, delay: 1 }}
                    className="w-[80%] text-base leading-6"
                  >
                    {item.description}
                  </motion.p>
                  <div className="flex">
                    <Link
                      href={item.meta_data.slider_button_url}
                      className="ml-auto mt-[30px]"
                      target="_blank"
                    >
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
        ))}
      </div>
      {/* Custom Pagination */}
      <div className="absolute bottom-10 right-10 flex z-[1] w-full">
        <ul className="ml-auto bg-transparent text-center">
          {sliders.map((_, index) => (
            <li key={index} className="relative inline-block w-auto m-[5px]">
              <button
                key={index}
                className={`w-[18px] h-[18px] block rounded-full border border-white bg-transparent transition-colors duration-300 hover:bg-primary hover:border-primary ${
                  index === currentSlide ? "!bg-primary !border-primary" : ""
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
