import Navbar from "@/components/navbar/Navbar";
import SearchBar from "@/components/SearchBar/SearchBar";

export default function ShopLayout({children}:{children: React.ReactNode}) {
  return (
    <>
    <Navbar /> 
    <SearchBar />  
    {children}
    </>
  );
}