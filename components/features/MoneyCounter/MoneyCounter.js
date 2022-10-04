import React from "react"

function MoneyCounter({ money }) {
  return (
    <section className="my-5 sm:text-lg text-center">
      People are trying to spend{" "}
      <span className="text-green-600">${money}</span>, they&apos;ve spent{" "}
      <span className="text-red-600">${100_000_000_000 - money}</span> so far
    </section>
  )
}

export default MoneyCounter
