import React from 'react';
import { useState, useEffect } from 'react';
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