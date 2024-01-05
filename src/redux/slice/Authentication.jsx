import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useInsertData } from "../../Hook/useInsertData";
export const loginUser=createAsyncThunk(  "auth/login",  async(userData,thunkAPI)=>{
        try{
           const res=await useInsertData(`/api/v1/auth/login`, userData)
           return res.data          
        }catch(e){
            return thunkAPI.rejectWithValue( e.response)
        }
    }
)
const initialState={login:[], isLoading:false ,error:null}
export const AuthenticationSlice=createSlice({
    name:"auth",
    initialState,
     extraReducers:{
        [loginUser.pending]: (state) => {
            state.isLoading = true;
            state.error = null;
        },
        [loginUser.fulfilled]: (state, action) => {
            state.login = action.payload;
            state.isLoading = false;
        },
        [loginUser.rejected]: (state, action) => {
            state.error = action?.payload;
            state.isLoading = false;
        },
    }
})

export default AuthenticationSlice.reducer
