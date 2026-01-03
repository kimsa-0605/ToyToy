import { createAsyncThunk } from '@reduxjs/toolkit';
import { getUserByEmail, updateById, changePassword } from '../../../features/users/services/UserService.ts';

export const fetchUserByEmail = createAsyncThunk(
  'user/fetchUserByEmail',
  async (email: string) => {
    const response = await getUserByEmail(email);
    return response.data;
  }
);

export const fetchUserById = createAsyncThunk(
  'user/fetchUserById',
  async () => {
    const response = await updateById();
    return response.data;
  }
);

export const fetchChangePassword = createAsyncThunk(
  'user/fetchChangePassword',
  async () => {
    const response = await changePassword();
    return response.data;
  }
);
