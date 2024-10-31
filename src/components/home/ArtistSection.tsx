import React from "react";
import ArtistCard from "./ArtistCard";
import Link from "next/link";
import Button from "../shared/Button";

const ArtistSection = () => {
  return (
    <section className="mt-20">
      <div className="z-[1] translate-y-10 relative">
        <h2 className="text-center text-[160px] lowercase font-bold text-white -tracking-wider leading-none">
          artists
        </h2>
      </div>
      <div className="w-full flex mx-auto flex-row flex-wrap">
        {[...Array(20)].map((_, i) => (
          <ArtistCard key={i} />
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
