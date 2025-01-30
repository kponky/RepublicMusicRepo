"use client"
import React, { useEffect, useState } from "react";
import ArtistCard from "../home/ArtistCard";
import { IArtist } from "@/interfaces/artist.interface";
import { getArtists } from "@/lib/data";

const ArtistsGrid = () => {
  const [artists, setArtists] = useState<IArtist[]>([]);

  // get artist data
    useEffect(() => {
      const fetchData = async () => {
        try {
          const res = await getArtists(1000);
  
          setArtists(res?.data.data);
        } catch (error) {
          console.log(error);
        }
      };
  
      fetchData();
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
