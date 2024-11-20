import Link from "next/link";
import React from "react";
import Button from "./Button";
import {
  FaInstagram,
  FaSpotify,
  FaTiktok,
  FaTumblr,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { countriesList } from "@/data/countries";

const Footer = () => {
  return (
    <footer className="relative z-[1] bg-black main-footer overflow-hidden">
      <div className="flex flex-col justify-end relative z-[1] h-full">
        <div className="py-[3px] flex justify-center pb-[10px] w-full ">
          {/* footertop */}
          <div className="mr-20 flex items-center justify-end flex-wrap">
            <div className="flex justify-between w-[90%] max-w-[800px] flex-col flex-nowrap mx-auto mt-[150px] mb-[100px]">
              <div className="text-left mb-[30px]">
                <h2 className="text-[56px] lowercase font-bold text-white tracking-wider leading-none">
                  sign up for exclusive new artist & music updates!
                </h2>
              </div>
              <div className="max-w-[750px] w-full mx-auto px-4 mb-12 text-lg">
                {/* sign up form */}
                <form>
                  <div className="w-full grid grid-cols-2 gap-5 mb-[.25rem]">
                    {/* Email Input Group */}
                    <div className="col-span-2 lg:col-span-1 flex flex-col space-y-2 w-full">
                      <label
                        htmlFor="email"
                        className="text-sm font-bold text-primary tracking-wider uppercase"
                      >
                        *Email
                      </label>
                      <div className="relative">
                        <input
                          type="email"
                          id="email"
                          placeholder="Email"
                          className="w-full py-2 bg-transparent border-b-2 
          border-primary text-white font-normal outline-none placeholder:text-white"
                        />
                      </div>
                    </div>

                    {/* Country Select Group */}
                    <div className="col-span-2 lg:col-span-1 flex flex-col space-y-2 w-full relative">
                      <label
                        htmlFor="country"
                        className="text-sm font-bold text-primary tracking-wider uppercase"
                      >
                        Choose Country
                      </label>
                      <div className="input__group">
                        <select
                          className="w-full py-2 bg-transparent border-b-2 
          border-primary text-white font-normal outline-none appearance-none"
                        >
                          <option value="" hidden>
                            Select...
                          </option>
                          {countriesList.map((country, i) => (
                            <option
                              key={i}
                              value={country}
                              className="bg-[#333]"
                            >
                              {country}
                            </option>
                          ))}
                        </select>
                        <div className="select__arrow"></div>
                      </div>
                    </div>
                  </div>
                  <div className="text-white mb-[.25rem]">
                    <span>*</span>
                    <span className="text-sm font-medium text-white tracking-wide l ">
                      REQUIRED FIELDS
                    </span>
                  </div>
                  <div className="flex gap-3 mt-5 mb-3 font-medium relative">
                    <input type="checkbox" className="input__checkbox" />
                    <span className="text-primary lowercase mr-5 ml-1">
                      Republic records
                    </span>
                  </div>

                  <div className="mt-5 mb-2">
                    <p className="text-white font-bold text-sm leading-[1.3] ">
                      Emails will be sent by or on behalf of Universal Music
                      Group 2220 Colorado Avenue, Santa Monica, CA 90404 (310)
                      865-4000. You may withdraw your consent at any time{" "}
                      <Link href="/" className="text-primary" target="_blank">
                        Privacy Policy
                      </Link>
                      <span className="mx-1">/</span>
                      <Link href="/" className="text-primary" target="_blank">
                        Do Not Sell My Personal Information
                      </Link>
                    </p>
                  </div>

                  <div className="my-10 flex  ">
                    <Button type="submit" variant="outline">
                      submit
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          {/* marquee */}
          <div className="absolute left-10 bottom-0 pb-[50px] z-[1] pt-10 ">
            <div className="animate-marquee">
              {Array.from({ length: 20 }).map((_, i) => (
                <Link
                  key={i}
                  href=""
                  target="_blank"
                  className="flex relative justify-center w-[70px] minw-[70px] h-20 mx-10 brightness-0 invert-[100]"
                >
                  <div
                    style={{
                      backgroundImage: `url(https://www.republicrecords.com/files/2022/11/American.png)`,
                    }}
                    className="absolute w-full h-full bg-no-repeat bg-center bg-contain"
                  ></div>
                </Link>
              ))}
            </div>
          </div>

          {/* footer bottom */}
          <div className="flex flex-col justify-center items-start bg-transparent">
            {/* nav */}
            <div className="pb-[30px] flex">
              <ul className="flex flex-col">
                <li className="flex mr-[0.75rem]">
                  <Link
                    href="/artists"
                    className="text-primary hover:text-white transition text-base lowercase font-bold leading-[1.8]"
                  >
                    artists
                  </Link>
                </li>
                <li className="flex mr-[0.75rem]">
                  <Link
                    href="/videos"
                    className="text-primary hover:text-white transition text-base lowercase font-bold leading-[1.8]"
                  >
                    video
                  </Link>
                </li>
                <li className="flex mr-[0.75rem]">
                  <Link
                    href="/subscribe"
                    className="text-primary hover:text-white transition text-base lowercase font-bold leading-[1.8]"
                  >
                    subscribe
                  </Link>
                </li>
                {/* <li className="flex mr-[0.75rem] order-10">
                  <Link href="/shop" className="mt-[30px] w-fit">
                    <Button variant="solid">shop</Button>
                  </Link>
                </li> */}
              </ul>
            </div>

            <div className="w-full">
              <ul className="flex flex-col items-start border-t border-white pt-[30px] mt-[.25rem] mb-1 text-white text-[.756rem] font-semibold">
                <li className="mb-[.25rem]">
                  <Link href="/" className="text-white transition">
                    Ⓒ Republic Records
                  </Link>
                </li>
                <li className="mb-[.25rem]">
                  <Link href="/" className="text-white transition">
                    Privacy Policy
                  </Link>
                </li>
                <li className="mb-[.25rem]">
                  <Link href="/" className="text-white transition">
                    Terms & Conditions
                  </Link>
                </li>
                <li className="mb-[.25rem] mr-4">
                  <Link href="/" className="text-white transition">
                    Do Not Sell My Personal Information
                  </Link>
                </li>
              </ul>
            </div>

            {/* social icons */}
            <ul className="flex items-center text-white mt-5 gap-2">
              <li className=" transition-opacity duration-300 hover:opacity-75">
                <Link
                  href="https://www.youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaYoutube size={24} />
                </Link>
              </li>
              <li className=" transition-opacity duration-300 hover:opacity-75">
                <Link
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram size={24} />
                </Link>
              </li>
              <li className=" transition-opacity duration-300 hover:opacity-75">
                <Link
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaXTwitter size={24} />
                </Link>
              </li>
              <li className=" transition-opacity duration-300 hover:opacity-75">
                <Link
                  href="https://www.spotify.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaSpotify size={24} />
                </Link>
              </li>
              <li className="transition-opacity duration-300 hover:opacity-75">
                <Link
                  href="https://www.tiktok.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTiktok size={24} />
                </Link>
              </li>
              <li className="transition-opacity duration-300 hover:opacity-75">
                <Link
                  href="https://www.tumblr.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTumblr size={24} />
                </Link>
              </li>
              <li className=" transition-opacity duration-300 hover:opacity-75">
                <Link
                  href="https://www.spotify.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaSpotify size={24} />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
