import { IconType } from "react-icons";

export interface Artist {
  id: number;
  name: string;
  slug: string;
  website: string;
  imageUrl: string;
  description: string;
  socialLinks?: Social;
}

interface Social {
  instagram?: { link: string; icon: IconType };
  twitter?: { link: string; icon: IconType };
  youtube?: { link: string; icon: IconType };
  spotify?: { link: string; icon: IconType };
  tiktok?: { link: string; icon: IconType };
  facebook?: { link: string; icon: IconType };
}

export interface IArtist {
  id: number;
  meta_key: string;
  meta_value: string;
  title_name: string;
  description: string;
  entity_featured_url: string;
  meta_data: {
    instagram_url: string;
    x_url: string;
    youtube_url: string;
    spotify_url: string;
    facebook_url: string;
    artist_website: string;
  };
  owned_by: string | null;
  added_by: string | null;
  status: string | null;
  created_at: string;
  updated_at: string;
}
