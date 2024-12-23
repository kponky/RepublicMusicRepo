import ArtistSection from "@/components/home/ArtistSection";
import Hero from "@/components/home/Hero";
// import ShopSection from "@/components/home/ShopSection";
import VideoSection from "@/components/home/VideoSection";
import React from "react";
import TrackSection from "./track/page";

const HomePage = () => {
  return (
    <div className="w-full">
      <Hero />
      <div className="mt-[110vh] bg-black z-[2] relative">
        {/* track section */}
        <TrackSection />

        {/* artists section */}
        <ArtistSection />
        {/* videos section */}
        <VideoSection />
        {/* shop section */}
        {/* <ShopSection /> */}
      </div>
    </div>
  );
};

export default HomePage;
