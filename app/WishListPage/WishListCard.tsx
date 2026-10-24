"use client";
import { ProductCard } from "@/components/Homepage/ProductCard";
import { useAppSelector } from "@/lib/hooks";
import { HomeProduct } from "@/types/product";

export default  function WishListCard(){
    const favoriteData = useAppSelector((state) => state.favorite.favorite)

    return(
        <div className="flex-1">
            {favoriteData.length > 0 ? (
                <div className="grid grid-cols-2 gap-5 p-5 md:grid-cols-3 lg:grid-cols-5 ">
                    {favoriteData.map((item) => (
                        <ProductCard key={item.id} item={item} />
                    ))}
                </div>
                ) : (<div className="flex min-h-60 items-center justify-center">
                        <p className="text-gray-500">Your wishlist is empty.</p>
                    </div>
                )}
        </div>
    )
}