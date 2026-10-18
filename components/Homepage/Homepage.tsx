import { trendingProducts } from "@/data/TrendingsectionData";
import ShopByCategory from "./categoryBox";
import Slider from "./Slider";
import TrustBar from "./TrustBar";
import ProductSections from "./ProductSection";
import { newArrivals } from "@/data/NewArrivalsData";
import { bestSellers } from "@/data/BestSellers";
import { recommendedProducts } from "@/data/RecommendedforYouData";
import { dealsForYou } from "@/data/DealforYOU";
import ShopByCollection from "./ShopByCollection";
import ExclusiveOfferBox from "./ExclusiveOfferBox";

export default function Homepage(){
    return(
        <div>
            <Slider />
            <TrustBar />
            <ShopByCategory />
            <ProductSections SectionName={"Trending Product"}  ProductList={trendingProducts} />
            <ShopByCollection />
            <ProductSections SectionName={"New Arrivals"} ProductList={newArrivals} />
            <ExclusiveOfferBox />
            <ProductSections SectionName={"Best Sellers"} ProductList={bestSellers} />
            <ProductSections SectionName={"Recommended for You"} ProductList={recommendedProducts} />
            <ProductSections SectionName={"Deals for You"} ProductList={dealsForYou} />
        </div>
    )
}