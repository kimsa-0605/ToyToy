import apiClient from '../../../services/apiClient';

// GET
export const getAllProducts = async () => {
  return await apiClient.get('/api/v1/products');
};

export const getByCategory = async (category: string) => {
  return await apiClient.get(`/api/v1/products/category/${category}`);
};

export const getById = async (id: number) => {
  return await apiClient.get(`/api/v1/products/${id}`)
}

// POST

// PUT

// DELETE