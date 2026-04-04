import React from 'react'

const ProductPrice  = ({discountPrice,originalPrice}) => {
  return (
    <div>
        <h1 style={{ whiteSpace: "pre-line" }}>
            {`OriginalPrice = ${originalPrice}
            DiscountPrice = ${discountPrice} `}
        </h1>

    </div>
  )
}

export default ProductPrice 