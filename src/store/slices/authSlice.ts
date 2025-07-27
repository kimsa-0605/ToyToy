import { createSlice } from '@reduxjs/toolkit';
import { LogInState } from '../types/authTypes';
import { fetchAuth } from '../slices/authThunk.ts';

const initialState: LogInState = {
  email: '',
  password: '',
  loading: false,
  error: null,
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAuth.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAuth.fulfilled, (state, action) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.email = action.meta.arg.email;
        state.password = action.meta.arg.password;
      })
      .addCase(fetchAuth.rejected, (state, action) => {
        state.loading = false;
        state.isAuthenticated = false;
        state.error = action.payload as string;
      });
  },
});

export default authSlice.reducer;
