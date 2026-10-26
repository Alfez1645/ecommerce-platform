"use client"
import AddToCart from "@/components/AddToCartBtn";
import FavoriteBtn from "@/components/Favoritebtn";
import { HomeProduct } from "@/types/product";
import { Star } from "lucide-react";
import AddProduct from "./AddProduct";

export default function ProductPage({item , img }: { item: HomeProduct , img:string}){
    return(
        <div className="grid grid-cols-1 items-center gap-7 p-5 md:grid-cols-2 md:p-10">
            <div className="flex flex-col gap-5">
                <div className="h-80 w-full overflow-hidden rounded-2xl bg-secondary md:h-96 relative">
                <img
                src={img}
                alt={item.title}
                className="h-full w-full object-contain"
                 />
                <div className="p-3 absolute top-0 left-0 flex justify-between w-full">
                    <p className="text-xs bg-primary text-white h-fit p-1 rounded-lg" >{item.tag}</p>
                    <FavoriteBtn item={item} />
                </div>
            </div>
            <div className="grid h-20 grid-cols-3 gap-3">
                <div className="overflow-hidden rounded-lg bg-secondary">
                    <img
                    src={img}
                    alt={item.title}
                    className="h-full w-full object-contain"
                    />
                </div>
                <div className="overflow-hidden rounded-lg bg-secondary">
                    <img
                    src={img}
                     alt={item.title}
                    className="h-full w-full object-contain"
                    />
                </div>
                <div className="overflow-hidden rounded-lg bg-secondary">
                    <img
                     src={img}
                    alt={item.title}
                     className="h-full w-full object-contain"
                     />
                </div>
            </div>
            </div>
            <div className="flex flex-col gap-2">
                <p className="text-primary text-sm">{item.brand}</p>
                <h1 className="text-2xl font-semibold text-gray-900 md:text-3xl">{item.title}</h1>
                <div className="mt-4 flex flex-wrap items-center gap-2">
                    <div className="flex items-center gap-1 rounded-full bg-amber-50 px-3 py-1.5"><Star size={16} className="fill-amber-400 text-amber-400"/>
                        <span className="text-sm font-semibold text-slate-800">{item.rating}</span>
                    </div>
                    <span className="text-sm text-slate-500">Customer rating</span>
                 </div>
                <div className="flex gap-2 items-end">
                    <h3 className="text-3xl text-primary lg:text-4xl">₹{item.price}</h3>
                    <p className="text-2xl line-through text-gray-500">₹{item.originalPrice}</p>
                </div>
                 <div className="flex gap-1">
                    <button
                    className="bg-white text-primary text-2xl py-1 px-3 border rounded flex items-center justify-center"
                    >-</button>
                    <p className="bg-white text-primary text-xl py-1 px-3 border rounded flex items-center justify-center">1</p>
                    <button 
                    className="bg-white text-primary text-2xl py-1 px-3 border rounded flex items-center justify-center"
                    >+</button>
                </div>
                <AddProduct item={item}/>
            </div>
        </div>
    )

}