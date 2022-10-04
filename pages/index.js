import axios from "axios"
import Link from "next/link"

import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import MoneyCounter from "../components/features/MoneyCounter/MoneyCounter"

import Header from "../components/Header/Header"
import Main from "../components/HomeMain/Main"
import {
  PRODUCTS_FROM_API,
  MONEY_FROM_API,
  PRODUCT_LOAD,
} from "../redux/slicers/productsSlicer"

export const getServerSideProps = async () => {
  const response = await axios.get(
    "https://spend-money-app.herokuapp.com/products",
  )
  const data = await response.data

  const responseCart = await axios.get(
    "https://spend-money-app.herokuapp.com/cart",
  )
  const dataCart = await responseCart.data[0]
  return {
    props: {
      products: data,
      cart: dataCart,
    },
  }
}

export default function Home({ products, cart }) {
  const dispatch = useDispatch()
  const PRODUCTS = useSelector(PRODUCTS_FROM_API)
  const MONEY = useSelector(MONEY_FROM_API)
  useEffect(() => {
    dispatch(PRODUCT_LOAD({ products, money: cart.money }))
  }, [cart, dispatch, products])
  return (
    <div className=" bg-gradient-to-r from-violet-500 to-fuchsia-500 h-screen">
      <div className="container mx-auto">
        <div className="absolute bg-white h-56 top-0 left-0 right-0">
          <Header />
          <MoneyCounter money={MONEY} />
          <div className="text-center text-lg mb-5">
            <Link href="/products">
              <a className="p-2 text-violet-700 border-2 rounded-lg border-violet-700 hover:bg-violet-700 hover:text-white transition-colors duration-300">
                Buy Something For Yourself
              </a>
            </Link>
          </div>
        </div>
        <div className="pt-64">
          <Main MONEY={MONEY} PRODUCTS={PRODUCTS} />
        </div>
      </div>
    </div>
  )
}
