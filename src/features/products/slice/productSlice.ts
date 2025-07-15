import { createSlice } from '@reduxjs/toolkit';
import { ProductState } from '../types/product.ts';
import { fetchProducts, fetchByCategory, fetchById } from '../slice/productThunks.ts';

const initialState: ProductState = {
  products: [],
  byId: {}, 
  currentId: null, 
  productsByCategory: {
    STUFFED_ANIMALS: [],
    WOODEN_TOYS: [],
  },
  loadingAll: false,
  loadingByCategory: false,
  loadingById: false,
  error: null,
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    // All products
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

    // Products by category
      .addCase(fetchByCategory.pending, (state) => {
        state.loadingByCategory = true;
        state.error = null;
      })
      .addCase(fetchByCategory.fulfilled, (state, action) => {
        state.loadingByCategory = false;

        const category = action.meta.arg;
        state.productsByCategory[category] = action.payload;
      })
      .addCase(fetchByCategory.rejected, (state, action) => {
        state.loadingByCategory = false;
        state.error = action.error.message || 'An error occurred while filtering by category';
      })

    // Product by ID
      .addCase(fetchById.pending, (state) => {
        state.loadingById = true;
        state.error = null;
      })
      .addCase(fetchById.fulfilled, (state, action) => {
        const product = action.payload;
        state.loadingById = false;
        state.byId[product.id] = product;      
        state.currentId = String(product.id); 
      })
      .addCase(fetchById.rejected, (state, action) => {
        state.loadingById = false;
        state.error = action.error.message || 'An error occurred while filtering by id';
      });
  },
});

export default productSlice.reducer;
