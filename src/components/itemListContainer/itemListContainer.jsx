import React from 'react'
import ItemCount from '../itemCount/itemCount'


function ItemListContainer({greeting}) {
  return (
    <section>
      <p>
        {greeting}
      </p>

      <ItemCount stock='5' initial='1' onAdd ={(amount)=>console.log (`compraste ${amount} de este producto`) }/>

    </section>
  )
}

export default ItemListContainer