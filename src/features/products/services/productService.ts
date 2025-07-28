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
export const addToCart = async (product_id: number, quantity: number) => {
  return await apiClient.post('/api/v1/cart-items', 
    {
      product_id,
      quantity
    }
  )
}

// PUT

// DELETE