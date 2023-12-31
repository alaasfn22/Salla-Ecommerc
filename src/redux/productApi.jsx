import { createAsyncThunk } from '@reduxjs/toolkit'
import { useGetData } from '../Hook/useGetData'

export const getProducts = createAsyncThunk("products/getProducts", async (limit, thunkAPI) => {
    try {
        const res = await useGetData(`/api/v1/products?limit=${limit}`)
        return res.data
    } catch (e) {
        return thunkAPI.rejectWithValue(e.message)
    }
})