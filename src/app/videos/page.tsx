import VideosGrid from "@/components/videos/VideosGrid";
import { Metadata } from "next";
import React from "react";

const pageTitle = "Videos";

export const metadata: Metadata = {
  title: pageTitle,
};

const videos = () => {
  return (
    <div className="w-full h-full min-h-screen bg-black">
      <div className="py-[100px] lg:py-20">
        <div className="px-4">
          <h2 className="text-center text-[60px] lg:text-[160px] lowercase font-bold text-white -tracking-wider leading-[1] m-0">
            Videos
          </h2>
        </div>

        <VideosGrid />
      </div>
    </div>
  );
};

export default videos;
