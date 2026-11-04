import { HomeProduct } from "@/types/product";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

type ProductState = {
    searchProducts: HomeProduct[]
    searchResults: HomeProduct[];
    searchLoading: boolean;
    searchError: string | null;
};

const initialState: ProductState = {
    searchProducts: [],
    searchResults: [],
    searchLoading: false,
    searchError: null,
}

export const searchProducts = createAsyncThunk(
  "products/searchProducts",
  async (query: string) => {
    const response = await fetch(
      `https://dummyjson.com/products/search?q=${encodeURIComponent(query)}`
    );

    const data = await response.json();

    return data.products.map((product:any):HomeProduct => ({
        id: product.id,
        brand: product.category,
        title: product.title,
        image: product.thumbnail,
        rating: product.rating,
        price: Math.round(product.price * 90),
        originalPrice: Math.round((product.price / (1 - product.discountPercentage / 100)) * 90),
        tag: `${Math.round(product.discountPercentage)}% OFF`,
    }));
  }
);

const searchSlice = createSlice({
    name:"search",
    initialState,
    reducers:{},
    extraReducers:(builder) =>{
        builder
        .addCase(searchProducts.pending, (state) => {
            state.searchLoading = true;
            state.searchError = null;
        })

        .addCase(searchProducts.fulfilled, (state, action) => {
            state.searchLoading = false;
            state.searchResults = action.payload;
            state.searchProducts = action.payload;
        })

        .addCase(searchProducts.rejected, (state) => {
            state.searchLoading = false;
            state.searchError = "Failed to search products";
        })
    }
})

export default searchSlice.reducer