import React from 'react'

function itemDetail({name, img, price, id, description }) {
  return (
    <div>
      <h1>{name}</h1>
      <img src="img" alt="" />
      <p>{description}</p>
      <h3>{price}</h3>
    </div>
  )
}

export default itemDetail