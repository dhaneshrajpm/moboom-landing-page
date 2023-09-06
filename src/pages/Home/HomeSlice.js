import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchProductsApi } from "../../api/Home.api";

const initialState = {
  products: [],
  search_text: '',
  loading: false,
  message: ''
};

export const fetchProduct = createAsyncThunk('product/fetchAll', async (_, thunkAPI) => {
  try {
    return await fetchProductsApi().then((response) => response.data.products)
  } catch (error) {
    const message =
      (error.response &&
        error.response.data &&
        error.response.data.message) ||
      error.message ||
      error.toString()
    return thunkAPI.rejectWithValue(message)
  }
})

export const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    resetSearch: (state) => {
      state.search_text = ''
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProduct.pending, (state) => {
        state.loading = true
      })
      .addCase(fetchProduct.fulfilled, (state, action) => {
        state.products = action.payload;
        state.loading = false
      })
      .addCase(fetchProduct.rejected, (state, action) => {
        state.message = action.payload;
        state.loading = false
      })
  }
})

export const { reset } = homeSlice.actions;
export default homeSlice.reducer;
