import React from "react"
import ProductImage from "./ProductImage"
import { PRODUCT_CHANGE } from "../../../redux/slicers/productsSlicer"
import { useDispatch } from "react-redux"
import axios from "axios"

function ProductCard({ isMain, product, total }) {
  const dispatch = useDispatch()
  const buttonHandler = (obj) => {
    const { id, count, price } = obj
    const API = async () => {
      await axios.patch(
        `https://spend-money-app.herokuapp.com/products/${id}`,
        { count: `${count}` },
      )
      await axios.patch("https://spend-money-app.herokuapp.com/cart", {
        money: `${price}`,
      })
    }
    API()
    dispatch(PRODUCT_CHANGE(obj))
  }

  return (
    <div className="flex flex-col justify-center  items-center rounded-md shadow-md bg-white">
      <h1>{product.productName}</h1>
      <ProductImage image={product.image} />
      {!isMain ? (
        <>
          <div className="w-full p-2 text-left sm:text-lg">
            {product.productPrice} $
          </div>
          <div className="flex w-full justify-between p-2 sm:text-lg">
            {Number(product.productPrice) <= total && (
              <button
                className={`${
                  product.count > 0 ? "bg-green-400" : "bg-teal-500"
                }  rounded-lg p-1 sm:p-2`}
                onClick={() =>
                  buttonHandler({
                    id: product.id,
                    count: Number(product.count) + 1,
                    price: total
                      ? Number(total) - Number(product.productPrice)
                      : -Number(product.productPrice),
                  })
                }>
                {product.count <= 0 ? "Add Cart" : "Add More"}
              </button>
            )}
            {product.count <= 0 || (
              <button
                className={`${
                  product.count > 1 ? "bg-rose-500" : "bg-red-600 text-white"
                }  rounded-lg p-1 sm:p-2`}
                onClick={() =>
                  buttonHandler({
                    id: product.id,
                    count: Number(product.count) - 1,
                    price: total
                      ? Number(total) + Number(product.productPrice)
                      : +Number(product.productPrice),
                  })
                }>
                {product.count > 1 ? "Decrease" : "Remove From Cart"}
              </button>
            )}
          </div>
          <h1 className="sm:text-xl p-2 w-full text-left">
            {product.count} piece
          </h1>
        </>
      ) : (
        <div>
          <p className="text-lg p-2 w-full text-left">{product.count} piece</p>
        </div>
      )}
    </div>
  )
}

export default ProductCard
