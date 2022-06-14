import React from 'react'
import ItemCount from '../itemCount/itemCount'
import './ItemDetail.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCartContext } from '../../context/CartContext'
import Loading from '../loading/Loading'



function ItemDetail({ name, img, price, id, description }) {
    
    const [loading, setLoading] = useState(true);
    
    setTimeout(() => {
        setLoading(false)
    }, 1500);

    const [inputType, setInputType ] = useState('preBuy')
    const {addToCart} = useCartContext()

    const buyEvent=(number)=>{
        setInputType('afterBuy')
        addToCart(id, name, img, price, number)
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
                        <ItemCount stock='5' initial='1' 
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