import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useGetData } from "../../Hook/useGetData";

export const getCategories = createAsyncThunk(
  "category/getcategories",
  async (data, thunkAPI) => {
    try {
      const res = await useGetData(`/api/v1/categories?limit=${data.limit}&page=${data.page}`);
      return res;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.response);
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
