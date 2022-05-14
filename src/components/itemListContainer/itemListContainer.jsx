import React from 'react';
import { useState, useEffect } from 'react';
import ItemCount from '../itemCount/itemCount';
import ItemList from '../ItemList/itemList';
import BlendsList from "../../data/data";



function ItemListContainer({greeting}) {

  const getBlendsList = new Promise((resolve)=>{
    setTimeout(()=>{
        resolve( BlendsList )        
    }, 3000)
})
  const [Blends, setBlends] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    getBlendsList
    .then(respuesta =>setBlends(respuesta))
    .catch((err)=>console.log(err))
    .finally(()=>setLoading(false))
  }, [])
 
  return (
    <section>
      <p>
        {greeting}
      </p>
     
      <ItemCount stock='5' initial='1' onAdd ={(amount)=>console.log (`compraste ${amount} de este producto`) }/>
      {
         loading ?
          <h2> cargando ...</h2>
          :
          <ItemList products= {Blends} />
      }
  
    </section>
  )
}

export default ItemListContainer