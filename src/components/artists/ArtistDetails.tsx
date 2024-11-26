import { Artist } from "@/interfaces/artist.interface";

const ArtistDetails = ({ artist }: { artist: Artist }) => {

  return (
    <div className="w-full h-full min-h-screen bg-black text-white p-8">
      <div className="flex flex-col items-center mt-16">
        <img
          src={artist.imageUrl}
          alt={artist.name}
          className="w-60 h-60 object-cover rounded-full"
        />
        <h1 className="text-4xl font-bold mt-4">{artist.name}</h1>
        <p className="mt-4 max-w-2xl text-center">{artist.description}</p>
        <div className="flex mt-6 space-x-4">
          {Object.entries(artist.socialLinks || {}).map(
            ([key, { link, icon: Icon }]) => (
              <a
                key={key}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-white transition"
              >
                <Icon size={24} />
              </a>
            )
          )}
        </div>
        <a
          href={artist.website}
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
