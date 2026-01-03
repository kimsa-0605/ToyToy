import { createSlice } from '@reduxjs/toolkit';
import { UserState } from '../types/user';
import { fetchUserByEmail, fetchUserById, fetchChangePassword } from './userThunks.ts';

const initialState: UserState = {
  user: null,
  loading: false,
  error: null,
  changePasswordMessage: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    clearUser(state) {
      state.user = null;
      state.error = null;
      state.changePasswordMessage = '';
    },
  },
  extraReducers: (builder) => {
    builder
    // Get by email
      .addCase(fetchUserByEmail.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUserByEmail.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(fetchUserByEmail.rejected, (state, action) => {
        state.loading = false;
        state.user = null;
        state.error = action.payload as string;
      })
    
    // Update by id
      .addCase(fetchUserById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUserById.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(fetchUserById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch user by ID';
      })

    // Change password by id
      .addCase(fetchChangePassword.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchChangePassword.fulfilled, (state, action) => {
        state.loading = false;
        state.changePasswordMessage = action.payload.message;
      })
      .addCase(fetchChangePassword.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to change user password';
      });
  },
});

export const { clearUser } = userSlice.actions;
export default userSlice.reducer;
