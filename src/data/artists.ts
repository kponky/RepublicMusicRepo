import { IconType } from "react-icons";
import { FaInstagram, FaTwitter, FaYoutube, FaSpotify, FaTiktok, FaFacebook } from "react-icons/fa";

export interface Artist {
  id: number;
  name: string;
  website: string;
  imageUrl: string;
  socialLinks?: Social
}

interface Social {
  instagram?: { link: string; icon: IconType };
  twitter?: { link: string; icon: IconType };
  youtube?: { link: string; icon: IconType };
  spotify?: { link: string; icon: IconType };
  tiktok?: { link: string; icon: IconType };
  facebook?: { link: string; icon: IconType };
}

export const artists: Artist[] = [
  {
    id: 1,
    name: "Taylor Swift",
    website: "https://www.taylorswift.com",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Taylor_Swift_2019_by_Gage_Skidmore.jpg/800px-Taylor_Swift_2019_by_Gage_Skidmore.jpg",
    socialLinks: {
      instagram: { link: "https://instagram.com/taylorswift", icon: FaInstagram  },
      twitter: { link: "https://twitter.com/taylorswift13", icon: FaTwitter  },
      youtube: { link: "https://youtube.com/taylorswift", icon: FaYoutube  },
      spotify: { link: "https://spotify.com/taylorswift", icon: FaSpotify  },
      tiktok: { link: "https://tiktok.com/@taylorswift", icon: FaTiktok  },
    },
  },
  {
    id: 2,
    name: "Beyoncé",
    website: "https://www.beyonce.com",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Beyonce_2019.jpg/800px-Beyonce_2019.jpg",
    socialLinks: {
      instagram: { link: "https://instagram.com/beyonce", icon: FaInstagram  },
      twitter: { link: "https://twitter.com/beyonce", icon: FaTwitter  },
      youtube: { link: "https://youtube.com/beyonce", icon: FaYoutube  },
      spotify: { link: "https://spotify.com/beyonce", icon: FaSpotify  },
      facebook: { link: "https://facebook.com/beyonce", icon: FaFacebook  },
    },
  },
  {
    id: 3,
    name: "Ed Sheeran",
    website: "https://www.edsheeran.com",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Ed_Sheeran_2019.jpg/800px-Ed_Sheeran_2019.jpg",
    socialLinks: {
      instagram: { link: "https://instagram.com/teddysphotos", icon: FaInstagram  },
      twitter: { link: "https://twitter.com/edsheeran", icon: FaTwitter  },
      youtube: { link: "https://youtube.com/edsheeran", icon: FaYoutube  },
      spotify: { link: "https://spotify.com/edsheeran", icon: FaSpotify  },
      facebook: { link: "https://facebook.com/edsheeran", icon: FaFacebook  },
    },
  },
  {
    id: 4,
    name: "Ariana Grande",
    website: "https://www.arianagrande.com",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Ariana_Grande_2019.jpg/800px-Ariana_Grande_2019.jpg",
    socialLinks: {
      instagram: { link: "https://instagram.com/arianagrande", icon: FaInstagram  },
      twitter: { link: "https://twitter.com/ArianaGrande", icon: FaTwitter  },
      youtube: { link: "https://youtube.com/arianagrande", icon: FaYoutube  },
      spotify: { link: "https://spotify.com/arianagrande", icon: FaSpotify  },
      tiktok: { link: "https://tiktok.com/@arianagrande", icon: FaTiktok  },
    },
  },
  {
    id: 5,
    name: "Drake",
    website: "https://www.drakeofficial.com",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Drake_2019.jpg/800px-Drake_2019.jpg",
    socialLinks: {
      instagram: { link: "https://instagram.com/champagnepapi", icon: FaInstagram  },
      twitter: { link: "https://twitter.com/Drake", icon: FaTwitter  },
      youtube: { link: "https://youtube.com/Drake", icon: FaYoutube  },
      spotify: { link: "https://spotify.com/drake", icon: FaSpotify  },
      facebook: { link: "https://facebook.com/Drake", icon: FaFacebook  },
    },
  },
  {
    id: 6,
    name: "Katy Perry",
    website: "https://www.katyperry.com",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Katy_Perry_2018.jpg/800px-Katy_Perry_2018.jpg",
    socialLinks: {
      instagram: { link: "https://instagram.com/katyperry", icon: FaInstagram  },
      twitter: { link: "https://twitter.com/katyperry", icon: FaTwitter  },
      youtube: { link: "https://youtube.com/katyperry", icon: FaYoutube  },
      spotify: { link: "https://spotify.com/katyperry", icon: FaSpotify  },
      facebook: { link: "https://facebook.com/katyperry", icon: FaFacebook  },
    },
  },
  {
    id: 7,
    name: "Justin Bieber",
    website: "https://www.justinbiebermusic.com",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Justin_Bieber_2016.jpg/800px-Justin_Bieber_2016.jpg",
    socialLinks: {
      instagram: { link: "https://instagram.com/justinbieber", icon: FaInstagram  },
      twitter: { link: "https://twitter.com/justinbieber", icon: FaTwitter  },
      youtube: { link: "https://youtube.com/justinbieber", icon: FaYoutube  },
      spotify: { link: "https://spotify.com/justinbieber", icon: FaSpotify  },
      tiktok: { link: "https://tiktok.com/@justinbieber", icon: FaTiktok  },
    },
  },
  {
    id: 8,
    name: "Rihanna",
    website: "https://www.rihanna.com",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Rihanna_2019.jpg/800px-Rihanna_2019.jpg",
    socialLinks: {
      instagram: { link: "https://instagram.com/badgalriri", icon: FaInstagram  },
      twitter: { link: "https://twitter.com/rihanna", icon: FaTwitter  },
      youtube: { link: "https://youtube.com/rihanna", icon: FaYoutube  },
      spotify: { link: "https://spotify.com/rihanna", icon: FaSpotify  },
      facebook: { link: "https://facebook.com/rihanna", icon: FaFacebook  },
    },
  },
  {
    id: 9,
    name: "Billie Eilish",
    website: "https://www.billieeilish.com",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Billie_Eilish_2020.jpg/800px-Billie_Eilish_2020.jpg",
    socialLinks: {
      instagram: { link: "https://instagram.com/billieeilish", icon: FaInstagram  },
      twitter: { link: "https://twitter.com/billieeilish", icon: FaTwitter  },
      youtube: { link: "https://youtube.com/billieeilish", icon: FaYoutube  },
      spotify: { link: "https://spotify.com/billieeilish", icon: FaSpotify  },
      tiktok: { link: "https://tiktok.com/@billieeilish", icon: FaTiktok  },
    },
  },
  {
    id: 10,
    name: "Post Malone",
    website: "https://www.postmalone.com",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Post_Malone_2020.jpg/800px-Post_Malone_2020.jpg",
    socialLinks: {
      instagram: { link: "https://instagram.com/postmalone", icon: FaInstagram  },
      twitter: { link: "https://twitter.com/postmalone", icon: FaTwitter  },
      youtube: { link: "https://youtube.com/postmalone", icon: FaYoutube  },
      spotify: { link: "https://spotify.com/postmalone", icon: FaSpotify  },
      facebook: { link: "https://facebook.com/postmalone", icon: FaFacebook  },
    },
  },
  {
    id: 11,
    name: "Shawn Mendes",
    website: "https://www.shawnmendesofficial.com",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Shawn_Mendes_2019.jpg/800px-Shawn_Mendes_2019.jpg",
    socialLinks: {
      instagram: { link: "https://instagram.com/shawnmendes", icon: FaInstagram  },
      twitter: { link: "https://twitter.com/shawnmendes", icon: FaTwitter  },
      youtube: { link: "https://youtube.com/shawnmendes", icon: FaYoutube  },
      spotify: { link: "https://spotify.com/shawnmendes", icon: FaSpotify  },
      facebook: { link: "https://facebook.com/shawnmendes", icon: FaFacebook  },
    },
  },
  {
    id: 12,
    name: "Sam Smith",
    website: "https://www.samsmithworld.com",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Sam_Smith_2019.jpg/800px-Sam_Smith_2019.jpg",
    socialLinks: {
      instagram: { link: "https://instagram.com/samsmith", icon: FaInstagram  },
      twitter: { link: "https://twitter.com/samsmith", icon: FaTwitter  },
      youtube: { link: "https://youtube.com/samsmith", icon: FaYoutube  },
      spotify: { link: "https://spotify.com/samsmith", icon: FaSpotify  },
      facebook: { link: "https://facebook.com/samsmith", icon: FaFacebook  },
    },
  },
  {
    id: 13,
    name: "Halsey",
    website: "https://www.halsey.com",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Halsey_2019.jpg/800px-Halsey_2019.jpg",
    socialLinks: {
      instagram: { link: "https://instagram.com/iamhalsey", icon: FaInstagram  },
      twitter: { link: "https://twitter.com/halsey", icon: FaTwitter  },
      youtube: { link: "https://youtube.com/halsey", icon: FaYoutube  },
      spotify: { link: "https://spotify.com/halsey", icon: FaSpotify  },
      tiktok: { link: "https://tiktok.com/@halsey", icon: FaTiktok  },
    },
  },
  {
    id: 14,
    name: "Charlie Puth",
    website: "https://www.charlieputh.com",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Charlie_Puth_2020.jpg/800px-Charlie_Puth_2020.jpg",
    socialLinks: {
      instagram: { link: "https://instagram.com/charlieputh", icon: FaInstagram  },
      twitter: { link: "https://twitter.com/charlieputh", icon: FaTwitter  },
      youtube: { link: "https://youtube.com/charlieputh", icon: FaYoutube  },
      spotify: { link: "https://spotify.com/charlieputh", icon: FaSpotify  },
      facebook: { link: "https://facebook.com/charlieputh", icon: FaFacebook  },
    },
  },
  {
    id: 15,
    name: "Sia",
    website: "https://www.siamusic.net",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Sia_2019.jpg/800px-Sia_2019.jpg",
    socialLinks: {
      instagram: { link: "https://instagram.com/sia", icon: FaInstagram  },
      twitter: { link: "https://twitter.com/sia", icon: FaTwitter  },
      youtube: { link: "https://youtube.com/sia", icon: FaYoutube  },
      spotify: { link: "https://spotify.com/sia", icon: FaSpotify  },
      facebook: { link: "https://facebook.com/sia", icon: FaFacebook  },
    },
  },
  {
    id: 16,
    name: "Khalid",
    website: "https://www.khalidofficial.com",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Khalid_2019.jpg/800px-Khalid_2019.jpg",
    socialLinks: {
      instagram: { link: "https://instagram.com/thegreatkhalid", icon: FaInstagram  },
      twitter: { link: "https://twitter.com/thegreatkhalid", icon: FaTwitter  },
      youtube: { link: "https://youtube.com/khalid", icon: FaYoutube  },
      spotify: { link: "https://spotify.com/khalid", icon: FaSpotify  },
      facebook: { link: "https://facebook.com/khalid", icon: FaFacebook  },
    },
  },
  {
    id: 17,
    name: "Maroon 5",
    website: "https://www.maroon5.com",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Maroon_5_2020.jpg/800px-Maroon_5_2020.jpg",
    socialLinks: {
      instagram: { link: "https://instagram.com/maroon5", icon: FaInstagram  },
      twitter: { link: "https://twitter.com/maroon5", icon: FaTwitter  },
      youtube: { link: "https://youtube.com/maroon5", icon: FaYoutube  },
      spotify: { link: "https://spotify.com/maroon5", icon: FaSpotify  },
      facebook: { link: "https://facebook.com/maroon5", icon: FaFacebook  },
    },
  },
  {
    id: 18,
    name: "Nicki Minaj",
    website: "https://www.nickiminaj.com",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Nicki_Minaj_2019.jpg/800px-Nicki_Minaj_2019.jpg",
    socialLinks: {
      instagram: { link: "https://instagram.com/nickiminaj", icon: FaInstagram  },
      twitter: { link: "https://twitter.com/nickiminaj", icon: FaTwitter  },
      youtube: { link: "https://youtube.com/nickiminaj", icon: FaYoutube  },
      spotify: { link: "https://spotify.com/nickiminaj", icon: FaSpotify  },
      facebook: { link: "https://facebook.com/nickiminaj", icon: FaFacebook  },
    },
  },
  {
    id: 19,
    name: "Dua Lipa",
    website: "https://www.dualipa.com",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Dua_Lipa_2021.jpg/800px-Dua_Lipa_2021.jpg",
    socialLinks: {
      instagram: { link: "https://instagram.com/dualipa", icon: FaInstagram  },
      twitter: { link: "https://twitter.com/DUALIPA", icon: FaTwitter  },
      youtube: { link: "https://youtube.com/dualipa", icon: FaYoutube  },
      spotify: { link: "https://spotify.com/dualipa", icon: FaSpotify  },
      facebook: { link: "https://facebook.com/dualipa", icon: FaFacebook  },
    },
  },
  {
    id: 20,
    name: "Lil Nas X",
    website: "https://www.lilnasx.com",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Lil_Nas_X_2021.jpg/800px-Lil_Nas_X_2021.jpg",
    socialLinks: {
      instagram: { link: "https://instagram.com/lilnasx", icon: FaInstagram  },
      twitter: { link: "https://twitter.com/LilNasX", icon: FaTwitter  },
      youtube: { link: "https://youtube.com/lilnasx", icon: FaYoutube  },
      spotify: { link: "https://spotify.com/lilnasx", icon: FaSpotify  },
      tiktok: { link: "https://tiktok.com/@lilnasx", icon: FaTiktok  },
    },
  },
];
