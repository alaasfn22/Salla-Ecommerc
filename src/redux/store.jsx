import { configureStore } from '@reduxjs/toolkit'
import productReducer from '../redux/slice/ProductSlice.jsx'
import categoryReducer from '../redux/slice/CategorySlice.jsx'
import brandReducer from '../redux/slice/BrandSlice.jsx'
import authReducer from '../redux/slice/Authentication.jsx'

const store = configureStore({
    reducer: {
        product: productReducer,
        category: categoryReducer,
        brand: brandReducer,
        auth:authReducer

    }
})

export default store