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
