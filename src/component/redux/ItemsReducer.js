import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    isLoading:false,
    data:[],
    price: 0, 
}

export const ProductsSlice = createSlice({
    name: 'products',
    initialState: initialState,
    reducers:{
        setDataAction: (state, action) => {
            state.data = action.payload
        },
        setPriceAction: (state,action) => {
            state.price = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(ItemsThunk.pending, (state)=>{
            state.isLoading =true;
        })
        builder.addCase(ItemsThunk.fulfilled, (state) => {
            state.isLoading =false;
        })
    }
})


export const ItemsThunk = createAsyncThunk(
    'items',
    async() => {
        const {data}  = await axios.get('https://fakestoreapi.com/products')
        return data 
    }
)


export const {
    setItemsAction,
    setPriceAction
} = ProductsSlice.actions

