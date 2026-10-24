
import WishListFooter from "../WishListPage/WishListFooter";
import CartBanner from "./cartBanner";
import CartBox from "./CartBox";

export default function cartPage(){
    return (
        <div className="min-h-screen flex flex-col">
            <CartBanner />
            <CartBox />
            <WishListFooter />
        </div>
    )
}