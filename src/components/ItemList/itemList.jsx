import Item from "../item/item";
import React, { useEffect, useState } from 'react'
import './itemList.css';



function ItemList({products}) {


  

  return (  
      <div className="itemlist">
        {
            products.map((prod)=> <Item title={prod.title} imgUrl={prod.imgUrl} price={prod.price} description={prod.description}/>)  
        }
      </div>

  )
      }

export default ItemList