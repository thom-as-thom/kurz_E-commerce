import React from 'react'
import { useParams } from 'react-router-dom'
import BlendsList from '../../data/data.js'
import ItemDetail from '../ItemDetail/itemDetail.jsx'
import { useState, useEffect } from 'react'
import Loading from '../loading/Loading.jsx'
import {doc, getDoc, getFirestore} from 'firebase/firestore'


function ItemDetailContainer() {

  const{ id } = useParams ()
  const [producto, setProducto] = useState({})

  useEffect(()=>{
    const db = getFirestore()
    const dbQry = doc(db, 'productos', 'RcQokrxc5wVog9rqCkiH')
    getDoc (dbQry)
    .then(resp => setProducto({id: resp.id, ...resp.data()}))
  })
 console.log(producto)
  const getDetailedItem = new Promise((resolve)=>
  setTimeout(()=>{
  const detailedItem =  BlendsList.find(blend => blend.id === id)
  resolve (detailedItem)
  },100)
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
      <Loading/>
      :
      <ItemDetail name={detailedBlend.title} img={detailedBlend.imgUrl} price={detailedBlend.price} description={detailedBlend.description} id={detailedBlend.id}/>
    
  )
}

export default ItemDetailContainer