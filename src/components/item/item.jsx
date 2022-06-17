import React from 'react';

import { Link } from 'react-router-dom';

import './item.css';


function Item({imgUrl, id, title, price, description}) {
return (
    <Link to= {`/item/${id}`}>
        <div className="item-card">
            <div className='item-title'>
                <h1 >{title}</h1>
            </div>
            <div className='imgContainer'>
                <img className='itemImg' src={imgUrl} alt="" />
            </div>
            <p className='item-description'>{description}</p>

        </div>    
    </Link>
)
}

export default Item