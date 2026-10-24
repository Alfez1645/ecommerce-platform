"use client";
import { useAppSelector } from '@/lib/hooks';
import { Heart } from 'lucide-react';
import { ShoppingCart } from 'lucide-react';
import { User } from 'lucide-react';
import Link from 'next/link';

export default function NavActionsBtn(){
    const cartItem = useAppSelector((state) => state.cart.cartItems);

    return(
        <div className="flex items-center gap-4 justify-end lg:col-start-3 lg:row-start-1 lg:w-auto">
            <User />
            <Link href={"/WishListPage"}><Heart /></Link>
            <Link href={"/cartPage"} className="relative"><ShoppingCart />
             <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs text-white">{cartItem.length}</span>
            </Link>
        </div>
    )
}