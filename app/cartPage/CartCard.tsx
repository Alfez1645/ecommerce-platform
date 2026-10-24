import { CartItem, removeFromCart, updateQuantity } from "@/lib/features/CartSlice";
import { useAppDispatch} from "@/lib/hooks";
import { Trash2 } from "lucide-react";

export default function CartCards({item} : {item:CartItem}){
    const dispatch = useAppDispatch();

    return(
        <div className="bg-secondary p-2 flex rounded-2xl" >
            <div className="h-22 w-22">
                <img  
                    src={String(item.image)}
                    alt={item.title}
                    className="h-full w-full object-cover object-top rounded-2xl"
                    />
            </div>
            <div className="pl-3">
                <p className="text-xs text-primary">{item.brand}</p>
                <h1 className="text-sm">{item.title}</h1>
                <h3 className="font-bold">₹{item.price}</h3>
                <div className="flex gap-1">
                    <button
                    onClick={() => dispatch(updateQuantity({id: item.id , quantity: item.quantity - 1, price:item.price}))}
                    className="bg-white text-primary text-lg w-5 h-5 border rounded flex items-center justify-center"
                    >-</button>
                    <p className="bg-white text-primary text-sm w-5 h-5 border rounded flex items-center justify-center">{item.quantity}</p>
                    <button 
                    onClick={() => dispatch(updateQuantity({id: item.id, quantity: item.quantity + 1, price: item.price}))}
                    className="bg-white text-primary text-lg w-5 h-5 border rounded flex items-center justify-center"
                    >+</button>
                </div>
            </div>
            <div className="ml-auto p-2">
                <button
                onClick={() => dispatch(removeFromCart(item.id))}>
                    <Trash2 
                    size={20} 
                    className="text-red-500"/>
                </button>
            </div>
        </div>
    )
}