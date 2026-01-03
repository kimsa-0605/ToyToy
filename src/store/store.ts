import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../features/products/slice/productSlice.ts';
import authReducer from './slices/authSlice.ts';
import cartItemReducer from '../features/cart_items/slice/cartItemSlice.ts';
import userReducer  from '../features/users/slice/userSlice.ts';

export const store = configureStore({
  reducer: {
    products: productReducer,
    auth: authReducer,
    cartItems: cartItemReducer,
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
