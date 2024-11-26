// import { useRouter } from "next/router";
// import { artists } from "@/data/artists"; // Replace this with the actual path to your artists data

// const ArtistPage = () => {
//   const router = useRouter();
//   const { name } = router.query;

//   // Find the artist based on the `name` from the URL
//   const artist = artists.find((artist) => artist.name.toLowerCase().replace(/\s+/g, '-') === name);

//   if (!artist) {
//     return <div>Artist not found</div>; // Handle case where artist does not exist
//   }

//   return (
//     <div className="w-full h-full min-h-screen bg-black text-white p-8">
//       <div className="flex flex-col items-center">
//         <img
//           src={artist.imageUrl}
//           alt={artist.name}
//           className="w-60 h-60 object-cover rounded-full"
//         />
//         <h1 className="text-4xl font-bold mt-4">{artist.name}</h1>
//         <p className="mt-4 max-w-2xl text-center">{artist.description}</p>
//         <div className="flex mt-6 space-x-4">
//           {Object.entries(artist.socialLinks || {}).map(([key, { link, icon: Icon }]) => (
//             <a
//               key={key}
//               href={link}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-primary hover:text-white transition"
//             >
//               <Icon size={24} />
//             </a>
//           ))}
//         </div>
//         <a
//           href={artist.website}
//           target="_blank"
//           rel="noopener noreferrer"
//           className="mt-6 px-4 py-2 bg-primary text-white rounded"
//         >
//           Visit Website
//         </a>
//       </div>
//     </div>
//   );
// };

// export default ArtistPage;

// pages/artists/[name].tsx

import { useRouter } from "next/router";
import { artists } from "@/data/artists"; // Make sure your artist data is imported from this location

const ArtistDetails = () => {
  const router = useRouter();
  const { name } = router.query;

  const artist = artists.find((artist) => artist.name.toLowerCase().replace(/\s+/g, '-') === name);

  if (!artist) return <div>Artist not found</div>;

  return (
    <div className="w-full h-full min-h-screen bg-black text-white p-8">
      <div className="flex flex-col items-center">
        <img
          src={artist.imageUrl}
          alt={artist.name}
          className="w-60 h-60 object-cover rounded-full"
        />
        <h1 className="text-4xl font-bold mt-4">{artist.name}</h1>
        <p className="mt-4 max-w-2xl text-center">{artist.description}</p>
        <div className="flex mt-6 space-x-4">
          {Object.entries(artist.socialLinks || {}).map(([key, { link, icon: Icon }]) => (
            <a
              key={key}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-white transition"
            >
              <Icon size={24} />
            </a>
          ))}
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

