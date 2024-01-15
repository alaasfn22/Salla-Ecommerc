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

export const getQueryAllPeoducts=createAsyncThunk(
  "products/getQueryAllPeoducts",
  async (queryString,thunkAPI)=>{
    try{
      const res=await useGetData(`/api/v1/products?${queryString}`)
      return res
      }catch(e){
        return thunkAPI.rejectWithValue(e.response)
      }
  }
)
export const getProductById = createAsyncThunk(
  "products/getProductById",
  async (id, thunkAPI) => {
    try {
      const res = await useGetData(`/api/v1/products/${id}`);
      return res;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.response);
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
export const getAllProductBrandId = createAsyncThunk(
  "products/getAllProductBrandId",
  async (data, thunkAPI) => {
    try {
      const res = await useGetData(
        `/api/v1/products?limit=${data.limit}&page=${data.page}&brand=${data.id}`
      );
      console.log(data);
      return res;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.response);
    }
  }
);

export const getAllProductByCategory = createAsyncThunk(
  "products/getAllProductByCategory",
  async (data, thunkAPI) => {
    try {
      const res = await useGetData(
        `/api/v1/products?limit=${data.limit}&page=${data.page}&category=${data.id}`
      );
      return res;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.response);
    }
  }
);

const initialState = {
  products: [],
  specificProduct: [],
  likeProducts: [],
  productByBrand: [],
  productByCat: [],
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
    [getQueryAllPeoducts.pending]: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    [getQueryAllPeoducts.fulfilled]: (state, action) => {
      state.products = action.payload;
      state.isLoading = false;
    },
    [getQueryAllPeoducts.rejected]: (state, action) => {
      state.error = action?.payload;
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
    [getAllProductBrandId.pending]: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    [getAllProductBrandId.fulfilled]: (state, action) => {
      state.productByBrand = action.payload;
      state.isLoading = false;
    },
    [getAllProductBrandId.rejected]: (state, action) => {
      state.error = action?.payload;
      state.isLoading = false;
    },
    [getAllProductByCategory.pending]: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    [getAllProductByCategory.fulfilled]: (state, action) => {
      state.productByCat = action.payload;
      state.isLoading = false;
    },
    [getAllProductByCategory.rejected]: (state, action) => {
      state.error = action?.payload;
      state.isLoading = false;
    },
  },
});

export default productSlice.reducer;
