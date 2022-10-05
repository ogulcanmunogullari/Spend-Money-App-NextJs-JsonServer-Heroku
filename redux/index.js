import { configureStore } from "@reduxjs/toolkit"
import productsReducer from "./slicers/productsSlicer"

export const Store = configureStore({
  reducer: {
    products: productsReducer,
  },
})
