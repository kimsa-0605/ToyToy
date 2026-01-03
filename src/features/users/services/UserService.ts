import apiClient from "../../../services/apiClient";

// GET
export const getUserByEmail = async (email: string) => {
  try {
    const response = await apiClient.get(`/api/v1/users/email/${email}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching user with email ${email}:`, error);
    throw error;
  }
};

// PATCH
export const updateById = async () => {
  try {
    const response = await apiClient.patch(`/api/v1/users/me`);
    return response.data;
  } catch (error) {
    console.error(`Error updating user information`, error);
    throw error;
  }
};

export const changePassword = async () => {
  try {
    const response = await apiClient.patch(`/api/v1/users/password`);
    return response.data;
  } catch (error) {
    console.error(`Error changing user password`, error);
    throw error;
  }
};
