import apiClient from "../../../services/apiClient";

export const getUserByEmail = async (email: string) => {
  try {
    const response = await apiClient.get(`/api/v1/users/email/${email}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching user with email ${email}:`, error);
    throw error;
  }
};
