import React from 'react'

const ProductInfo = ({name,price,inStock}) => {
  return (
    <div>
        <div className="name">
            <h1>Name = {name}</h1>
        </div>
        <div className="Price">
            <h1>Price = {price}</h1>
        </div>
        <div className="instock">
            <h1> Product {inStock ? "In Stock":"Out OF Stock"}</h1>
        </div>
    </div>
  )
}

export default ProductInfo