import { Store } from 'lucide-react';
import Link from 'next/link';

export default function NavLogo(){
    
    return (
        <Link href={"/"} >
        <div className="flex gap-1 items-center">
            <Store 
            className="text-primary"
            size={32}
            />
            <h1 
            className="font-bold text-xl">AuraStore</h1>
        </div>
        </Link>
    )
}