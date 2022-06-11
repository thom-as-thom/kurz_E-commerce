import React from 'react';
import { useState, useEffect } from 'react';
import ItemList from '../ItemList/itemList';
// import BlendsList from "../../data/data";
import { useParams } from 'react-router-dom';
import Loading from '../loading/Loading';
import {collection, getDocs, getFirestore, query, where} from 'firebase/firestore'




function ItemListContainer({greeting}) {

const {cat} = useParams ()
const [loading, setLoading] = useState(true)
const [Blends, setBlends] = useState([])


                                                            //aca hay que arreglar los if, codigo repetido

useEffect(()=>{
    setLoading(true)
    const db = getFirestore()
    if (cat){
        const qryCollection = collection(db, 'productos')
        const qryCollectionFilter = query( qryCollection, where('category', '==', cat))
            getDocs(qryCollectionFilter)

            .then (resp => setBlends(resp.docs.map( item => ({id: item.id, ...item.data()}))))
            .catch((err)=>console.log(err))
            .finally(()=>setLoading(false))
    }
    else{
        const qryCollection = collection(db, 'productos')
            getDocs(qryCollection)
            .then (resp => setBlends(resp.docs.map( item => ({id: item.id, ...item.data()}))))
            .catch((err)=>console.log(err))
            .finally(()=>setLoading(false))
    }
    },[cat])
    
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
