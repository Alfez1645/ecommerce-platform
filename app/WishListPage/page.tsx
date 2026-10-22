import WishListBanner from "./WishListBanner";
import WishListCard from "./WishListCard";
import WishListFooter from "./WishListFooter";

export default function WishListPage() {
  return (
    <main className="min-h-screen">
      <WishListBanner />
      <WishListCard />
      <WishListFooter />
    </main>
  );
}