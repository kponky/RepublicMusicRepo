import { Artist } from "@/interfaces/artist.interface";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeInUp } from "@/utils/animationVariants";

const ArtistCard = ({ artist, index }: { artist: Artist; index: number }) => {
  return (
    <motion.div
      className="artist-card lg:w-1/4 w-1/2 relative group"
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      {/* bg image */}
      <div
        className="artist-image"
        style={{ backgroundImage: `url(${artist.imageUrl})` }}
      ></div>
      {/* overlay */}
      <div className="artist-overlay flex justify-between w-full h-full z-[2] p-5 absolute top-0 left-0 opacity-0 group-hover:opacity-100">
        <div>
          <Link
            href={artist.website}
            className="text-primary text-base hover:text-white transition-colors duration-300 ease-in-out"
          >
            view website
          </Link>
        </div>
        <div>
          <ul className="flex items-center gap-2">
            {artist.socialLinks &&
              Object.entries(artist.socialLinks).map(
                ([key, { link, icon: Icon }]) => (
                  <li key={key}>
                    <Link
                      href={link}
                      className="text-primary text-base hover:text-white transition-colors duration-300 ease-in-out"
                    >
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
    </motion.div>
  );
};

export default ArtistCard;
