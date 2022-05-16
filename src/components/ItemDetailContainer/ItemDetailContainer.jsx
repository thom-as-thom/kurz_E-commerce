import React from 'react'
import { useParams } from 'react-router-dom'
import BlendsList from '../../data/data.js'
import ItemDetail from '../ItemDetail/ItemDetail.jsx'
import { useState, useEffect } from 'react'


function ItemDetailContainer() {

  const{ detailId } = useParams ()
  const getDetailedItem = new Promise((resolve)=>
  setTimeout(()=>{
  const detailedItem =  BlendsList.find(blend => blend.id === detailId)
  resolve (detailedItem)
  },2000)
  )
  const [detailedBlend, setDetailedBlend] = useState({})
  const [loading, setloading] = useState(true)

  useEffect(() => {
    getDetailedItem
    .then(respuesta =>setDetailedBlend(respuesta))
    .catch((err)=>console.log(err))
    .finally(()=>setloading(false))
  }, [])
  return (
    
      loading ? 
      <h1>cargando...</h1>
      :
      <ItemDetail name={detailedBlend.title} img={detailedBlend.imgUrl} price={detailedBlend.price} description={detailedBlend.description}/>
    
  )
}

export default ItemDetailContainer