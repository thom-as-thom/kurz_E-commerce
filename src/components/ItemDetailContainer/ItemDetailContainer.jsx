import React from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../ItemDetail/itemDetail.jsx'
import { useState, useEffect } from 'react'
import Loading from '../loading/Loading.jsx'
import {doc, getDoc, getFirestore} from 'firebase/firestore'


function ItemDetailContainer() {

const{ id } = useParams ()
const [detailedBlend, setDetailedBlend] = useState({})
const [loading, setloading] = useState(true)

useEffect(() => {
    setloading(true)
    const db = getFirestore()
    const dbQry = doc(db, 'productos', id)
        getDoc (dbQry)
        .then(resp => setDetailedBlend({id: resp.id, ...resp.data()}))
        .catch((err)=>console.log(err))
        .finally(setloading(false))
},[id])

return (
    
    loading ? 
    <Loading/>
    :
    <ItemDetail name={detailedBlend.title} img={detailedBlend.imgUrl} price={detailedBlend.price} description={detailedBlend.description} id={detailedBlend.id}/>
    
)
}

export default ItemDetailContainer