"use client"
import { artists } from "@/data/artists";
import Link from "next/link";
import Button from "../shared/Button";
import ArtistCard from "./ArtistCard";

const ArtistSection = () => {
  return (
    <section className="mt-20">
      <div className="z-[2] relative translate-y-7">
        <h2 className="text-center text-[160px] lowercase font-bold text-white -tracking-wider leading-none">
          artists
        </h2>
      </div>
      <div className="w-full flex mx-auto flex-row flex-wrap relative">
        {artists.map((artist, i) => (
          <ArtistCard key={i} artist={artist} index={i} />
        ))}
      </div>
      <div className="mx-auto w-[95%] my-10 flex justify-center ">
        <Link href="/artists" className="mb-[50px] w-fit">
          <Button variant="outline">view all</Button>
        </Link>
      </div>
    </section>
  );
};

export default ArtistSection;
