import { ProductCard } from "./ProductCard";
import { HomeProduct } from "@/types/product";

type TrendingSectionProps = {
    SectionName: string;
    ProductList: HomeProduct[];
};

export default function ProductSections( {SectionName,ProductList}: TrendingSectionProps){
    return (
        <div className="m-4 p-2">
            <div className="flex justify-between mb-3">
                <h1 className="text-lg font-semibold md:text-2xl">{SectionName}</h1>
                <button className="text-primary hover:text-[#5B2FD0] transition-transform duration-300 hover:scale-105">View all</button>
            </div>
            <div className="flex overflow-y-auto gap-3 scrollbar-none p-3">
                {ProductList.map((item) => (
                    <ProductCard key={item.id} item={item}/>
                ))}
            </div>
        </div>
    )
}