import Image from "next/image"
import React from "react"

function ProductImage({ image }) {
  return (
    <div className="w-20 sm:w-40">
      <Image
        className="object-fill"
        src={image}
        alt="Picture of the author"
        width={200}
        height={200}
      />
    </div>
  )
}

export default ProductImage
