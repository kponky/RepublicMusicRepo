"use client";
import { artists } from "@/data/artists";
import Link from "next/link";
import Button from "../shared/Button";
import ArtistCard from "./ArtistCard";

const ArtistSection = () => {
  return (
    <section className="mt-20 block">
      <div className="z-[3] pointer-events-none relative translate-y-[20px] lg:translate-y-[40px]">
        <h2 className="text-center text-[60px] lg:text-[160px] lowercase font-bold text-white -tracking-wider leading-[1] m-0">
          artists
        </h2>
      </div>
      <div className="w-full mx-auto flex flex-row flex-wrap relative">
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
