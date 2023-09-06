import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchCategoriesApi, fetchProductsApi, searchByCategoryApi, searchProductApi } from "../../api/Home.api";

const initialState = {
  productsList: [],
  categories: [],
  search_text: '',
  loading: false,
  message: ''
};

export const fetchProduct = createAsyncThunk('product/fetchAll', async (skip, thunkAPI) => {
  try {
    return await fetchProductsApi(skip).then(response => response.data)
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

export const searchProduct = createAsyncThunk('product/search', async (text, thunkAPI) => {
  try {
    return await searchProductApi(text).then(response => response.data);
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

export const fetchCategories = createAsyncThunk('product/fetchCategories', async (_, thunkAPI) => {
  try {
    return await fetchCategoriesApi().then(response => response.data);
  } catch (error) {
    const message =
      (error.response &&
        error.response.data &&
        error.response.data.message) ||
      error.message ||
      error.toString()
    return thunkAPI.rejectWithValue({ message });
  }
})

export const searchByCategory = createAsyncThunk('product/searchByCategory', async (category, thunkAPI) => {
  try {
    return await searchByCategoryApi(category).then(response => response.data);
  } catch (error) {
    const message =
      (error.response &&
        error.response.data &&
        error.response.data.message) ||
      error.message ||
      error.toString()
    return thunkAPI.rejectWithValue({ message });
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
        state.productsList = action.payload || [];
        state.loading = false
      })
      .addCase(fetchProduct.rejected, (state, action) => {
        state.message = action.payload;
        state.loading = false
      })
      .addCase(searchProduct.pending, (state) => {
        state.loading = true
      })
      .addCase(searchProduct.fulfilled, (state, action) => {
        state.productsList = action.payload || [];
        state.loading = false
      })
      .addCase(searchProduct.rejected, (state, action) => {
        state.message = action.payload;
        state.loading = false
      })
      .addCase(fetchCategories.pending, (state) => {
        state.loading = true
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.categories = action.payload || [];
        state.loading = false
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.message = action.payload;
        state.loading = false
      })
      .addCase(searchByCategory.pending, (state) => {
        state.loading = true
      })
      .addCase(searchByCategory.fulfilled, (state, action) => {
        state.productsList = action.payload || [];
        state.loading = false
      })
      .addCase(searchByCategory.rejected, (state, action) => {
        state.message = action.payload;
        state.loading = false
      })
  }
})

export const { reset } = homeSlice.actions;
export default homeSlice.reducer;
