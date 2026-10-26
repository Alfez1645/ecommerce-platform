import { bestSellers } from "./BestSellers";
import { dealsForYou } from "./DealforYOU";
import { newArrivals } from "./NewArrivalsData";
import { recommendedProducts } from "./RecommendedforYouData";
import { trendingProducts } from "./TrendingsectionData";


export const allProducts = [
  ...trendingProducts,
  ...bestSellers,
  ...newArrivals,
  ...recommendedProducts,
  ...dealsForYou,
];