import { HomeProduct } from "@/types/product";
import { Star } from 'lucide-react';
import FavoriteBtn from "../Favoritebtn";

export function ProductCard({item}: { item: HomeProduct }){
    return(
        <div className="bg-secondary rounded-2xl overflow-hidden shrink-0 w-44 md:w-52 lg:w-70 cursor-pointer transition-transform duration-300 hover:scale-102 hover:bg-[#e9ddff] hover:shadow-md ">
    <div className="w-full aspect-square relative p-1">
        <img
            src={item.image}
            alt={item.title}
            className="h-full w-full object-cover object-top rounded-2xl"
        />
        <div className="absolute top-0 left-0 flex justify-between p-3 w-full">
            <div className="text-xs bg-primary text-white h-fit p-1 rounded-lg">{item.tag}</div>
            <FavoriteBtn item={item} />
        </div>
    </div>
    <div className="p-2 min-w-0 flex flex-col gap-1">
        <p className="text-xs text-primary">{item.brand}</p>
        <h2 className="wrap-break-word text-md font-semibold leading-tight lg:text-lg">{item.title}</h2>
        <div className="flex gap-0.5 text-xs items-center text-gray-500"><Star size={11} className="text-yellow-500" />{item.rating}</div>
        <div className="flex gap-2 items-end">
            <h3 className="text-md lg:text-lg">₹{item.price}</h3>
            <p className="text-sm line-through text-gray-500">₹{item.originalPrice}</p>
        </div>
        <button className="w-fit text-sm text-primary">View Details →</button>
    </div>
</div>
    )
} 