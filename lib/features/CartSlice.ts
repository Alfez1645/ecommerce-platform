import { createSlice } from "@reduxjs/toolkit";

export interface CartItem {
    id: number;
    brand: string;
    title:string;
    image:String
    price: number;
    quantity :number;
}

interface cartSate {
    cartItems: CartItem[];
    total: number;
}

const initialState:cartSate = {
    cartItems:[],
    total:0,
}

const calculateTotal = (cartItems: CartItem[]): number => {
    return cartItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );
}

const CartSlice = createSlice({
    name:"cart",
    initialState,
    reducers: {
        addCart: (state , action) =>{
            const exitItem = state.cartItems.find(item => item.id === action.payload.id);

            if(exitItem){
                exitItem.quantity += 1 
            }
            else{
                state.cartItems.push({
                    id: action.payload.id,
                    brand:action.payload.brand,
                    title: action.payload.title,
                    image: action.payload.image,
                    price: action.payload.price,
                    quantity:1
                })
            }
             state.total = calculateTotal(state.cartItems);
        },
        setCart: (state , action) =>{
            state.cartItems = action.payload
            state.total = calculateTotal(state.cartItems);
            
        },
        removeFromCart: (state , action) =>{
            state.cartItems = state.cartItems.filter(item => item.id !== action.payload);
             state.total = calculateTotal(state.cartItems);
        },
        updateQuantity: (state , action) =>{
            const item = state.cartItems.find(item => item.id === action.payload.id)

            if(item){
                if(action.payload.quantity <= 0){
                    state.cartItems = state.cartItems.filter(item => item.id !== action.payload.id);
                }
                else{
                    item.quantity = action.payload.quantity;
                }
            }
            state.total = calculateTotal(state.cartItems);
        },
        ClearCart: (state) =>{
            state.cartItems = [];
            state.total = calculateTotal(state.cartItems);
        }
    }
})

export const {addCart , setCart , removeFromCart , updateQuantity , ClearCart} = CartSlice.actions;
export default CartSlice.reducer;