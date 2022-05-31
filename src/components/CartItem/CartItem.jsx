import React from 'react';
import './CartItem.css';

import { useCartContext } from '../../context/CartContext'


function CartItem({imgUrl, id, title, price, qty, totalPrice}) {
  const {deleteItem} = useCartContext();
  function deleteI () {
    deleteItem(id)
  }
  

  return (
    
    <div className="cartItem-card">
        <div>
          <div className='cartImgContainer'>
          <img className='cartItemImg' src={imgUrl} alt="" />
          </div>
        <h1>{title}</h1>
        </div>
        <p> Precio unitario <br/> ${price}</p>
        <span>cantidad <br/> {qty}</span>
        <p>total <br/> ${totalPrice}</p>
      <button onClick = {deleteI}>x</button>
  
    </div>    
    
  )
}

export default CartItem