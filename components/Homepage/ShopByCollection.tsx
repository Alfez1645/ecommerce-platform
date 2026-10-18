import { shopByCollections } from "@/data/ShopByCollection";

export default function ShopByCollection(){
    return(
       <div className="m-3 flex flex-col gap-2">
        <h1 className="text-lg font-semibold md:text-2xl">Shop by Collection</h1>
         <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
            {shopByCollections.map((item) => (
        <div
        key={item.id}
        className="relative overflow-hidden rounded-xl h-32"
        >
        <img
            src={item.image}
            alt={item.title}
            className="h-full w-full object-cover"
        />
        <div className="absolute p-3 left-0 top-0 w-full h-full backdrop-brightness-80">
            <h3 className="text-sm font-semibold text-white md:text-xl">{item.title}</h3>
            <p className="mt-0.5 text-xs text-white md:text-md">{item.description}</p>
            <button className="mt-3 rounded-lg bg-primary text-white px-3 py-1.5 text-xs font-medium shadow-sm md:text-lg">
                <a href={item.link}>Shop now</a>
            </button>
        </div>
        </div>
        ))}
    </div>
       </div>
    )
}