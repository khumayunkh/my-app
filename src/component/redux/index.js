import { configureStore } from "@reduxjs/toolkit";
import { ProductsSlice } from "./ItemsReducer";



export const store = configureStore({
    reducer:{
        products: ProductsSlice.reducer
    },
    devTools: true,
})