import { createSlice } from '@reduxjs/toolkit';
import { ProductState } from '../types/product.ts';
import { fetchProducts, fetchByCategory } from '../slice/productThunks.ts';

const initialState: ProductState = {
  products: [],
  loadingAll: false,
  loadingByCategory: false,
  error: null,
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loadingAll = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loadingAll = false;
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loadingAll = false;
        state.error = action.error.message || 'An error occurred while fetching products';
      })

      .addCase(fetchByCategory.pending, (state) => {
        state.loadingByCategory = true;
        state.error = null;
      })
      .addCase(fetchByCategory.fulfilled, (state, action) => {
        state.loadingByCategory = false;
        state.products = action.payload;
      })
      .addCase(fetchByCategory.rejected, (state, action) => {
        state.loadingByCategory = false;
        state.error = action.error.message || 'An error occurred while filtering by category';
      });
  },
});

export default productSlice.reducer;
