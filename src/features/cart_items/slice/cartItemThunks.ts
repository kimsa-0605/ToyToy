import { createAsyncThunk } from '@reduxjs/toolkit';
import { getAllCartItems, addToCart, updateCartItem, removeCartItem } from '../services/cartItemService.ts';
import { CartItem } from '../types/cartItem.ts';

export const fetchAllCartItems = createAsyncThunk(
  'cartItems/fetchAll',
  async () => {
    const response = await getAllCartItems();
    return response.data.data.cartItems;
  }
);

export const fetchAddToCart = createAsyncThunk<CartItem,{ product_id: number; quantity: number }>(
  'cartItems/fetchAddToCart',
  async ({ product_id, quantity }) => {
    const response = await addToCart(product_id, quantity);
    return response.data.data.cartItem;
  }
);

export const fetchUpdateCartItem = createAsyncThunk<CartItem, { product_id: number; quantity: number }>(
  'cartItems/fetchUpdateCartItem',
  async ({ product_id, quantity }) => {
    const response = await updateCartItem(product_id, quantity);
    return response.data.data.cartItem;
  }
);

export const fetchRemoveCartItem = createAsyncThunk(
  'cartItems/fetchRemoveCartItem',
  async (product_id: number) => {
    const response = await removeCartItem(product_id);
    return {
      id: product_id,
      message: response.data.message,
    };
  }
);