import type { LucideIcon } from "lucide-react";
import {
  Shirt,
  Laptop,
  Armchair,
  Footprints,
  Sparkles,
  ShoppingBag,
  Dumbbell,
  Gift,
  LayoutGrid,
} from "lucide-react";

export interface ShopByCategory {
  id: number;
  title: string;
  subtitle: string;
  icon: LucideIcon;
  bgColor: string;
  textColor: string;
  href: string;
}

export const shopByCategoryData: ShopByCategory[] = [
  {
    id: 1,
    title: "Women",
    subtitle: "Fashion",
    icon: Shirt,
    bgColor: "bg-pink-50",
    textColor: "text-pink-600",
    href: "/shop/women",
  },
  {
    id: 2,
    title: "Men",
    subtitle: "Fashion",
    icon: Shirt,
    bgColor: "bg-blue-50",
    textColor: "text-blue-600",
    href: "/shop/men",
  },
  {
    id: 3,
    title: "Electronics",
    subtitle: "Gadgets & More",
    icon: Laptop,
    bgColor: "bg-sky-50",
    textColor: "text-sky-600",
    href: "/shop/electronics",
  },
  {
    id: 4,
    title: "Home & Living",
    subtitle: "Decor & Essentials",
    icon: Armchair,
    bgColor: "bg-amber-50",
    textColor: "text-amber-600",
    href: "/shop/home-living",
  },
  {
    id: 5,
    title: "Shoes",
    subtitle: "Footwear",
    icon: Footprints,
    bgColor: "bg-violet-50",
    textColor: "text-violet-600",
    href: "/shop/shoes",
  },
  {
    id: 6,
    title: "Beauty",
    subtitle: "Skincare & Makeup",
    icon: Sparkles,
    bgColor: "bg-rose-50",
    textColor: "text-rose-600",
    href: "/shop/beauty",
  },
  {
    id: 7,
    title: "Accessories",
    subtitle: "Bags & More",
    icon: ShoppingBag,
    bgColor: "bg-purple-50",
    textColor: "text-purple-600",
    href: "/shop/accessories",
  },
  {
    id: 8,
    title: "Sports",
    subtitle: "Active Lifestyle",
    icon: Dumbbell,
    bgColor: "bg-orange-50",
    textColor: "text-orange-600",
    href: "/shop/sports",
  },
  {
    id: 9,
    title: "Toys",
    subtitle: "Kids & Fun",
    icon: Gift,
    bgColor: "bg-yellow-50",
    textColor: "text-yellow-600",
    href: "/shop/toys",
  },
  {
    id: 10,
    title: "More",
    subtitle: "Explore All",
    icon: LayoutGrid,
    bgColor: "bg-indigo-50",
    textColor: "text-indigo-600",
    href: "/shop",
  },
];