import { Artist } from "@/data/artists";
import Link from "next/link";
import React from "react";
import { FaTiktok } from "react-icons/fa6";

const ArtistCard = ({ artist }: { artist: Artist }) => {
  return (
    <div className="artist-card w-1/4 relative group">
      {/* bg image */}
      <div
        className="artist-image"
        style={{ backgroundImage: `url(${artist.imageUrl})` }}
      ></div>
      {/* overlay */}
      <div className="artist-overlay flex justify-between w-full h-full z-[2] p-5 absolute top-0 left-0 opacity-0 group-hover:opacity-100 bg-[#aba48b56]">
        <div>
          <Link href={artist.website} className="text-primary text-base">view website</Link>
        </div>
        <div>
          <ul className="flex items-center gap-2">
            {artist.socialLinks &&
              Object.entries(artist.socialLinks).map(
                ([key, { link, icon: Icon }]) => (
                  <li>
                    <Link href={link} className="text-primary text-base">
                      <Icon size={20} />
                    </Link>
                  </li>
                )
              )}
          </ul>
        </div>
      </div>
      <h3 className="text-[40px] absolute bottom-5 left-5 leading-none text-white artist-name">
        {artist.name}
      </h3>
    </div>
  );
};

export default ArtistCard;
