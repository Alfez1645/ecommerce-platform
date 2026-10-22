import Link from "next/link";

export default function WishListFooter(){
    return(
        <div className="bg-secondary flex justify-center items-center flex-col py-10 pl-5">
            <div className="flex flex-col gap-3 ">
                <h1 className="text-2xl font-bold">Still thinking?</h1>
                <p className="text-sm">Explore more amazing products and add them to your wishlist</p>
                <Link href={"/"}><button className="w-fit bg-primary p-2 text-white rounded-2xl">Continue Shopping →</button></Link>
            </div>
            
        </div>
    )
}