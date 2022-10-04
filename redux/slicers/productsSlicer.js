import { createSlice } from "@reduxjs/toolkit"

const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    money: 0,
  },
  reducers: {
    PRODUCT_LOAD: (state, action) => {
      state.products = action.payload.products
      state.money = action.payload.money
    },
    PRODUCT_CHANGE: (state, action) => {
      state.products = state.products?.map((product) => {
        if (product.id == action.payload.id) {
          return { ...product, count: action.payload.count }
        }
        return product
      })
      state.money = action.payload.price
    },
  },
})

export default productsSlice.reducer
export const PRODUCTS_FROM_API = (state) => state.products.products
export const MONEY_FROM_API = (state) => state.products.money
export const { PRODUCT_CHANGE, PRODUCT_LOAD } = productsSlice.actions
