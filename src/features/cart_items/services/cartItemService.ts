import apiClient from '../../../services/apiClient';

// GET
export const getAllCartItems = async () => {
  return await apiClient.get('/api/v1/cart-items');
};

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
export const updateCartItem = async (product_id: number, quantity: number) => {
  return await apiClient.put(`/api/v1/cart-items/${product_id}`, 
    {
      quantity
    }
  )
}

// DELETE
export const removeCartItem = async (product_id: number) => {
  return await apiClient.delete(`/api/v1/cart-items/${product_id}`)
}