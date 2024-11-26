"use client"
import { artists } from "@/data/artists";
import React from "react";
import ArtistCard from "../home/ArtistCard";

const ArtistsGrid = () => {
  return (
    <div className="w-full mx-auto flex flex-row flex-wrap relative">
      {artists.map((artist, i) => (
        <ArtistCard key={i} artist={artist} index={i} />
      ))}
    </div>
  );
};

export default ArtistsGrid;
