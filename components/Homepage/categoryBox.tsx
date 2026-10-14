import { shopByCategoryData } from "@/data/HomeCategory";

export default function ShopByCategory(){

    return(
        <div className="m-5">
            <div className="flex justify-between mb-3">
                <h1 className="text-xl font-semibold md:text-2xl">Shop by category</h1>
                <button className="text-primary hover:text-[#5B2FD0] transition-transform duration-300 hover:scale-105">View all</button>
            </div>
            <div className="grid grid-cols-2 gap-2 md:grid-cols-3 cursor-pointer lg:grid-cols-5  ">
                {shopByCategoryData.map((item) =>(
                    <div key={item.id} className="flex items-center gap-3 bg-secondary py-2 pl-4 rounded-2xl transition-transform duration-300 hover:scale-102 hover:bg-[#e9ddff] ">
                        <div className={`shrink-0 rounded-xl p-2.5 ${item.bgColor} ${item.textColor} `}><item.icon size={30}  /></div>
                    <div>
                        <h1>{item.title}</h1>
                        <p className="text-xs text-gray-500">{item.subtitle}</p>
                    </div>
                </div>
            ))}
            </div>
        </div>
    )
}