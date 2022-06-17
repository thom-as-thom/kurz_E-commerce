import React from 'react';
import './CartItem.css';

import { useCartContext } from '../../context/CartContext'
import ItemCount from '../itemCount/itemCount';


function CartItem({imgUrl, id, title, price, qty, totalPrice, stock}) {
    const {deleteItem, cartModification} = useCartContext();
    function deleteI () {
        deleteItem(id)
    }

    function onChange(n) {
        cartModification(id,title,imgUrl,price,n, stock)
    }
    
        
    return (
        
        <div className="cartItem-card">
            <div>
                <div className='cartImgContainer'>
                    <img className='cartItemImg' src={imgUrl} alt=""
                    />
                </div>
            </div>
            <div>
            <h1>{title}</h1>
            <ItemCount initial={qty} stock={stock} onChange={onChange}/>
            </div>
            <p> ${totalPrice}</p>
            <button onClick = {deleteI}>x</button>

        </div>    
        
    )
}

export default CartItem