import React from 'react';
import { useState, useEffect } from 'react';
import ItemList from '../ItemList/itemList';
import BlendsList from "../../data/data";
import { useParams } from 'react-router-dom';
import Loading from '../loading/Loading';
import {doc, getDoc, getFirestore} from 'firebase/firestore'




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
     }, 100)
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