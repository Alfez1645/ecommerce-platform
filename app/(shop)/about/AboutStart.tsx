import { Sparkles ,ShieldLock ,Truck } from "lucide-react";

export default function AboutStart(){
    return(
        <div className="grid grid-cols-1 grid-rows-[180_auto_auto] h-auto md:grid-cols-2 lg:grid-rows-3 lg:h-82 p-5 gap-7 bg-secondary rounded-2xl border border-blue-400 m-3 ">
            <div className="rounded-2xl overflow-hidden  lg:row-span-3">
                <img src="/images/4645849e-644f-42c7-ba82-ab1b73fa57b8.png" alt="" className="h-full w-full"/>
            </div>
            <div className="lg:row-span-2 flex flex-col gap-2 ">
                <p className="text-xs bg-[#E5DBFF] text-primary w-fit px-3 py-1 rounded-2xl font-bold lg:text-sm">Our Story</p>
                <h1 className="text-2xl font-bold">The Beginning of AuraStore</h1>
                <p className="text-gray-600 ">AuraStore started with a simple idea — to create a shopping experience that feels personal, enjoyable, and inspiring. We noticed that online shopping was often either too complicated or lacked the human touch. So, we built AuraStore to be different — a place where quality, style, and a personalized shopping experience come together to create lasting trust.</p>
            </div>
            <div className="grid grid-cols-3 gap-5 mt-2">
                <div className="flex flex-col items-center gap-3">
                    <Sparkles size={36} className="bg-[#E5DBFF] p-1.5 rounded-2xl" />
                    <p className="text-center text-sm">Curated Selection</p>
                </div>
                <div className="flex flex-col items-center gap-3">
                    <ShieldLock size={36} className="bg-[#E5DBFF] p-1.5 rounded-2xl"/>
                    <p className="text-center text-sm">Secure Shopping</p>
                </div>
                <div className="flex flex-col items-center gap-3">
                    <Truck size={36} className="bg-[#E5DBFF] p-1.5 rounded-2xl"/>
                    <p className="text-center text-sm" >Fast & Reliable Delivery</p>
                </div>
            </div>
        </div>
    )
}