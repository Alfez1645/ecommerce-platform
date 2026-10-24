'use client'
import { setFavorites } from '@/lib/features/FavoritesSlider';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { RootState } from '@/lib/store';
import { useEffect, useState } from 'react';

export default function favoritePersistence(){

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

    return null
}