import ShopByCategory from "./categoryBox";
import Slider from "./Slider";
import TrustBar from "./TrustBar";

export default function Homepage(){
    return(
        <div>
            <Slider />
            <TrustBar />
            <ShopByCategory />
        </div>
    )
}