import ArtistsGrid from "@/components/artists/ArtistsGrid";
import React from "react";

const ArtistsPage = () => {
  return (
    <div className="w-full h-full min-h-dvh bg-black">
      <div className="py-[100px]">
        <div className="">
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
