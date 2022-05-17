import React from 'react';
import { useState, useEffect } from 'react';
import ItemList from '../ItemList/itemList';
import BlendsList from "../../data/data";
import Selector from '../selector/selector';
import { useParams } from 'react-router-dom';
import Loading from '../loading/Loading';



function ItemListContainer({greeting}) {
  const {cat} = useParams ()
  const [loading, setLoading] = useState(true)

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
      <p>
        {greeting}
      </p>
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