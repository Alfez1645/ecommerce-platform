import { configureStore } from "@reduxjs/toolkit";
import  sliderReducer from "./features/SliderSlice"
import  searchReducer from "./features/SearchSlider"
import search from "@/app/(shop)/search/page";

export const store = configureStore({
  reducer: {
    slider:  sliderReducer,
    search: searchReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;