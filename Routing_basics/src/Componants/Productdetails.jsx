import React from 'react'
import { useParams } from 'react-router-dom'

function Productdetails() {
    let {id}=useParams()
    console.log(id)
  return (
    <>
   <h3>Product details {id}</h3>
    </>
  )
}

export default Productdetails