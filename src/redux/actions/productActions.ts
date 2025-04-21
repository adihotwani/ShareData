import { AppDispatch, RootState } from "../store";
import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchMoreProducts = createAsyncThunk(
    'products/fetchMore',
    async (_, { getState }) => {
        const state = getState() as any;
        const offset = state.products.products.length; // Or track a separate `page`
        const response = await axios.get(`https://api.escuelajs.co/api/v1/products?offset=${offset}&limit=10`);
        return response.data;
    }
);