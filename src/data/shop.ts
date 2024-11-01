interface Article {
  id: number;
  title: string;
  price: string;
  imageUrl: string;
  link: string;
}

const articles: Article[] = [
  {
    id: 1,
    title: "Wicked: The Soundtrack (Picture Disc Vinyl)",
    price: "$51.00",
    imageUrl:
      "https://www.republicrecords.com/files/2024/10/wicked-picturediscvinyl.png",
    link: "#",
  },
  {
    id: 2,
    title: "Abbey Road (Vinyl)",
    price: "$29.99",
    imageUrl: "https://example.com/abbey-road-vinyl.png", // Replace with a valid image URL
    link: "#",
  },
  {
    id: 3,
    title: "Back in Black (CD)",
    price: "$14.99",
    imageUrl: "https://www.republicrecords.com/files/2024/10/Miranda-Lambert-Postcards-From-Texas-1LP.png'", // Replace with a valid image URL
    link: "#",
  },
  {
    id: 4,
    title: "The Dark Side of the Moon (Vinyl)",
    price: "$39.99",
    imageUrl: "https://example.com/dark-side-moon-vinyl.png", // Replace with a valid image URL
    link: "#",
  },
  {
    id: 5,
    title: "Rumours (CD)",
    price: "$18.50",
    imageUrl: "https://example.com/rumours-cd.png", // Replace with a valid image URL
    link: "#",
  },
  {
    id: 6,
    title: "Hotel California (Vinyl)",
    price: "$25.00",
    imageUrl: "https://www.republicrecords.com/files/2024/09/jeremychelsea_signedcd.png", // Replace with a valid image URL
    link: "#",
  },
  {
    id: 7,
    title: "The Wall (CD)",
    price: "$22.00",
    imageUrl: "https://example.com/the-wall-cd.png", // Replace with a valid image URL
    link: "#",
  },
  {
    id: 8,
    title: "Let It Be (Vinyl)",
    price: "$27.99",
    imageUrl: "https://example.com/let-it-be-vinyl.png", // Replace with a valid image URL
    link: "#",
  },
  {
    id: 9,
    title: "A Night at the Opera (CD)",
    price: "$16.99",
    imageUrl: "https://example.com/a-night-at-the-opera-cd.png", // Replace with a valid image URL
    link: "#",
  },
  {
    id: 10,
    title: "Born to Run (Vinyl)",
    price: "$32.50",
    imageUrl: "https://example.com/born-to-run-vinyl.png", // Replace with a valid image URL
    link: "#",
  },
];

export default articles;
