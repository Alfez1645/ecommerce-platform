'use client'
import { addFavorite, removeFavorite} from '@/lib/features/FavoritesSlider';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { RootState } from '@/lib/store';
import { HomeProduct } from '@/types/product';
import { Heart } from 'lucide-react';

export default function FavoriteBtn({item}: { item: HomeProduct }){

    const favorite = useAppSelector((state:RootState) => state.favorite.favorite)
    const dispatch = useAppDispatch();

    return (
        favorite.some((fav) => fav.id === item.id) ? (
            <button 
            onClick={() =>{ dispatch(removeFavorite(item.id))}}>
            <Heart
            className="text-red-500 fill-red-500 bg-white p-1 rounded-full"
            size={25}
            />
            </button>
        ) : (
            <button
            onClick={() => dispatch(addFavorite(item))}>
            <Heart
                className="bg-white p-1 rounded-full"
                size={25}
            />
            </button>
        )
    );
}