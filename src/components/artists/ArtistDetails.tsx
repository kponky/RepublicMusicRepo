import { IArtist } from "@/interfaces/artist.interface";
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

const ArtistDetails = ({ artist }: { artist: IArtist }) => {
  return (
    <div className="w-full h-full min-h-screen bg-black text-white p-8">
      <div className="flex flex-col items-center mt-16">
        <img
          src={artist.entity_featured_url}
          alt={artist.title_name}
          className="w-60 h-60 object-cover rounded-full"
        />
        <h1 className="text-4xl font-bold mt-4">{artist.title_name}</h1>
        <p className="mt-4 max-w-2xl text-center">{artist.description}</p>
        <div className="flex mt-6 space-x-4">
          {artist.meta_data &&
            Object.entries(artist.meta_data)
              .filter(([key]) => key !== "artist_website")
              .map(([key, url]) => {
                if (socialIcons[key] && url) {
                  return (
                    <a
                      key={key}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-white transition"
                    >
                      {socialIcons[key]}
                    </a>
                  );
                }
                return null;
              })}
        </div>
        <a
          href={artist.meta_data.artist_website}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 px-4 py-2 bg-primary text-white rounded"
        >
          Visit Website
        </a>
      </div>
    </div>
  );
};

export default ArtistDetails;
