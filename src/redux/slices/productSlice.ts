import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchMoreProducts } from '../actions/productActions';

interface Product {
  id: number;
  title: string;
  price: number;
  category: { name: string };
  images: string[];
}
interface ProductState {
  products: Product[];
  loading: boolean;
  hasMore: boolean;
  offset: number;
}
const initialState: ProductState = {
  products: [],
  loading: false,
  hasMore: true,
  offset: 0
};
const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
      builder
        .addCase(fetchMoreProducts.pending, (state) => {
          state.loading = true;
        })
        .addCase(fetchMoreProducts.fulfilled, (state, action) => {
          state.loading = false;
          state.products = [...state.products, ...action.payload];
          if(action.payload.length < 10){
            state.hasMore = false;
          }
        })
        .addCase(fetchMoreProducts.rejected, (state) => {
          state.loading = false;
        });
  },
});
export default productSlice.reducer;