import WishListBanner from "./WishListBanner";
import WishListCard from "./WishListCard";
import WishListFooter from "./WishListFooter";

export default function WishListPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <WishListBanner />
      <WishListCard />
      <WishListFooter />
    </main>
  );
}