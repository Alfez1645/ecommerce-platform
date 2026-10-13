interface slider {
    id:number;
    tag:string;
    title:string;
    description:string;
    btnText:string;
    btnLink:string;
    image:string;
}

const sliderData:slider[] = [
  {
    id: 1,
    tag: "NEW ARRIVALS",
    title: "Upgrade Your Style",
    description: "Discover the latest fashion trends.",
    btnText: "Shop Now",
    btnLink: "/shop",
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1920&q=90",
  },
  {
    id: 2,
    tag: "TECH COLLECTION",
    title: "Technology Meets Style",
    description: "Explore the latest gadgets and accessories.",
    btnText: "Explore Now",
    btnLink: "/electronics",
    image:
      "https://images.unsplash.com/photo-1498049794561-7780e7231661?auto=format&fit=crop&w=1920&q=90",
  },
  {
    id: 3,
    tag: "BEAUTY COLLECTION",
    title: "Beauty Starts Here",
    description: "Find your everyday beauty essentials.",
    btnText: "Shop Beauty",
    btnLink: "/beauty",
    image:
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=1920&q=90",
  },
  {
    id: 4,
    tag: "HOME COLLECTION",
    title: "Make Your Home Beautiful",
    description: "Discover elegant home decor and essentials.",
    btnText: "Discover More",
    btnLink: "/home",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1920&q=90",
  },
  {
    id: 5,
    tag: "SPECIAL OFFERS",
    title: "Find Your Perfect Pair",
    description: "Discover footwear for every occasion.",
    btnText: "Shop Collection",
    btnLink: "/shoes",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1920&q=90",
  },
];

export default sliderData;

