import React from 'react';
import { useState, useEffect } from 'react';
import ItemList from '../ItemList/itemList';
import BlendsList from "../../data/data";
import { useParams } from 'react-router-dom';
import Loading from '../loading/Loading';
<<<<<<< HEAD
import {collection, getDocs, getFirestore, query, where} from 'firebase/firestore'
=======
import {doc, getDoc, getFirestore} from 'firebase/firestore'
>>>>>>> parent of 51ecada (rendering components from db but yet havent find a way to filter them)




function ItemListContainer({greeting}) {
  const {cat} = useParams ()
  const [loading, setLoading] = useState(true)

<<<<<<< HEAD

//   useEffect(() => {
//     const db = getFirestore()
//     if (cat) {
//         const queryCollection = collection(db, 'items')
//         const queryCollectionFilter = query(queryCollection, where('category', '==', cat))
//         getDocs(queryCollectionFilter)
//         .then(resp => setBlends( resp.docs.map(item => ( { id: item.id, ...item.data() } ) ) ) )
//         .catch((err)=> console.log(err))
//         .finally(()=>setLoading(false))                             
//     } else {
//         const queryCollection = collection(db, 'items')
//         getDocs(queryCollection)
//         .then(resp => setBlends( resp.docs.map(item => ( { id: item.id, ...item.data() } ) ) ) )
//         .catch((err)=> console.log(err))
//         .finally(()=>setLoading(false))                  
//     }
// }, [cat])




   useEffect(()=>{
     setLoading(true)
     const db = getFirestore()
     const qryCollection = collection(db, 'productos')
     getDocs (qryCollection)
       .then (resp => setBlendsList(resp.docs.map( item => ({id: item.id, ...item.data()}))))
       .then (resp => setBlends(resp.docs.map( item => ({id: item.id, ...item.data()}))))
      .then( cat ?
        setBlends(BlendsList.filter(prods => prods.category === cat))
        :
        setBlends(BlendsList)
        )
       .catch((err)=>console.log(err))
       .finally(()=>setLoading(false))
     },[cat])
   
    
  
     

      
       
// const getBlendsList = new Promise((resolve)=>{
    
//     setTimeout(()=>{
//        const query = cat ? 
//          BlendsList.filter(prods => prods.category === cat)
//        :
//          BlendsList   
//          resolve( query )
//      }, 100)
//  })
  //  useEffect(() => {
  //    setLoading(true)
  //    getBlendsList
  //    .then(respuesta =>setBlends(respuesta))
  //    .catch((err)=>console.log(err))
  //    .finally(()=>setLoading(false))
  //  }, [cat])
=======
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
>>>>>>> parent of 51ecada (rendering components from db but yet havent find a way to filter them)
 
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