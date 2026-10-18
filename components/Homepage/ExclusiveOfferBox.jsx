export default function ExclusiveOfferBox(){

    return (
        <div className=" relative h-48 md:h-52 lg:56 overflow-hidden rounded-2xl m-5 ">
          <img
            src="/images/exclusive-offer.png"
            alt="Gift boxes and headphones"
            className="h-full w-full object-cover"
          />
          <div className="absolute top-0 left-0 p-4  text-[#5b2fd0] ">
            <p className="text-lg font-bold md:text-2xl">Exclusive Offer</p>
            <h2 className="text-lg font-bold md:text-2xl">For You!</h2>
            <h3 className="font-extrabold text-2xl md:text-4xl">Get 20% OFF</h3>
            <p className="text-md font-semibold ">On Selected Items</p>
            <button className="bg-primary text-white mt-2 px-2 py-1 rounded-xl md:text-lg transition-transform duration-300 hover:scale-105">Shop Now →</button>
          </div>
        </div>
    )
}