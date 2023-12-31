import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useGetData } from "../../Hook/useGetData";

export const getCategories = createAsyncThunk(
  "category/getcategories",
  async (limit, thunkAPI) => {
    try {
      const res = await useGetData(`/api/v1/categories?limit=${limit}`);
      return res;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
export const getCategoryPagination = createAsyncThunk(
  "category/getCategoryPagination",
  async (page, thunkAPI) => {
    try {
      const res = await useGetData(`/api/v1/categories?limit=8&page=${page}`);
      return res;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
export const getSpecificCategory = createAsyncThunk(
  "category/getSpecificCategory",
  async (id, thunkAPI) => {
    try {
      const res = await useGetData(`/api/v1/categories/${id}`);
      return res;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
const initialState = {
  category: [],
  specificCategory: [],
  isLoading: false,
  error: null,
};

const categorytSlice = createSlice({
  name: "category",
  initialState,
  extraReducers: {
    ///////////////////////get books/////////////////////////////
    [getCategories.pending]: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    [getCategories.fulfilled]: (state, action) => {
      state.category = action.payload;
      state.isLoading = false;
    },
    [getCategories.rejected]: (state, action) => {
      state.error = action?.payload;
      // state.error = action?.error.message // when need to print result of message
      state.isLoading = false;
    },
    //////////////////////////////////////////////
    [getCategoryPagination.pending]: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    [getCategoryPagination.fulfilled]: (state, action) => {
      state.category = action.payload;
      state.isLoading = false;
    },
    [getCategoryPagination.rejected]: (state, action) => {
      state.error = action?.payload;
      // state.error = action?.error.message // when need to print result of message
      state.isLoading = false;
    },
    [getSpecificCategory.pending]: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    [getSpecificCategory.fulfilled]: (state, action) => {
      state.specificCategory = action.payload;
      state.isLoading = false;
    },
    [getSpecificCategory.rejected]: (state, action) => {
      state.error = action?.payload;
      // state.error = action?.error.message // when need to print result of message
      state.isLoading = false;
    },
  },
});

export default categorytSlice.reducer;
