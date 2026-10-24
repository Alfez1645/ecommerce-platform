"use client";

import { Provider } from "react-redux";
import { store } from "@/lib/store";
import CartPersistence from "@/components/CartPersistence";
import FavoritePersistence from "@/components/favoritePersistence";

export default function StoreProvider({children}: {children: React.ReactNode;}) {
  return <Provider store={store}>
    <FavoritePersistence />
    <CartPersistence />
    {children}
    </Provider>;
}