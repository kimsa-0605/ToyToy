import { createAsyncThunk } from '@reduxjs/toolkit';
import { getUserByEmail } from '../../../features/users/services/UserService.ts';

export const fetchUserByEmail = createAsyncThunk(
  'user/fetchUserByEmail',
  async (email: string) => {
    const response = await getUserByEmail(email);
    return response.data;
  }
);
