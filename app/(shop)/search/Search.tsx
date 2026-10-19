"use client"

import { searchProducts } from "@/lib/features/SearchSlider";
import { useAppDispatch } from "@/lib/hooks";
import { useAppSelector } from "@/lib/hooks";
import { ProductCard } from "@/components/Homepage/ProductCard";
import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Loading from "@/app/loading";

export default function search() {

  
const dispatch = useAppDispatch();
const searchParams = useSearchParams();
const query = searchParams.get("q") || "";

useEffect(() => {
  if (query.trim()) {
    dispatch(searchProducts(query));
  }
}, [query, dispatch]);

const { searchResults, searchLoading, searchError } = useAppSelector(
    (state) => state.search
);

  return (
    <div>
        {searchLoading && <Loading/>}
        {searchError && <p className="w-full h-90 flex justify-center items-center font-extrabold text-2xl">{searchError}</p>}
        {!searchLoading &&
        !searchError &&
        searchResults.length === 0 && (
            <div className="w-full h-90 flex justify-center items-center font-extrabold text-2xl">No products found.</div>
        )}

        {!searchLoading && !searchError && searchResults.length > 0 && (
            <>
            <h1 className="px-5 pt-5 text-2xl font-light text-gray-500 md:text-3xl">Result "{query}"</h1>
            <div className="grid grid-cols-2 gap-5 p-5 md:grid-cols-3 lg:grid-cols-5">
                {searchResults.map((item) => (
                    <ProductCard key={item.id} item={item} />
                ))}
            </div>
            </>
        )}
    </div>
  );
}