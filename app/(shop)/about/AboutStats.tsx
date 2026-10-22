import { Handshake, PackageSearch, Star, User } from "lucide-react";

export default function AboutStats(){
    return(
        <div className="m-3 p-4 bg-secondary rounded-2xl border border-blue-400 grid grid-cols-2 gap-3 md:grid-cols-4">
            <div className="flex gap-3">
                <User size={36} className="text-primary"/>
                <div >
                    <h3 className="font-bold text-lg md:text-2xl">50k+</h3>
                    <p className="text-gray-500">Happy Customers</p>
                </div>
            </div>
            <div className="flex gap-3">
                <PackageSearch size={36} className="text-primary"/>
                <div>
                    <h3 className="font-bold text-lg md:text-2xl">1k+</h3>
                    <p className="text-gray-500">Unique Products</p>
                </div>
            </div>
            <div className="flex gap-3">
                <Star size={36} className="text-primary"/>
                <div>
                    <h3 className="font-bold text-lg md:text-2xl">4/5</h3>
                    <p className="text-gray-500">Average Rating</p>
                </div>
            </div>
            <div className="flex gap-3">
                <Handshake  size={36} className="text-primary"/>
                <div>
                    <h3 className="font-bold text-lg md:text-2xl">5+</h3>
                    <p className="text-gray-500">year of Trust </p>
                </div>
            </div>
        </div>
    )
}