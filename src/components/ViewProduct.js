import React from 'react'
import { data, useParams } from 'react-router'

const ViewProduct = () => {
  const { productPrice } = useParams();

  return (

    <div>

      <h1>{productPrice}</h1>

      
    </div>
  )
}

export default ViewProduct
