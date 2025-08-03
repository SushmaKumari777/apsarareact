import React from 'react'
import { data, useParams } from 'react-router'

const ViewProduct = () => {
  const { productId } = useParams();

  return (

    <div>

      <h1>{productId}</h1>

      
    </div>
  )
}

export default ViewProduct
