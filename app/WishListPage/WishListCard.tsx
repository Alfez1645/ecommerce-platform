"use client";
import { ProductCard } from "@/components/Homepage/ProductCard";
import { HomeProduct } from "@/types/product";

export default  function WishListCard(){
    const favoriteData: HomeProduct[] = JSON.parse(
    localStorage.getItem("favoriteItem") || "[]"
  );;

    return(
        <div>
            {favoriteData.length > 0 ? (
                <div className="grid grid-cols-2 gap-5 p-5 md:grid-cols-3 lg:grid-cols-5">
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