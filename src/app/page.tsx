import ArtistSection from "@/components/home/ArtistSection";
import Hero from "@/components/home/Hero";
// import ShopSection from "@/components/home/ShopSection";
import VideoSection from "@/components/home/VideoSection";
import TrackComponent from "@/components/trackSection/TrackComponents";
import React from "react";

const HomePage = () => {
  return (
    <div className="w-full">
      <Hero />
      <div className="lg:mt-[110vh] mt-4 bg-black z-[2] relative">
        {/* track section */}
        <TrackComponent />

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
