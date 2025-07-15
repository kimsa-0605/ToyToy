import { createAsyncThunk } from '@reduxjs/toolkit';
import { getAllProducts, getByCategory, getById } from '../services/productService.ts';

export const fetchProducts = createAsyncThunk(
  'products/fetchAll',
  async () => {
    const response = await getAllProducts();
    return response.data.data.products;
  }
);

export const fetchByCategory = createAsyncThunk(
  'products/fetchByCategory',
  async (category: string) => {
    const response = await getByCategory(category);
    return response.data.data.products;
  }
);

export const fetchById = createAsyncThunk(
  'products/fetchById',
  async (id: number) => {
    const response = await getById(id);
    return response.data.data;
  }
)