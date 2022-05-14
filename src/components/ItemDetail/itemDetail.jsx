import React from 'react'

function ItemDetail({name, img, price, id, description }) {
  return (
    <div>
      <h1>23as6d584</h1>
      <h1>{name}</h1>
      <img src={img} alt="" />
      <p>{description}</p>
      <h3>{price}</h3>
    </div>
  )
}

export default ItemDetail