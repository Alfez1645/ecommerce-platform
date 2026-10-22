export default function AboutStory(){
    return(
        <div className="h-62 w-full relative lg:h-72">
            <img src="/images/Dreamy AuraStore Pastel Shopping Scene.png" alt="About hero"  className="h-full w-full object-cover object-center"/>
            <div className="absolute top-0 left-0 p-4 flex flex-col gap-2">
                <p className="text-xs bg-[#E5DBFF] text-primary w-fit px-3 py-1 rounded-2xl font-bold md:text-lg">Our Story</p>
                <h1 className="text-2xl font-bold md:text-4xl">About <span className="text-primary">Aura Store</span></h1>
                <p className="text-sm text-gray-700 w-2/3 md:text-lg lg:w-1/3">More than just a store — we're a community of dreamers, doers, and style lovers. Our mission is to bring you the best products, carefully curated with quality, care, and a touch of happiness.</p>
                <button className="bg-primary text-white px-3 py-1 w-fit rounded-xl md:text-lg">Shop Now</button>
            </div>
        </div>
    )
}