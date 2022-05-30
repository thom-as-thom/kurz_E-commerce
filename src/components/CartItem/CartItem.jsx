import React from 'react';
import './CartItem.css';
import { Link } from 'react-router-dom';


function CartItem({imgUrl, id, title, price, qty, totalPrice}) {
  return (
    <Link to= {`/item/${id}`}>
    <div className="cartItem-card">
        <div className='cartImgContainer'>
        <img className='cartItemImg' src={imgUrl} alt="" />
        <h1>{title}</h1>
        </div>
        <p>{price}</p>
        <span>{qty}</span>
        <p>{totalPrice}</p>
  
    </div>    
    </Link>
  )
}

export default CartItem