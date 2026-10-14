import {Truck,ShieldCheck,LockKeyhole,BadgeCheck, LucideIcon,} from "lucide-react";

interface trustBar {
    id: number,
    icon: LucideIcon,
    title: string,
    description: string,
    bgColor: string,
    textColor: string,
}

export const trustBarData:trustBar[] = [
  {
    id: 1,
    icon: Truck,
    title: "Free Shipping",
    description: "On orders over ₹500",
    bgColor: "bg-purple-50",
    textColor: "text-purple-600",
  },
  {
    id: 2,
    icon: ShieldCheck,
    title: "Easy Returns",
    description: "7-day hassle-free returns",
    bgColor: "bg-blue-50",
    textColor: "text-blue-600",
  },
  {
    id: 3,
    icon: LockKeyhole,
    title: "Secure Payment",
    description: "100% secure checkout",
    bgColor: "bg-green-50",
    textColor: "text-green-600",
  },
  {
    id: 4,
    icon: BadgeCheck,
    title: "Premium Quality",
    description: "Quality you can trust",
    bgColor: "bg-orange-50",
    textColor: "text-orange-600",
  },
];