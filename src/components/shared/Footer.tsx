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
    <footer className="relative z-[1] bg-black main-footer">
      <div className="flex flex-col justify-end relative z-[1] h-full">
        <div className="py-[3px] flex justify-center pb-[10px] w-full ">
          {/* footertop */}
          {/* footer left */}
          <div className="mt-20 flex items-center justify-end flex-wrap">
            <div className="flex justify-between w-[80%] max-w-[800px] flex-col flex-nowrap mx-auto mt-[150px] mb-[100px]">
              <div className="text-left mb-[30px]">
                <h2 className="text-[50px] lowercase font-bold text-white ">
                  sign up for exclusive new artist & music updates!
                </h2>
              </div>
              {/* sign up form */}
              <form className="w-full px-6">
                <div className="w-full grid grid-cols-2 gap-5 mb-[.25rem]">
                  {/* Email Input Group */}
                  <div className="col-span-2 lg:col-span-1 flex flex-col space-y-2 w-full">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium text-yellow-500 tracking-wider uppercase"
                    >
                      *Email
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        id="email"
                        placeholder="Email"
                        className="w-full py-2 bg-transparent border-b-2 
          border-yellow-500/50 hover:border-yellow-500 
          focus:border-yellow-400 outline-none text-white 
          placeholder-gray-400/70 transition-all duration-300 
          invalid:border-red-500/50 invalid:hover:border-red-500 placeholder:text-white placeholder:text-base"
                      />
                    </div>
                  </div>

                  {/* Country Select Group */}
                  <div className="col-span-2 lg:col-span-1 flex flex-col space-y-2 w-full relative">
                    <label
                      htmlFor="country"
                      className="text-sm font-medium text-yellow-500 tracking-wider uppercase"
                    >
                      Choose Country
                    </label>
                    <div className="input__group">
                      <select
                        className="w-full py-2 bg-transparent border-b-2 
          border-yellow-500/50 hover:border-yellow-500 
          focus:border-yellow-400 outline-none text-white 
          placeholder-gray-400/70 transition-all duration-300 
          invalid:border-red-500/50 invalid:hover:border-red-500 placeholder:text-white placeholder:text-base appearance-none"
                      >
                        <option value="" hidden>
                          Select...
                        </option>
                        {countriesList.map((country, i) => (
                          <option key={i} value={country} className="bg-[#333]">
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
                    Emails will be sent by or on behalf of Universal Music Group
                    2220 Colorado Avenue, Santa Monica, CA 90404 (310) 865-4000.
                    You may withdraw your consent at any time{" "}
                    <Link href="/" className="text-primary" target="_blank">
                      Privacy Policy
                    </Link>
                    <span className="mx-1">/</span>
                    <Link href="/" className="text-primary" target="_blank">
                      Do Not Sell My Personal Information
                    </Link>
                  </p>
                </div>

                <div className="mx-auto w-[95%] my-10 flex  ">
                  <Link href="/artists" className="mb-[50px] w-fit">
                    <Button variant="outline">submit</Button>
                  </Link>
                </div>
              </form>
            </div>
          </div>

          {/* foooter right */}
          <div className=" w-[22%] flex-col flex-nowrap mx-auto mt-[250px] mb-[90px]">
            <ul className="flex flex-col py-5 mt-5">
              <li className="mb-2">
                <Link
                  href="/artist"
                  className="text-primary hover:text-white transition text-2xl font-medium mx-4 "
                >
                  artists
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="/videos"
                  className="text-primary hover:text-white transition text-2xl font-medium mx-4 "
                >
                  video
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="/subscribe"
                  className="text-primary hover:text-white transition text-2xl font-medium mx-4 "
                >
                  subscribe
                </Link>
              </li>
            </ul>

            <div className="mx-auto w-[95%] my-10 flex  ">
              <Link href="/shop" className="mb-[50px] w-fit">
                <Button variant="solid">shop</Button>
              </Link>
            </div>
            <hr className="w-full border-r-white border my-10" />
            <div className="mt-3 leading-8">
              <ul className="text-white text-lg font-semibold text-[12px] leading-[1.4]">
                <li>
                  <Link href="/" className="text-white transition">
                    Ⓒ Republic Records
                  </Link>
                </li>
                <li>
                  <Link href="/" className="text-white transition">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/" className="text-white transition">
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link href="/" className="text-white transition">
                    Do Not Sell My Personal Information
                  </Link>
                </li>
              </ul>
            </div>
            {/* social icons */}

            <div className="flex items-center justify-between text-white mt-5">
              <div className="pt-2">
                <FaYoutube size={25} />
              </div>
              <div className="pt-2">
                <FaInstagram size={25} />
              </div>
              <div className="pt-2">
                <FaXTwitter size={25} />
              </div>
              <div className="pt-2">
                <FaSpotify size={25} />
              </div>
              <div className="pt-2">
                <FaTiktok size={25} />
              </div>
              <div className="pt-2">
                <FaTumblr size={40} />
              </div>
              <div className="pt-2">
                <FaSpotify size={25} />
              </div>
            </div>
          </div>

          {/* marquee */}

          {/* footer bottom */}
          <div></div>
        </div>

        <div className="overflow-hidden whitespace-nowrap hover:animate-none cursor-pointer py-20 ">
          <div className="inline-block animate-marquee text-white font-medium text-lg">
            <span className="text-xl mr-8"> Album 1 </span>
            <span className="text-xl mr-8"> Album 2 </span>
            <span className="text-xl mr-8">Album 3 </span>
            <span className="text-xl mr-8">Album 4 </span>
            <span className="text-xl mr-8">Album 5 </span>
            <span className="text-xl mr-8">Album 6 </span>
            <span className="text-xl mr-8">Album 6 </span>
            <span className="text-xl mr-8">Album 7 </span>
            <span className="text-xl mr-8">Album 8 </span>
            <span className="text-xl mr-8">Album 9 </span>
            <span className="text-xl mr-8">Album 10 </span>
            <span className="text-xl mr-8">Album 11</span>
            <span className="text-xl mr-8">Album 12</span>
            <span className="text-xl mr-8">Album 13</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
