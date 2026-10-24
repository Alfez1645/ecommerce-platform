"use client";

import { Provider } from "react-redux";
import { store } from "@/lib/store";
import CartPersistence from "@/components/CartPersistence";

export default function StoreProvider({children}: {children: React.ReactNode;}) {
  return <Provider store={store}>
    <CartPersistence />
    {children}
    </Provider>;
}