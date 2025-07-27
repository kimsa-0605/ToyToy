import apiClient from '../services/apiClient';

// GET

// POST
export const logIn = async (email: string, password: string) => {
  return await apiClient.post('/api/v1/auth/login', { email, password });
};

// PUT

// DELETE