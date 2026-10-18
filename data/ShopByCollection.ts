interface collections {
    id: number,
    title: string,
    description: string,
    image: string,
    link: string,
}
export const shopByCollections:collections[] = [
  {
    id: 1,
    title: "Summer Vibes",
    description: "Fresh Styles for You",
    image: "/images/summer.jpg",
    link: "/collections/summer",
  },
  {
    id: 2,
    title: "Tech Essentials",
    description: "Upgrade Your Life",
    image: "/images/tech.jpg",
    link: "/collections/tech",
  },
  {
    id: 3,
    title: "Beauty & Skincare",
    description: "Glow Naturally",
    image: "/images/beauty.jpg",
    link: "/collections/beauty",
  },
  {
    id: 4,
    title: "Home Decor",
    description: "Make It Cozy",
    image: "/images/home.jpg",
    link: "/collections/home",
  },
];