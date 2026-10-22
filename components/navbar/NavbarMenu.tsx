"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavbarMenu(){
    const pathname = usePathname();

    return(
        <div className="flex w-full items-center justify-between col-span-2 lg:col-start-2 lg:row-start-1 lg:col-span-1 ">
            <Link className={pathname === "/" ? "activePage" : ""} href={"/"}><button className="font-bold  hover:text-primary border-b-2 border-transparent hover:border-primary">Home</button></Link>
            <button className="font-bold  hover:text-primary border-b-2 border-transparent hover:border-primary">Shop</button>
            <button className="font-bold  hover:text-primary border-b-2 border-transparent hover:border-primary">Category</button>
            <button className="font-bold  hover:text-primary border-b-2 border-transparent hover:border-primary">Deals</button>
            <Link className={pathname === "/about" ? "activePage" : ""} href={"/about"}><button className="font-bold  hover:text-primary border-b-2 border-transparent hover:border-primary">About</button></Link>
        </div>
    )
}