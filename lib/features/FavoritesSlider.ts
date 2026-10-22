
import { HomeProduct } from "@/types/product";
import { createSlice } from "@reduxjs/toolkit";

interface Favorites {
    favorite:HomeProduct[],
}

const initialState: Favorites = {
  favorite: [],
};

const favoriteSlice = createSlice({
    name:"Favorite",
    initialState,
    reducers:{
        setFavorites: (state, action) => {
            state.favorite = action.payload;
        },
        addFavorite: (state , action) =>{
            state.favorite.push(action.payload)
        },
        removeFavorite: (state , action) =>{
            state.favorite = state.favorite.filter(item => item.id !== action.payload)
        }
    }
})

export const {setFavorites , addFavorite, removeFavorite } = favoriteSlice.actions;
export default favoriteSlice.reducer;