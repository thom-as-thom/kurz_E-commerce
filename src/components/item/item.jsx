import React from 'react';
import './item.css';


function Item({imgUrl, id, title, price, description}) {
  return (
    <div className="item-card">
        <h1>{title}</h1>
        <div classId='imgContainer'>
        <img className='itemImg' src={imgUrl} alt="" />
        </div>
        <p>{description}</p>
        <p>{price}</p>
  
    </div>
  )
}

export default Item