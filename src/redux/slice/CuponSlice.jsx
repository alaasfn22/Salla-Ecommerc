
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useUpdateData } from "../../Hook/useUpdateData";
export const applayCoupon=createAsyncThunk(
    "cart/applayCoupon",
    async(data,thunkAPI)=>{
        try{
            const res=await useUpdateData(`/api/v1/cart/applyCoupon`, data)
           return res  
        }catch(e){
            return thunkAPI.rejectWithValue(e.response)
        }
    }
)
const initialState={cupon:[], isLoading:false,    error:null}

const cuponSlice=createSlice({
    name:"cupon",
    initialState,
    extraReducers:{ 
        [applayCoupon.pending]:(state)=>{
            state.isLoading=true
        },
        [applayCoupon.fulfilled]:(state,action)=>{
            state.isLoading=false
            state.cupon=action.payload
        },
        [applayCoupon.rejected]:(state,action)=>{
            state.isLoading=false
            state.error=action.payload
        }    
    }
})

export default cuponSlice.reducer
