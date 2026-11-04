"use client";
import { ClearCart } from "@/lib/features/CartSlice";
import CartCards from "./CartCard";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import OrderSummary from "./OrderSummary";
import { Trash2 } from "lucide-react";


export default function CartBox(){

    const cartData = useAppSelector((state) => state.cart.cartItems);
    const dispatch = useAppDispatch()

    return(
        <div>
            {cartData.length > 0 ? (
               <div className="md:grid grid-cols-3">
                    <div className="flex flex-col gap-4 mb-2 md:col-span-2 m-3">
                        <div className="flex justify-between text-sm">
                            <p>{Number(cartData.length)} items in cart</p>
                            <button 
                            onClick={() => dispatch(ClearCart())}
                            className="text-red-500 flex gap-1 items-center"><Trash2 size={16} />Clear Cart</button>
                        </div>
                        {cartData.map((item) =>(
                            <CartCards item={item} key={item.id}/>
                        ))}
                    </div>
                    <OrderSummary/>
               </div>
                ) : (<div className="flex min-h-60 items-center justify-center">
                        <p className="text-gray-500">Your cart is empty.</p>
                    </div>
                )}
        </div>
    )
}