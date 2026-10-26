import { allProducts } from "@/data/allProducts";
import { notFound } from "next/navigation";
import PreviousButton from "./PreviousButto";
import ProductPage from "./ProductPage";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function ProductDetailsPage({params}: Props) {
  const { id } = await params;
  let product ;
  let img

  const localProduct = allProducts.find(
    (item) => item.id === Number(id)
  );

  if (localProduct) {
    product = localProduct;
    img = product.image
} else {
  const response = await fetch(
      `https://dummyjson.com/products/${id}`
    );

    if (response.ok) {
      product = await response.json();
      img = product.thumbnail
}

  if (!product) {
    notFound();
  }
}


  return (
    <main>
        <PreviousButton />
        <ProductPage item={product} img={img}/>
    </main>
  );
}