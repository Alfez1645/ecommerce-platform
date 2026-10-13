import sliderData from "@/data/SlideData";
import { createSlice } from "@reduxjs/toolkit";

const SliderSlice = createSlice({
    name:"slider",
    initialState: {
        SliderData: sliderData,
        activeIndex:0
    },
    reducers: {
        nextSlide: (state) =>{
            if(state.activeIndex === state.SliderData.length - 1){
                state.activeIndex = 0;
            }
            else{
                state.activeIndex += 1;
            }
        },
        prevSlide: (state) =>{
            if(state.activeIndex === 0){
                state.activeIndex = state.SliderData.length - 1
            }
            else{
                state.activeIndex -=1
            }
        }
    }
})

export const {nextSlide , prevSlide} = SliderSlice.actions;
export default SliderSlice.reducer;
