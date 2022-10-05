import Head from "next/head"
import axios from "axios"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import ProductCard from "../components/features/ProductsCard/ProductCard"
import {
  PRODUCTS_FROM_API,
  MONEY_FROM_API,
  PRODUCT_LOAD,
} from "../redux/slicers/productsSlicer"
import Header from "../components/Header/Header"

import MoneyCounter from "../components/features/MoneyCounter/MoneyCounter"

export const getServerSideProps = async () => {
  const response = await axios.get(
    "https://spend-money-app.herokuapp.com/products",
  )
  const data = await response.data

  const responseCart = await axios.get(
    "https://spend-money-app.herokuapp.com/cart",
  )
  const dataCart = await responseCart.data
  return {
    props: {
      products: data,
      cart: dataCart,
    },
  }
}

export default function Products({ products, cart }) {
  const dispatch = useDispatch()
  const PRODUCTS = useSelector(PRODUCTS_FROM_API)
  const MONEY = useSelector(MONEY_FROM_API)
  useEffect(() => {
    dispatch(PRODUCT_LOAD({ products, money: Number(cart.money) }))
  }, [cart, dispatch, products])
  return (
    <div className="bg-gradient-to-r from-violet-500 to-fuchsia-500">
      <Head>
        <title>Main Page</title>
      </Head>
      <div className="absolute bg-white h-40 top-0 left-0 right-0">
        <Header />
        <MoneyCounter money={MONEY} />
      </div>
      <main className="container pt-48 px-2 sm:px-0 mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 ">
        {PRODUCTS.length > 0 &&
          PRODUCTS?.map((product) => {
            return (
              <ProductCard
                isMain={false}
                total={MONEY}
                product={product}
                key={product.id}
              />
            )
          })}
      </main>
    </div>
  )
}
