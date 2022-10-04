import { configureStore } from "@reduxjs/toolkit"
import productsReducer from "./slicers/productsSlicer"
import cartReducer from "./slicers/cartSlicer"

export const Store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
  },
})
