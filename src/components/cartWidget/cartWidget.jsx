import React from 'react'

import { ImCart } from "react-icons/im";

import { useCartContext } from "../../context/CartContext";

import './cartWidget.css'

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