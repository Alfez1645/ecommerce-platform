"use client";

import { useEffect, useState } from "react";
import { setCart } from "@/lib/features/CartSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";

export default function CartPersistence() {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector(
    (state) => state.cart.cartItems
  );

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("cartItem");

    if (saved) {
      dispatch(setCart(JSON.parse(saved)));
    }
    setLoaded(true);

  }, [dispatch]);

  useEffect(() => {
    if (!loaded) return;

    localStorage.setItem("cartItem", JSON.stringify(cartItems));
  }, [cartItems, loaded]);

  return null;
}