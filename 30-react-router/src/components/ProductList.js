import React from 'react'
import ProductItem from './ProductItem'

export default function ProductList(props) {
  const {products} = props
  return (
    <>
    <h2>Product-List</h2>
      <ul>
        {
        products.map((el) => {
          return (
            <ProductItem
              key={el.id}
              product={el}
            />)
        })
        }
      </ul>
    </>
  )
}
