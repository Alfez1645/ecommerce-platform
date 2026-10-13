import Navbar from "@/components/navbar/Navbar";

export default function ShopLayout({children}:{children: React.ReactNode}) {
  return (
    <>
    <Navbar />   
      {children}
    </>
  );
}