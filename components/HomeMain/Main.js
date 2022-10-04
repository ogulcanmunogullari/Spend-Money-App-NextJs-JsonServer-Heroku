import Link from "next/link"
import React from "react"
import MoneyCounter from "../features/MoneyCounter/MoneyCounter"
import ProductCard from "../features/ProductsCard/ProductCard"

function Main({ PRODUCTS, MONEY }) {
  return (
    <main>
      <section className=" bg-gradient-to-r from-violet-500 to-fuchsia-500 grid grid-cols-2 px-2 sm:px-0 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
        {PRODUCTS.length > 0 &&
          PRODUCTS?.filter((product) => product.count > 0).map((product) => {
            return (
              <ProductCard
                isMain={true}
                total={MONEY}
                product={product}
                key={product.id}
              />
            )
          })}
      </section>
    </main>
  )
}

export default Main
