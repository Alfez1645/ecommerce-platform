export default function cartBanner(){
    return(
        <div className="h-34 relative lg:h-48">
            <img src="/images/myWhishList.png" alt="My whish list banner" className="h-full w-full object-cover object-right rounded-2xl"/>
            <div className="absolute top-12 left-10 lg:top-12 lg:left-2/12 text-2xl font-semibold md:text-4xl lg:text-6xl">My <span className="text-primary">Cart</span>
            </div>
        </div>
    )
}