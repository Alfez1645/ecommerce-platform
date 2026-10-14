
export default function NavbarMenu(){

    return(
        <div className="flex w-full items-center justify-between col-span-2 lg:col-start-2  lg:row-start-1 lg:col-span-1 ">
            <button className="font-bold  hover:text-primary border-b-2 border-transparent hover:border-primary activePage">Home</button>
            <button className="font-bold  hover:text-primary border-b-2 border-transparent hover:border-primary">Shop</button>
            <button className="font-bold  hover:text-primary border-b-2 border-transparent hover:border-primary">Category</button>
            <button className="font-bold  hover:text-primary border-b-2 border-transparent hover:border-primary">Deals</button>
            <button className="font-bold  hover:text-primary border-b-2 border-transparent hover:border-primary">About</button>
        </div>
    )
}