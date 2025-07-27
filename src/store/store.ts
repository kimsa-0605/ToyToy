import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../features/products/slice/productSlice.ts';
import authReducer from './slices/authSlice.ts';

export const store = configureStore({
  reducer: {
    products: productReducer,
    auth: authReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
