import React from 'react'
import { useNavigate  } from 'react-router-dom'

export const OrderAummary = () => {
    const navigate = useNavigate()
  return (
    <>
    <div>Order Successful</div>
    <button onClick={() => navigate(-1)}>Go back</button>
    </>
  )
}
