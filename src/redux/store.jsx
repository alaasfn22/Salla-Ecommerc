import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../redux/slice/CounterSlice.jsx'
import productReducer from '../redux/slice/ProductSlice.jsx'
import categoryReducer from '../redux/slice/CategorySlice.jsx'
import brandReducer from '../redux/slice/BrandSlice.jsx'

const store = configureStore({
    reducer: {
        counter: counterReducer,
        product: productReducer,
        category: categoryReducer,
        brand: brandReducer,

    }
})

export default store