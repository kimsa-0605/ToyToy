import apiClient from '../../../services/apiClient';

export const getAllProducts = async () => {
  return await apiClient.get('/api/v1/products');
};

export const getByCategory = async (category: string) => {
  return await apiClient.get(`/api/v1/products/category/${category}`);
};