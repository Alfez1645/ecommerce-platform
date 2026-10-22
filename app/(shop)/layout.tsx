import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import SearchBar from "@/components/SearchBar/SearchBar";

export default function ShopLayout({children}:{children: React.ReactNode}) {
  return (
    <>
    <Navbar /> 
    <SearchBar />  
    {children}
    <Footer />
    </>
  );
}