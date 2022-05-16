import React from 'react'
import ItemCount from '../itemCount/itemCount'
import './ItemDetail.css'

function ItemDetail({name, img, price, id, description }) {
  return (
    <div className='itemDetail'>
          <div className='detailImg'>
             <img className='itemDetailImg' src={img} alt="this is an image" />
          </div>
          <div className='detailText'>
              <h1>{name}</h1>
              <p>{description}</p>
              <div className='addToCart'>
              <h3 className='price'>{price}</h3>
              <ItemCount stock='5' initial='1' onAdd ={(amount)=>console.log (`compraste ${amount} de este producto`) }/>
              </div>
          </div>
    </div>
  )
}

export default ItemDetail