"use client";
import { useAppStore } from "@/store/appStore";
import { useEffect } from "react";
import ArtistCard from "../home/ArtistCard";

const ArtistsGrid = () => {
  const { artists, fetchArtists } = useAppStore();

  // get artist data
  useEffect(() => {
    fetchArtists(1000);
  }, []);

  return (
    <div className="w-full mx-auto flex flex-row flex-wrap relative">
      {artists.map((artist, i) => (
        <ArtistCard key={i} artist={artist} index={i} />
      ))}
    </div>
  );
};

export default ArtistsGrid;
