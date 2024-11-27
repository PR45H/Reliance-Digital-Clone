import { combineReducers, configureStore } from "@reduxjs/toolkit";
import productReducer from "../reducers/productSlice"
const reducer = combineReducers({
    products: productReducer
})

const store = configureStore({
    reducer
})

export default store