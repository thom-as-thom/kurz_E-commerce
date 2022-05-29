import React from 'react';
import { useState, useEffect } from 'react';
import ItemList from '../ItemList/itemList';
import BlendsList from "../../data/data";
import { useParams } from 'react-router-dom';
import Loading from '../loading/Loading';
import { useCartContext } from '../../context/CartContext';



function ItemListContainer({greeting}) {
  const {cat} = useParams ()
  const [loading, setLoading] = useState(true)
  const {saludar, saludo} = useCartContext()
  

  const getBlendsList = new Promise((resolve)=>{
    
    setTimeout(()=>{
      const query = cat ? 
        BlendsList.filter(prods => prods.category === cat)
      :
        BlendsList   
        resolve( query )
    }, 3000)
})
  const [Blends, setBlends] = useState([])
  useEffect(() => {
    setLoading(true)
    getBlendsList
    .then(respuesta =>setBlends(respuesta))
    .catch((err)=>console.log(err))
    .finally(()=>setLoading(false))
  }, [cat])
 
  return (
    <section>
      <button onClick={saludar}>
        {saludo}
      </button >
      {
         loading ?
          <Loading/>
          :
          <div>
           
            <ItemList products= {Blends} />
          </div>
      }
  
    </section>
  )
}

export default ItemListContainer