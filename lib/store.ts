import { configureStore } from "@reduxjs/toolkit";
import  sliderReducer from "./features/SliderSlice"
import  searchReducer from "./features/SearchSlider"
import favoriteReducer from "./features/FavoritesSlider";
import cartReducer from "./features/CartSlice";

export const store = configureStore({
  reducer: {
    slider:  sliderReducer,
    search: searchReducer,
    favorite :favoriteReducer,
    cart: cartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;