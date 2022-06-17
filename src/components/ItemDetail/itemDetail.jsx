import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

import { useCartContext } from '../../context/CartContext'

import ItemCount from '../itemCount/itemCount'
import Loading from '../loading/Loading'

import './ItemDetail.css'



function ItemDetail({ name, img, price, id, description, stock }) {
    
    const [loading, setLoading] = useState(true);
    
    setTimeout(() => {
        setLoading(false)
    }, 1500);

    const [inputType, setInputType ] = useState('preBuy')
    const {cartModification} = useCartContext()

    const buyEvent=(number)=>{
        setInputType('afterBuy')
        cartModification(id, name, img, price, number,stock)
    }



    return (
        loading ?
            <Loading/>
            :
    <div className='itemDetail'>
        <div className='detailImg'>
            <img className='itemDetailImg' src={img} alt="product" />
        </div>
        <div className='detailText'>
            <h1>{name}</h1>
            <p>{description}</p>
            <div className='addToCart'>

            <>
                
                {inputType === "preBuy"? 
                    <div>
                        <h3 className='price'>${price}</h3>
                        <ItemCount stock={stock} initial='1' 
                        onAdd = {buyEvent} id = {id}/>
                        
                    </div>
                :
                    <div>
                        <Link to='/catalogo'>
                            <button >Seguir comprando</button>
                        </Link>
                        <Link to='/cart'>
                            <button>Ir al carrito</button>
                        </Link>
                    </div>
                }     
            </>
            </div>
        </div>
    </div>
)
}

export default ItemDetail