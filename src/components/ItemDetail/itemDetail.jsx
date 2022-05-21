import React from 'react'
import ItemCount from '../itemCount/itemCount'
import './ItemDetail.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'



function ItemDetail({name, img, price, id, description }) {
  const [addedItems, setAddedItems] = useState(0)






    const [inputType, setInputType ] = useState('preBuy')

    const buyEvent=()=>{
        setInputType('afterBuy')
    }
  

  return (
    <div className='itemDetail'>
          <div className='detailImg'>
             <img className='itemDetailImg' src={img} alt="this is an image" />
          </div>
          <div className='detailText'>
              <h1>{name}</h1>
              <p>{description}</p>
              <div className='addToCart'>

              <>
                
                  {inputType === "preBuy"? 
                  <div>
                    <h3 className='price'>{price}</h3>
                    <ItemCount stock='5' initial='1' 
                    onAdd ={buyEvent}/>
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