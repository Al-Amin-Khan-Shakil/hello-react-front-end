import { createSlice } from '@reduxjs/toolkit';
import fetchData from './fetchApi';

const initialState = {
  data: '',
  isSuccess: false,
  message: '',
  loading: false,
};

const randomMessage = createSlice({
  name: 'RandomMessage',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.message = action.payload;
        state.loading = false;
      });
  },
});

export default randomMessage.reducer;
