
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit"
import { useInsertData } from "../../Hook/useInsertData"
import { useGetDataByToken } from "../../Hook/useGetData"
import { useDeleteDataByToken } from "../../Hook/useDeleteData"
export const addtoCart=createAsyncThunk(
    "cart/addtoCart",
    async(data,thunkAPI)=>{
        try{
            const res=await useInsertData(`/api/v1/cart`, data)
           return res  
        }catch(e){
            return thunkAPI.rejectWithValue(e.message)
        }
    }
)
export const getAllLoggedToCart=createAsyncThunk(
    "cart/getAllLoggedToCart",
    async(_,thunkAPI)=>{
        try{
            const res=await useGetDataByToken(`/api/v1/cart`)
           return res  
        }catch(e){
            return thunkAPI.rejectWithValue(e.message)
        }
    }
)
export const rempveSpecificProduct=createAsyncThunk(
    "cart/rempveSpecificProduct",
    async(id,thunkAPI)=>{
        try{
            const res=await useDeleteDataByToken(`/api/v1/cart/${id}`)
           return res  
        }catch(e){
            return thunkAPI.rejectWithValue(e.message)
        }
    }
)
const initialState={cart:[],loggedCart:[],isLoading:false,error:null}
const cartSlice=createSlice({
    name:"cart",
    initialState,
    extraReducers:{
        [addtoCart.pending]: (state) => {
            state.isLoading = true;
            state.error = null;
        },
        [addtoCart.fulfilled]: (state, action) => {
            state.cart = action.payload;
            state.isLoading = false;
        },
        [addtoCart.rejected]: (state, action) => {
            state.error = action?.payload;
            state.isLoading = false;
        },
        [getAllLoggedToCart.pending]: (state) => {
            state.isLoading = true;
            state.error = null;
        },
        [getAllLoggedToCart.fulfilled]: (state, action) => {
            state.loggedCart = action.payload;
            state.isLoading = false;
        },
        [getAllLoggedToCart.rejected]: (state, action) => {
            state.error = action?.payload;
            state.isLoading = false;
        },
        [rempveSpecificProduct.pending]: (state) => {
            state.isLoading = true;
            state.error = null;
        },
        [rempveSpecificProduct.fulfilled]: (state, action) => {
            state.loggedCart = action.payload;
            state.isLoading = false;
        },
        [rempveSpecificProduct.rejected]: (state, action) => {
            state.error = action?.payload;
            state.isLoading = false;
        }
    }
    
})
export default cartSlice.reducer
