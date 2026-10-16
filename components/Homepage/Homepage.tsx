import { trendingProducts } from "@/data/TrendingsectionData";
import ShopByCategory from "./categoryBox";
import Slider from "./Slider";
import TrustBar from "./TrustBar";
import ProductSections from "./ProductSection";
import { newArrivals } from "@/data/NewArrivalsData";
import { bestSellers } from "@/data/BestSellers";
import { recommendedProducts } from "@/data/RecommendedforYouData";
import { dealsForYou } from "@/data/DealforYOU";

export default function Homepage(){
    return(
        <div>
            <Slider />
            <TrustBar />
            <ShopByCategory />
            <ProductSections SectionName={"Trending Product"}  ProductList={trendingProducts} />
            <ProductSections SectionName={"New Arrivals"} ProductList={newArrivals} />
            <ProductSections SectionName={"Best Sellers"} ProductList={bestSellers} />
            <ProductSections SectionName={"Recommended for You"} ProductList={recommendedProducts} />
            <ProductSections SectionName={"Deals for You"} ProductList={dealsForYou} />
        </div>
    )
}