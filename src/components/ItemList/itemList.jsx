import Item from "../item/item";
import React, { useEffect, useState } from 'react'
import './itemList.css';
import BlendsList from "../../data/data";


function ItemList() {



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
      <div className="itemlist">
        {loading ?
                <h2>loading...</h2>
                :

                Blends.map((prod)=> <Item title={prod.title} imgUrl={prod.imgUrl} price={prod.price} description={prod.description}/>)  
        }
      </div>

  )
      }

export default ItemList