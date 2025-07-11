import apiClient from "../../../services/apiClient";

export async function getUser() {
  try {
    return await apiClient.get('/users');
  } catch (error) {
    console.error('Error fetching user data:', error);
    throw error;
  }
}