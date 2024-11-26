import ArtistDetails from "@/components/artists/ArtistDetails";
import { artists } from "@/data/artists";
import { config } from "@/utils/config";
import React from "react";

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  const artist = artists.find((artist) => artist.slug === slug);

  return {
    title: artist?.name,
    description: artist?.description,
    image: artist?.imageUrl,
    canonical: `${config.SITE_URL}/artists/${slug}`,
    openGraph: {
      type: "website",
      url: `${config.SITE_URL}artists/${slug}`,
      title: artist?.name,
      description: artist?.description,
      images: [
        {
          url: artist?.imageUrl,
          alt: artist?.name,
          width: 1200,
          height: 630,
        },
      ],
    },
  };
};

export const generateStaticParams = async () => {
  try {
    return artists.map((artist) => ({
      slug: artist.slug,
    }));
  } catch (error) {
    console.log(error);
    return [];
  }
};

const ArtistDetailspage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;

  const artist = artists.find((artist) => artist.slug === slug);

  if (!artist) return <div>Artist not found</div>;

  return (
    <div>
      <ArtistDetails artist={artist} />
    </div>
  );
};

export default ArtistDetailspage;
