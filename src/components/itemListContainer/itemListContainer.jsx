import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore'

import ItemList from '../ItemList/itemList';
import Loading from '../loading/Loading';




function ItemListContainer() {

const {cat} = useParams ()
const [loading, setLoading] = useState(true)
const [Blends, setBlends] = useState([])


    
    
    useEffect(()=>{
    setLoading(true)
        const db = getFirestore()
        const qryCollection = collection(db, 'productos')
        let qryCollectionFilter = qryCollection
        if (cat) {
            qryCollectionFilter = query(qryCollection, where('category', '==', cat))
        }
        getDocs(qryCollectionFilter)
        .then (resp => setBlends(resp.docs.map( item => ({id: item.id, ...item.data()}))))
        .catch((err)=>console.log(err))
        .finally(()=>setLoading(false))
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
