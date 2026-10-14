import { trustBarData } from "@/data/trustbarData";

export default function(){

    return(  
        <div className="grid grid-cols-2 bg-secondary m-4 p-4 shadow-md gap-3 md:grid-cols-4 rounded-2xl">
            {trustBarData.map((item) => (
                <div key={item.id} className="flex items-center justify-center gap-3 lg:border-l border-gray-200 first:border-l-0">
                    <div className={`shrink-0 rounded-xl p-2.5 ${item.bgColor} ${item.textColor} `}><item.icon size={30}  /></div>
                    <div>
                        <h3 className="text-sm lg:text-lg">{item.title}</h3>
                        <p className="text-xs text-gray-500">{item.description}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}