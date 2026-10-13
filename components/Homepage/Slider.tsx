'use client'
import { nextSlide, prevSlide } from "@/lib/features/SliderSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { RootState } from "@/lib/store";
import { useEffect, useState } from "react";

export default function Slider(){
    const dispatch = useAppDispatch();
    const {SliderData, activeIndex} = useAppSelector((state: RootState) => state.slider);

    const currentSlide = SliderData[activeIndex]

    const [isHover, setIsHover] = useState(false)

    useEffect(()=>{
        if(isHover) return;

        const timer = setInterval(() =>{
            dispatch(nextSlide())
        }, 3000)

        return () => clearInterval(timer)
    } , [dispatch , isHover])

    return(
        <div className="relative h-62.5 md:h-80 lg:h-100 "
        onMouseEnter={() =>{
            setIsHover(true)
        }}
        onMouseLeave={() =>{
            setIsHover(false)
        }}>
            <img
                src={currentSlide.image}
                alt={currentSlide.title}
                className="h-full w-full object-cover object-center transition-opacity duration-500"/>
            <div 
            className="absolute inset-0 bg-linear-to-r from-black/75 via-black/40 to-transparent">
                <div 
                className="absolute  inset-0 flex flex-col items-start justify-center p-5 text-white ">
                    <p 
                    className="text-xs bg-[#E5DBFF] text-primary w-fit px-3 py-1 rounded mb-3 md:text-sm md:mb-5">
                        {currentSlide.tag}
                    </p>
                    <h1 
                    className="text-3xl w-full mb-2 md:text-4xl lg:text-6xl md:mb-3">
                        {currentSlide.title}
                    </h1>
                    <p 
                    className="mb-4 text-sm text-white/80 md:text-lg md:mb-6">
                        {currentSlide.description}
                    </p>
                    <button 
                    className="rounded-lg bg-primary px-2 py-1 text-sm font-semibold text-white transition hover:bg-[#5B2FD0] mb-3 md:mb-5 lg:px-3 lg:py-2 lg:text-xl">
                        {currentSlide.btnText}
                    </button>
                    <div 
                    className="flex gap-5 lg:absolute bottom-8">
                        <button
                        className="flex h-9 w-9 items-center justify-center rounded-full border border-white/40 bg-black/30 text-white transition hover:bg-white hover:text-[#7040E8]"
                        onClick={() => {
                            dispatch(prevSlide())
                        }}>
                        {"<"}
                        </button>
                        <button
                        className="flex h-9 w-9 items-center justify-center rounded-full border border-white/40 bg-black/30 text-white transition hover:bg-white hover:text-[#7040E8]"
                        onClick={() =>{
                            dispatch(nextSlide())
                        }}>
                        {">"}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}