import React from 'react'
import { useParams } from 'react-router'

const ViewProduct = () => {
    const {productId}=useParams();
  return (
    <div>
      <h1>sk {productId}</h1>
    </div>
  )
}

export default ViewProduct
