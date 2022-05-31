import {React, useState} from 'react'
import { useCartContext } from '../../context/CartContext'
import CartItem from '../CartItem/CartItem'
import './cart.css'

function Cart() {
   const {cart,emptyCart} = useCartContext()
  
   

  return (
    <div className='cart'>
    {cart.map((prod)=> <CartItem key={prod.id} id={prod.id} title={prod.name} imgUrl={prod.photo} price={prod.price} qty={prod.qty} totalPrice={prod.totalPrice}/>)}

    <div>total: {} </div>
    <button onClick={emptyCart}> VACIAR CARRITO </button>
    </div>

  )
}

export default Cart