'use client'
import { addCart, setCart } from "@/lib/features/CartSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { HomeProduct } from "@/types/product";
import { useEffect, useState } from "react";

export default function AddToCart({item}: { item: HomeProduct }){

    const dispatch = useAppDispatch()

    return(
        <button
        className="bg-primary  text-white text rounded-2xl"
         onClick={() =>dispatch(addCart(item))}>Add cart</button>
    )
}