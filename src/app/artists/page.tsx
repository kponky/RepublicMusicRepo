import ArtistsGrid from "@/components/artists/ArtistsGrid";
import { Metadata } from "next";
import React from "react";

const pageTitle = "Artists";

export const metadata: Metadata = {
  title: pageTitle,
};

const ArtistsPage = () => {
  return (
    <div className="w-full h-full min-h-screen bg-black">
      <div className="py-[100px] lg:py-20">
        <div className="px-4">
          <h2 className="text-center text-[160px] lowercase font-bold text-white -tracking-wider leading-[1] m-0">
            artists
          </h2>
        </div>
      
        <ArtistsGrid />
      </div>
    </div>
  );
};

export default ArtistsPage;
