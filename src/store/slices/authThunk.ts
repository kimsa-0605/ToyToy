import { createAsyncThunk } from '@reduxjs/toolkit';
import { LogInPayload } from '../types/authTypes.ts';
import { logIn } from '../../services/AuthService.ts';

export const fetchAuth = createAsyncThunk(
  'auth/fetchAuth',
  async (login: LogInPayload) => {
    const response = await logIn(login.email, login.password);
    return response.data;
  }
)