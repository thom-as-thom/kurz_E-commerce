import React from 'react';
import './item.css';
import { Link } from 'react-router-dom';


function Item({imgUrl, id, title, price, description}) {
  return (
    <Link to= {`/item/${id}`}>
    <div className="item-card">
        <h1>{title}</h1>
        <div classId='imgContainer'>
        <img className='itemImg' src={imgUrl} alt="" />
        </div>
        <p>{description}</p>
  
    </div>    
    </Link>
  )
}

export default Item