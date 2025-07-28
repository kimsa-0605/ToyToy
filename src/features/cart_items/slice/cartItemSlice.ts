import { createSlice } from '@reduxjs/toolkit';
import { CartItemState } from '../types/cartItem.ts';
import { fetchAllCartItems, fetchAddToCart, fetchUpdateCartItem, fetchRemoveCartItem } from '../slice/cartItemThunks.ts';

const initialState: CartItemState = {
  items: [],
  loading: false,
  error: null,
};

const cartItemSlice = createSlice({
  name: 'cart-items',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    // All cart items
      .addCase(fetchAllCartItems.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAllCartItems.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchAllCartItems.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'An error occurred while fetching products';
      })
    // Add to cart
    .addCase(fetchAddToCart.fulfilled, (state, action) => {
      const addedItem = action.payload;
      const existingIndex = state.items.findIndex(item => item.id === addedItem.id);
      if (existingIndex !== -1) {
        state.items[existingIndex] = addedItem;
      } else {
        state.items.push(addedItem);
      }
    })

    // update cart item
    .addCase(fetchUpdateCartItem.fulfilled, (state, action) => {
      const updatedItem = action.payload;
      const index = state.items.findIndex(item => item.id === updatedItem.id);
      if (index !== -1) {
        state.items[index] = updatedItem;
      }
    })

    // Delete cart item
    .addCase(fetchRemoveCartItem.fulfilled, (state, action) => {
      const { id } = action.payload;
      state.items = state.items.filter((item) => item.id !== id);
    });

  },
});

export default cartItemSlice.reducer;