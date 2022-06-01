import { ImCart } from "react-icons/im";
import React from 'react'
import './cartWidget.css'
import { useCartContext } from "../../context/CartContext";

function CartWidget() {
  const{TotalQty} = useCartContext()
    
  return (
    <div className= {TotalQty>0 ? "display" : "noDisplay"}>
    <p>{TotalQty}</p>
    <ImCart/>
    </div>
  )
}

export default CartWidget