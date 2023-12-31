import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useGetData } from "../../Hook/useGetData";

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async (_, thunkAPI) => {
    try {
      const res = await useGetData(`/api/v1/products?limit=8`);
      return res;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
export const getProductsPagination = createAsyncThunk(
  "products/getProductspagination",
  async (page, thunkAPI) => {
    try {
      const res = await useGetData(`/api/v1/products?limit=8&page=${page}`);
      return res;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
export const getProductById = createAsyncThunk(
  "products/getProductById",
  async (id, thunkAPI) => {
    try {
      const res = await useGetData(`/api/v1/products/${id}`);
      return res;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
export const getProductByCategory = createAsyncThunk(
  "products/getProductByCategory",
  async (id, thunkAPI) => {
    try {
      const res = await useGetData(`/api/v1/products?category=${id}`);
      return res;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

const initialState = {
  products: [],
  specificProduct: [],
  likeProducts: [],
  isLoading: false,
  error: null,
};

const productSlice = createSlice({
  name: "products",
  initialState,
  extraReducers: {
    ///////////////////////get books/////////////////////////////
    [getProducts.pending]: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    [getProducts.fulfilled]: (state, action) => {
      state.products = action.payload;
      state.isLoading = false;
    },
    [getProducts.rejected]: (state, action) => {
      state.error = action?.payload;
      // state.error = action?.error.message // when need to print result of message
      state.isLoading = false;
    },
    //////////////////////////////////////////////
    [getProductsPagination.pending]: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    [getProductsPagination.fulfilled]: (state, action) => {
      state.products = action.payload;
      state.isLoading = false;
    },
    [getProductsPagination.rejected]: (state, action) => {
      state.error = action?.payload;
      // state.error = action?.error.message // when need to print result of message
      state.isLoading = false;
    },
    //////////////////////////////////////////////
    [getProductById.pending]: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    [getProductById.fulfilled]: (state, action) => {
      state.specificProduct = action.payload;
      state.isLoading = false;
    },
    [getProductById.rejected]: (state, action) => {
      state.error = action?.payload;
      // state.error = action?.error.message // when need to print result of message
      state.isLoading = false;
    },
    [getProductByCategory.pending]: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    [getProductByCategory.fulfilled]: (state, action) => {
      state.likeProducts = action.payload;
      state.isLoading = false;
    },
    [getProductByCategory.rejected]: (state, action) => {
      state.error = action?.payload;
      // state.error = action?.error.message // when need to print result of message
      state.isLoading = false;
    },
  },
});

export default productSlice.reducer;
