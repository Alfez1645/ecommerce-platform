import { Store } from 'lucide-react';

export default function NavLogo(){
    
    return (
        <div className="flex gap-1 items-center">
            <Store 
            className="text-primary"
            size={32}
            />
            <h1 
            className="font-bold text-xl">AuraStore</h1>
        </div>
    )
}