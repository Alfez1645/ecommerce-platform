import { Suspense } from "react";
import Search from "./Search";
import Loading from "@/app/loading";

export default function SearchPage() {
  return (
    <Suspense fallback={<p><Loading/></p>}>
      <Search />
    </Suspense>
  );
}