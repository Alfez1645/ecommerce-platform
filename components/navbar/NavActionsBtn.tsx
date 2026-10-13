import { Heart } from 'lucide-react';
import { ShoppingCart } from 'lucide-react';
import { User } from 'lucide-react';

export default function NavActionsBtn(){
    return(
        <div className="flex items-center gap-4 justify-end lg:col-start-3 lg:row-start-1 lg:w-auto">
            <User />
            <Heart />
            <ShoppingCart />
        </div>
    )
}