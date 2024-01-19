import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const url = `http://127.0.0.1:3000/api/v1/greeting/index`;
const fetchData = createAsyncThunk('greetings/get', async (arg, { rejectWithValue }) => {
  try {
    const { data } = await axios.get(url);
    return data;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});

export default fetchData;