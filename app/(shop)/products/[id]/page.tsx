import { allProducts } from "@/data/allProducts";
import { notFound } from "next/navigation";
import PreviousButton from "./PreviousButto";
import ProductPage from "./ProductPage";
import { HomeProduct } from "@/types/product";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function ProductDetailsPage({params}: Props) {
  const { id } = await params;
  let product: HomeProduct | undefined;

  const localProduct = allProducts.find(
    (item) => item.id === Number(id)
  );

  if (localProduct) {
    product = {
      id: localProduct.id,
      brand: localProduct.brand,
      image: localProduct.image,
      title: localProduct.title,
      rating: localProduct.rating,
      price: localProduct.price,
      originalPrice: localProduct.originalPrice,
      tag: localProduct.tag
    }
} else {
  const response = await fetch(
      `https://dummyjson.com/products/${id}`
    );

    if (response.ok) {
      let item = await response.json();
      product = {
        id: item.id,
        brand: item.category,
        image: item.thumbnail,
        title: item.title,
        rating: item.rating,
        price: Math.round(item.price * 90),
        originalPrice: Math.round((item.price / (1 - item.discountPercentage / 100)) * 90),
        tag: item.category,
      }
    }

  if (!product) {
    notFound();
  }
}


  return (
    <main>
        <PreviousButton />
        <ProductPage item={product}/>
    </main>
  );
}