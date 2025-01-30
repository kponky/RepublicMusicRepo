import ArtistDetails from "@/components/artists/ArtistDetails";
import { IArtist } from "@/interfaces/artist.interface";
import { getArtistById, getArtists } from "@/lib/data";
import { config } from "@/utils/config";
import React from "react";

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  const artist:IArtist =  await getArtistById(id)

  return {
    title: artist?.title_name,
    description: artist?.description,
    image: artist?.entity_featured_url,
    canonical: `${config.SITE_URL}/artists/${id}`,
    openGraph: {
      type: "website",
      url: `${config.SITE_URL}artists/${id}`,
      title: artist?.title_name,
      description: artist?.description,
      images: [
        {
          url: artist?.entity_featured_url,
          alt: artist?.title_name,
          width: 1200,
          height: 630,
        },
      ],
    },
  };
};

export const generateStaticParams = async () => {
  try {
    const res = await getArtists(1000);
    const artists:IArtist[] = res?.data.data;
    
    return artists.map((artist) => ({
      id: artist.id.toString(),
    }));
  } catch (error) {
    console.log(error);
    return [];
  }
};

const ArtistDetailspage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;

  const artist =  await getArtistById(id)

  if (!artist) return <div>Artist not found</div>;

  return (
    <div>
      <ArtistDetails artist={artist} />
    </div>
  );
};

export default ArtistDetailspage;
