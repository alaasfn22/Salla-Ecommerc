import { configureStore } from '@reduxjs/toolkit'
import productReducer from '../redux/slice/ProductSlice.jsx'
import categoryReducer from '../redux/slice/CategorySlice.jsx'
import brandReducer from '../redux/slice/BrandSlice.jsx'
import authReducer from '../redux/slice/Authentication.jsx'
import cartReducer from '../redux/slice/CartSlice.jsx'

const store = configureStore({
    reducer: {
        product: productReducer,
        category: categoryReducer,
        brand: brandReducer,
        auth:authReducer,
        cart:cartReducer

    }
})

export default store