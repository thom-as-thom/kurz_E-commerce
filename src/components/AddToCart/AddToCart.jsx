import React, { useState } from 'react'
import AddedToCart from '../AddedToCart/AddedToCart'
import ItemCount from '../itemCount/itemCount'

function AddToCart(stock, initial, onAdd) {
    
    const [BuyStat, setBuyStat] = useState('counter')
    return(
      <>
      <div>
          
          { BuyStat === 'counter' ? 
              <ItemCount stock={stock} initial={initial} onAdd={onAdd} buttonClick={()=>{
                setBuyStat('button')}} />
              :
              <AddedToCart/>
            }

      </div>
      </>
      
      
  )
  }

export default AddToCart