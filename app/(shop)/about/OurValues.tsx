import { Heart, Leaf, Star, UserGroup } from "lucide-react";

export default function OurValue(){
    return(
        <div className="lg:grid lg:grid-cols-3 m-3 p-2 bg-secondary rounded-2xl border border-blue-400">
            <div className="flex flex-col gap-2 lg:col-span-2 ">
                <p className="text-xs bg-[#E5DBFF] text-primary w-fit px-3 py-1 rounded-2xl font-bold md:text-lg">Our Values</p>
                <h1 className="text-lg font-bold lg:text-2xl">What Drives Us</h1>
                <div className="pl-4 flex flex-col gap-3 md:pl-0 md:flex-row lg:grid lg:grid-cols-4 mt-3">
                    <div className="flex items-center gap-4 lg:flex-col">
                        <Heart size={36} className="p-1.5 bg-red-300 text-red-500 rounded-full" />
                        <div className="lg:text-center">
                            <h3 className="text-sm">Customer First</h3>
                            <p className="text-xs">Your satisfaction matters most.</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 lg:flex-col">
                        <Star size={36} className="p-1.5 bg-blue-300 text-blue-500 rounded-full" />
                        <div className="lg:text-center">
                            <h3 className="text-sm">Quality Always</h3>
                            <p className="text-xs">We never compromise on quality.</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 lg:flex-col">
                        <Leaf size={36} className="p-1.5 bg-green-300 text-green-500 rounded-full" />
                        <div className="lg:text-center">
                            <h3 className="text-sm">Sustainability</h3>
                            <p className="text-xs">A better planet for tomorrow.</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 lg:flex-col">
                        <UserGroup size={36} className="p-1.5 bg-purple-300 text-purple-500 rounded-full" />
                        <div className="lg:text-center">
                            <h3 className="text-sm">Community</h3>
                            <p className="text-xs">Together, we grow stronger.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-3">
                <img src="/images/e83aa81b-39dd-40b9-879a-1c131a700bb7.png" alt="" className="h-full w-full rounded"/>
            </div>
        </div>
    )
}