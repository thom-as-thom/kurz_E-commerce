import React from 'react'
import ItemCount from '../itemCount/itemCount'

function ItemDetail({name, img, price, id, description }) {
  return (
    <div>
      <h1>{name}</h1>
      <img src={img} alt="" />
      <p>{description}</p>
      <h3>{price}</h3>
      <ItemCount stock='5' initial='1' onAdd ={(amount)=>console.log (`compraste ${amount} de este producto`) }/>
    </div>
  )
}

export default ItemDetail