import React from 'react'
import { useCartContext } from '../../context/CartContext'
import CartItem from '../CartItem/CartItem'

function Cart() {
   const {cart} = useCartContext()
   
  return (
    cart.map((prod)=> <CartItem key={prod.id} id={prod.id} title={prod.name} imgUrl={prod.photo} price={prod.price} qty={prod.qty}/>) 
  )
}

export default Cart