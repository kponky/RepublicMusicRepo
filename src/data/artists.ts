import { Artist } from "@/interfaces/artist.interface";
import {
  FaFacebook,
  FaInstagram,
  FaSpotify,
  FaTiktok,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

export const artists: Artist[] = [
  {
    id: 1,
    name: "Taylor Swift",
    website: "https://www.taylorswift.com",
    description:
      "Taylor Swift is a global pop icon known for her narrative songwriting, spanning genres from country to pop.",

    imageUrl:
      "https://www.republicrecords.com/files/2019/04/Taylor-Swift-1.jpg",
    socialLinks: {
      instagram: {
        link: "https://instagram.com/taylorswift",
        icon: FaInstagram,
      },
      twitter: { link: "https://twitter.com/taylorswift13", icon: FaTwitter },
      youtube: { link: "https://youtube.com/taylorswift", icon: FaYoutube },
      spotify: { link: "https://spotify.com/taylorswift", icon: FaSpotify },
      tiktok: { link: "https://tiktok.com/@taylorswift", icon: FaTiktok },
    },
  },
  {
    id: 2,
    name: "Beyoncé",
    website: "https://www.beyonce.com",
    description: "Beyoncé, often called Queen Bey, is a powerhouse vocalist, performer, and advocate for social justice.",

    imageUrl:
      "https://www.republicrecords.com/files/2017/03/000096050002-edited-sRGB.jpg",
    socialLinks: {
      instagram: { link: "https://instagram.com/beyonce", icon: FaInstagram },
      twitter: { link: "https://twitter.com/beyonce", icon: FaTwitter },
      youtube: { link: "https://youtube.com/beyonce", icon: FaYoutube },
      spotify: { link: "https://spotify.com/beyonce", icon: FaSpotify },
      facebook: { link: "https://facebook.com/beyonce", icon: FaFacebook },
    },
  },
  {
    id: 3,
    name: "Ed Sheeran",
    website: "https://www.edsheeran.com",
    description: "Ed Sheeran is a Canadian singer, songwriter, and actor.",
    imageUrl:
      "https://www.republicrecords.com/files/2017/03/AG-Press-Photo-scaled.jpg",
    socialLinks: {
      instagram: {
        link: "https://instagram.com/teddysphotos",
        icon: FaInstagram,
      },
      twitter: { link: "https://twitter.com/edsheeran", icon: FaTwitter },
      youtube: { link: "https://youtube.com/edsheeran", icon: FaYoutube },
      spotify: { link: "https://spotify.com/edsheeran", icon: FaSpotify },
      facebook: { link: "https://facebook.com/edsheeran", icon: FaFacebook },
    },
  },
  {
    id: 4,
    name: "Ariana Grande",
    website: "https://www.arianagrande.com",
    description: "Ariana Grande combines powerhouse vocals with pop and R&B influences, earning her numerous accolades.",
    imageUrl:
      "https://www.republicrecords.com/files/2016/08/Nicki-Minaj-Website-scaled.jpg",
    socialLinks: {
      instagram: {
        link: "https://instagram.com/arianagrande",
        icon: FaInstagram,
      },
      twitter: { link: "https://twitter.com/ArianaGrande", icon: FaTwitter },
      youtube: { link: "https://youtube.com/arianagrande", icon: FaYoutube },
      spotify: { link: "https://spotify.com/arianagrande", icon: FaSpotify },
      tiktok: { link: "https://tiktok.com/@arianagrande", icon: FaTiktok },
    },
  },
  {
    id: 5,
    name: "Drake",
    website: "https://www.drakeofficial.com",
    description: "Drake is a rapper and producer blending introspection and chart-topping beats, redefining modern hip-hop.",
    imageUrl:
      "https://www.republicrecords.com/files/2017/03/AG-Press-Photo-scaled.jpg",
    socialLinks: {
      instagram: {
        link: "https://instagram.com/champagnepapi",
        icon: FaInstagram,
      },
      twitter: { link: "https://twitter.com/Drake", icon: FaTwitter },
      youtube: { link: "https://youtube.com/Drake", icon: FaYoutube },
      spotify: { link: "https://spotify.com/drake", icon: FaSpotify },
      facebook: { link: "https://facebook.com/Drake", icon: FaFacebook },
    },
  },
  {
    id: 6,
    name: "Katy Perry",
    website: "https://www.katyperry.com",
    description: "Katy Perry, often referred to as the-Queen of Pop, is a Grammy-winning singer, songwriter, and actress who has become a global phenomenon. Known for her vibrant and bold personality, Perry's music has captivated millions worldwide, inspiring countless artists to embrace her unique sound.",
    imageUrl:
      "https://www.republicrecords.com/files/2019/04/Taylor-Swift-1.jpg",
    socialLinks: {
      instagram: { link: "https://instagram.com/katyperry", icon: FaInstagram },
      twitter: { link: "https://twitter.com/katyperry", icon: FaTwitter },
      youtube: { link: "https://youtube.com/katyperry", icon: FaYoutube },
      spotify: { link: "https://spotify.com/katyperry", icon: FaSpotify },
      facebook: { link: "https://facebook.com/katyperry", icon: FaFacebook },
    },
  },
  {
    id: 7,
    name: "Justin Bieber",
    website: "https://www.justinbiebermusic.com",
    description: "An international pop sensation, Justin Bieber's journey from YouTube covers to Grammy-winning artist epitomizes modern music success. Known for his silky voice and chart-topping hits, Bieber seamlessly blends pop, R&B, and electronic elements, captivating millions worldwide.",
    imageUrl:
      "https://www.republicrecords.com/files/2016/08/Nicki-Minaj-Website-scaled.jpg",
    socialLinks: {
      instagram: {
        link: "https://instagram.com/justinbieber",
        icon: FaInstagram,
      },
      twitter: { link: "https://twitter.com/justinbieber", icon: FaTwitter },
      youtube: { link: "https://youtube.com/justinbieber", icon: FaYoutube },
      spotify: { link: "https://spotify.com/justinbieber", icon: FaSpotify },
      tiktok: { link: "https://tiktok.com/@justinbieber", icon: FaTiktok },
    },
  },
  {
    id: 8,
    name: "Rihanna",
    website: "https://www.rihanna.com",
    description: "A global icon, Rihanna is celebrated for her genre-defying music, ranging from pop and R&B to reggae and dance. Beyond her powerhouse vocals, she’s a fashion mogul and philanthropist, redefining what it means to be a multifaceted artist and entrepreneur.",
    imageUrl:
      "https://www.republicrecords.com/files/2017/03/000096050002-edited-sRGB.jpg",
    socialLinks: {
      instagram: {
        link: "https://instagram.com/badgalriri",
        icon: FaInstagram,
      },
      twitter: { link: "https://twitter.com/rihanna", icon: FaTwitter },
      youtube: { link: "https://youtube.com/rihanna", icon: FaYoutube },
      spotify: { link: "https://spotify.com/rihanna", icon: FaSpotify },
      facebook: { link: "https://facebook.com/rihanna", icon: FaFacebook },
    },
  },
  {
    id: 9,
    name: "Billie Eilish",
    website: "https://www.billieeilish.com",
    description: "Billie Eilish is a groundbreaking artist whose hauntingly unique voice and minimalist production revolutionized pop music. Known for her introspective lyrics and avant-garde style, she has redefined what it means to be a young artist in the 21st century.",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Billie_Eilish_2020.jpg/800px-Billie_Eilish_2020.jpg",
    socialLinks: {
      instagram: {
        link: "https://instagram.com/billieeilish",
        icon: FaInstagram,
      },
      twitter: { link: "https://twitter.com/billieeilish", icon: FaTwitter },
      youtube: { link: "https://youtube.com/billieeilish", icon: FaYoutube },
      spotify: { link: "https://spotify.com/billieeilish", icon: FaSpotify },
      tiktok: { link: "https://tiktok.com/@billieeilish", icon: FaTiktok },
    },
  },
  {
    id: 10,
    name: "Post Malone",
    website: "https://www.postmalone.com",
    description: "Post Malone’s distinctive fusion of hip-hop, pop, and rock has cemented his place as a music innovator. Known for his introspective lyrics and genre-bending sound, he has become a voice for the generation, blending vulnerability with swagger.",
    imageUrl:
      "https://www.republicrecords.com/files/2017/03/AG-Press-Photo-scaled.jpg",
    socialLinks: {
      instagram: {
        link: "https://instagram.com/postmalone",
        icon: FaInstagram,
      },
      twitter: { link: "https://twitter.com/postmalone", icon: FaTwitter },
      youtube: { link: "https://youtube.com/postmalone", icon: FaYoutube },
      spotify: { link: "https://spotify.com/postmalone", icon: FaSpotify },
      facebook: { link: "https://facebook.com/postmalone", icon: FaFacebook },
    },
  },
  {
    id: 11,
    name: "Shawn Mendes",
    website: "https://www.shawnmendesofficial.com",
    description: "Shawn Mendes’s heartfelt ballads and soulful voice have earned him a dedicated global fanbase. Combining pop with acoustic sensibilities, his music reflects themes of love, vulnerability, and self-discovery, resonating deeply with audiences.",
    imageUrl:
      "https://www.republicrecords.com/files/2016/08/Nicki-Minaj-Website-scaled.jpg",
    socialLinks: {
      instagram: {
        link: "https://instagram.com/shawnmendes",
        icon: FaInstagram,
      },
      twitter: { link: "https://twitter.com/shawnmendes", icon: FaTwitter },
      youtube: { link: "https://youtube.com/shawnmendes", icon: FaYoutube },
      spotify: { link: "https://spotify.com/shawnmendes", icon: FaSpotify },
      facebook: { link: "https://facebook.com/shawnmendes", icon: FaFacebook },
    },
  },
  {
    id: 12,
    name: "Sam Smith",
    website: "https://www.samsmithworld.com",
    // description: "Sam Smith’s unique blend of pop, rock, and electronic music has earned him a global fanbase. Known for his powerful vocals and soulful lyrics, he has become a voice for the generation, blending vulnerability with swagger.",
    description: "Sam Smith’s soaring vocals and poignant lyrics have made them a beacon of emotional honesty in music. With themes of love, heartbreak, and identity, their genre-spanning repertoire blends soul, pop, and electronic sounds.",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Sam_Smith_2019.jpg/800px-Sam_Smith_2019.jpg",
    socialLinks: {
      instagram: { link: "https://instagram.com/samsmith", icon: FaInstagram },
      twitter: { link: "https://twitter.com/samsmith", icon: FaTwitter },
      youtube: { link: "https://youtube.com/samsmith", icon: FaYoutube },
      spotify: { link: "https://spotify.com/samsmith", icon: FaSpotify },
      facebook: { link: "https://facebook.com/samsmith", icon: FaFacebook },
    },
  },
  {
    id: 13,
    name: "Halsey",
    website: "https://www.halsey.com",
    description: "Halsey is a fearless storyteller whose music oscillates between pop, indie, and alternative styles. Known for their deeply personal lyrics and genre-defying sound, they’ve become a voice for self-expression and empowerment.",
    imageUrl:
      "https://www.republicrecords.com/files/2017/03/000096050002-edited-sRGB.jpg",
    socialLinks: {
      instagram: { link: "https://instagram.com/iamhalsey", icon: FaInstagram },
      twitter: { link: "https://twitter.com/halsey", icon: FaTwitter },
      youtube: { link: "https://youtube.com/halsey", icon: FaYoutube },
      spotify: { link: "https://spotify.com/halsey", icon: FaSpotify },
      tiktok: { link: "https://tiktok.com/@halsey", icon: FaTiktok },
    },
  },
  {
    id: 14,
    name: "Charlie Puth",
    website: "https://www.charlieputh.com",
    description: "A prodigy in songwriting and production, Charlie Puth combines catchy melodies with impeccable musicality. Known for his perfect pitch and genre-blending hits, he bridges pop, R&B, and electronic music effortlessly.",
    imageUrl:
      "https://www.republicrecords.com/files/2016/08/Nicki-Minaj-Website-scaled.jpg",
    socialLinks: {
      instagram: {
        link: "https://instagram.com/charlieputh",
        icon: FaInstagram,
      },
      twitter: { link: "https://twitter.com/charlieputh", icon: FaTwitter },
      youtube: { link: "https://youtube.com/charlieputh", icon: FaYoutube },
      spotify: { link: "https://spotify.com/charlieputh", icon: FaSpotify },
      facebook: { link: "https://facebook.com/charlieputh", icon: FaFacebook },
    },
  },
  {
    id: 15,
    name: "Sia",
    website: "https://www.siamusic.net",
    description: "A prodigy in songwriting and production, Charlie Puth combines catchy melodies with impeccable musicality. Known for his perfect pitch and genre-blending hits, he bridges pop, R&B, and electronic music effortlessly.",
    imageUrl:
      "https://www.republicrecords.com/files/2017/03/AG-Press-Photo-scaled.jpg",
    socialLinks: {
      instagram: { link: "https://instagram.com/sia", icon: FaInstagram },
      twitter: { link: "https://twitter.com/sia", icon: FaTwitter },
      youtube: { link: "https://youtube.com/sia", icon: FaYoutube },
      spotify: { link: "https://spotify.com/sia", icon: FaSpotify },
      facebook: { link: "https://facebook.com/sia", icon: FaFacebook },
    },
  },
  {
    id: 16,
    name: "Khalid",
    website: "https://www.khalidofficial.com",
    description:"Khalid’s smooth vocals and relatable lyrics have made him a favorite in modern R&B and pop. Known for his laid-back vibe, his music often explores themes of youth, love, and self-discovery, resonating with listeners worldwide.",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Khalid_2019.jpg/800px-Khalid_2019.jpg",
    socialLinks: {
      instagram: {
        link: "https://instagram.com/thegreatkhalid",
        icon: FaInstagram,
      },
      twitter: { link: "https://twitter.com/thegreatkhalid", icon: FaTwitter },
      youtube: { link: "https://youtube.com/khalid", icon: FaYoutube },
      spotify: { link: "https://spotify.com/khalid", icon: FaSpotify },
      facebook: { link: "https://facebook.com/khalid", icon: FaFacebook },
    },
  },
  {
    id: 17,
    name: "Maroon 5",
    website: "https://www.maroon5.com",
    description: "Fronted by the charismatic Adam Levine, Maroon 5 has dominated the charts with their infectious blend of pop, rock, and funk. Their genre-spanning hits and dynamic performances have made them a household name.",
    imageUrl:
      "https://www.republicrecords.com/files/2016/08/Nicki-Minaj-Website-scaled.jpg",
    socialLinks: {
      instagram: { link: "https://instagram.com/maroon5", icon: FaInstagram },
      twitter: { link: "https://twitter.com/maroon5", icon: FaTwitter },
      youtube: { link: "https://youtube.com/maroon5", icon: FaYoutube },
      spotify: { link: "https://spotify.com/maroon5", icon: FaSpotify },
      facebook: { link: "https://facebook.com/maroon5", icon: FaFacebook },
    },
  },
  {
    id: 18,
    name: "Nicki Minaj",
    website: "https://www.nickiminaj.com",
    description: "Nicki Minaj is a rap queen and lyrical genius whose bold persona and genre-defying music have reshaped the hip-hop landscape. Known for her razor-sharp bars and vibrant style, she is a cultural and musical icon.",
    imageUrl:
      "https://www.republicrecords.com/files/2019/04/Taylor-Swift-1.jpg",
    socialLinks: {
      instagram: {
        link: "https://instagram.com/nickiminaj",
        icon: FaInstagram,
      },
      twitter: { link: "https://twitter.com/nickiminaj", icon: FaTwitter },
      youtube: { link: "https://youtube.com/nickiminaj", icon: FaYoutube },
      spotify: { link: "https://spotify.com/nickiminaj", icon: FaSpotify },
      facebook: { link: "https://facebook.com/nickiminaj", icon: FaFacebook },
    },
  },
  {
    id: 19,
    name: "Dua Lipa",
    website: "https://www.dualipa.com",
    description: "Dua Lipa’s sultry voice and disco-inspired sound have reignited the dance-pop scene. Known for her empowering lyrics and high-energy tracks, she’s become a global sensation, blending retro influences with a modern edge.",
    imageUrl:
      "https://www.republicrecords.com/files/2017/03/AG-Press-Photo-scaled.jpg",
    socialLinks: {
      instagram: { link: "https://instagram.com/dualipa", icon: FaInstagram },
      twitter: { link: "https://twitter.com/DUALIPA", icon: FaTwitter },
      youtube: { link: "https://youtube.com/dualipa", icon: FaYoutube },
      spotify: { link: "https://spotify.com/dualipa", icon: FaSpotify },
      facebook: { link: "https://facebook.com/dualipa", icon: FaFacebook },
    },
  },
  {
    id: 20,
    name: "Lil Nas X",
    website: "https://www.lilnasx.com",
    description: "Lil Nas X broke barriers with his genre-blending hit Old Town Road and has continued to challenge norms with his fearless creativity. A trailblazer in music and LGBTQ+ representation, his artistry combines pop, rap, and country elements.",
    imageUrl:
      "https://www.republicrecords.com/files/2019/04/Taylor-Swift-1.jpg",
    socialLinks: {
      instagram: { link: "https://instagram.com/lilnasx", icon: FaInstagram },
      twitter: { link: "https://twitter.com/LilNasX", icon: FaTwitter },
      youtube: { link: "https://youtube.com/lilnasx", icon: FaYoutube },
      spotify: { link: "https://spotify.com/lilnasx", icon: FaSpotify },
      tiktok: { link: "https://tiktok.com/@lilnasx", icon: FaTiktok },
    },
  },
];
