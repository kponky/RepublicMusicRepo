"use client"
import { artists } from "@/data/artists";
import React from "react";
import ArtistCard from "../home/ArtistCard";

const ArtistsGrid = () => {
  return (
    <div className="w-full mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-4 p-4 ">
      {artists.map((artist, i) => (
        <ArtistCard key={i} artist={artist} index={i} />
      ))}
    </div>
  );
};

export default ArtistsGrid;
