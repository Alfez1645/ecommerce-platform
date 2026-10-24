export default function WishListBanner(){
    return(
        <div className="h-34 relative lg:h-48">
            <img src="/images/myWhishList.png" alt="My whish list banner" className="h-full w-full object-cover object-right rounded-2xl"/>
            <div className="absolute top-12 left-10 lg:top-12 lg:left-1/4 ">
                <h1 className="text-2xl font-semibold md:text-4xl lg:text-6xl">My <span className="text-primary">Wishlist</span></h1>
                <p className="text-xs text-gray-500  md:text-sm mt-2">Your favorite picks, all in one place.</p>
                <p className="text-xs  text-gray-500 md:text-sm">Save the things you love and shop them anytime.</p>
            </div>
        </div>
    )
}