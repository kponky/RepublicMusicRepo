import ArtistDetails from "@/components/artists/ArtistDetails";
import { artists } from "@/data/artists";
import { config } from "@/utils/config";
import React from "react";

interface IArtist {
  params: { slug: string };
}

export const generateMetadata = async ({ params }: IArtist) => {
  const artistSlug = params.slug;
  const artist = artists.find((artist) => artist.slug === artistSlug);

  return {
    title: artist?.name,
    description: artist?.description,
    image: artist?.imageUrl,
    canonical: `${config.SITE_URL}/artists/${artistSlug}`,
    openGraph: {
      type: "website",
      url: `${config.SITE_URL}artists/${artistSlug}`,
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
  }
};

const ArtistDetailspage = async ({ params }: IArtist) => {
  const { slug } = params;

  return (
    <div>
      <ArtistDetails slug={slug} />
    </div>
  );
};

export default ArtistDetailspage;
