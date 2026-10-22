'use client'
import { addFavorite, removeFavorite, setFavorites } from '@/lib/features/FavoritesSlider';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { RootState } from '@/lib/store';
import { HomeProduct } from '@/types/product';
import { Heart } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function FavoriteBtn({item}: { item: HomeProduct }){

    const favorite = useAppSelector((state:RootState) => state.favorite.favorite)
    const dispatch = useAppDispatch();

    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const saved = localStorage.getItem("favoriteItem");

        if (saved) {
            dispatch(setFavorites(JSON.parse(saved)));
        }

        setLoaded(true);
    }, [dispatch]);

    useEffect(() => {
        if (loaded) {
            localStorage.setItem("favoriteItem", JSON.stringify(favorite));
        }
    }, [favorite, loaded]);

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