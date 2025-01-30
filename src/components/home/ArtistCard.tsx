import { IArtist } from "@/interfaces/artist.interface";
import { fadeInUp } from "@/utils/animationVariants";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  FaFacebook,
  FaGlobe,
  FaInstagram,
  FaSpotify,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const socialIcons: { [key: string]: JSX.Element } = {
  instagram_url: <FaInstagram size={20} />,
  x_url: <FaTwitter size={20} />, // Assuming X (Twitter)
  youtube_url: <FaYoutube size={20} />,
  spotify_url: <FaSpotify size={20} />,
  facebook_url: <FaFacebook size={20} />,
  artist_website: <FaGlobe size={20} />,
};

const ArtistCard = ({ artist, index }: { artist: IArtist; index: number }) => {
  return (
    <motion.div
      className="artist-card lg:w-1/4 w-1/2 relative group"
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link
        href={`/artists/${artist.id}`} // Use artist name in URL
        passHref
        className="w-full h-full block"
      >
        {/* bg image */}

        <div
          className="artist-image"
          style={{ backgroundImage: `url(${artist.entity_featured_url})` }}
        ></div>
        {/* overlay */}

        <div className="artist-overlay flex flex-col lg:flex-row justify-start lg:justify-between w-full h-full z-[2] p-5 absolute top-0 left-0 opacity-0 group-hover:opacity-100">
          <div className="text-center">
            <Link
              href={artist.meta_data.artist_website}
              className="text-primary text-base hover:text-white transition-colors duration-300 ease-in-out"
            >
              view website
            </Link>
          </div>
          <div>
            <ul className="flex items-center justify-center gap-2 mt-[15px] lg:mt-0 ">
              {artist.meta_data &&
                Object.entries(artist.meta_data)
                  .filter(([key]) => key !== "artist_website")
                  .map(([key, url]) => {
                    if (socialIcons[key] && url) {
                      return (
                        <li key={key}>
                          <Link
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary text-base hover:text-white transition-colors duration-300 ease-in-out"
                          >
                            {socialIcons[key]}
                          </Link>
                        </li>
                      );
                    }
                    return null;
                  })}
            </ul>
          </div>
        </div>
        <h3 className="text-[20px] lg:text-[40px] absolute bottom-[10px] lg:bottom-5 lg:left-5 left-[10px] leading-none text-white artist-name">
          {artist.title_name}
        </h3>
      </Link>
    </motion.div>
  );
};

export default ArtistCard;
