'use client'
import { addCart } from "@/lib/features/CartSlice";
import { useAppDispatch } from "@/lib/hooks";
import { HomeProduct } from "@/types/product";

export default function AddToCart({item}: { item: HomeProduct }){

    const dispatch = useAppDispatch()

    return(
        <button
        className="bg-primary  text-white text rounded-2xl"
         onClick={(event) =>{
            event.stopPropagation();
            dispatch(addCart(item))
         }}>Add cart</button>
    )
}