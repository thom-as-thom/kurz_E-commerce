import React from 'react'
import { useState } from 'react'
import './itemCount.css'


function ItemCount({stock, initial, onAdd}) {

    const  [number, setNumber] = useState(initial)
    function increase(){
        if(number<stock)
        {
            setNumber (Number(number)+1)
        }
        
    }
    function decrease (){
        if (number > initial){
            setNumber (number-1)
        }
    }
    function addToCart (){
            onAdd(number)
    }
    

        return (
            <div className='centered'>
                <section id='counter'>
                    <span className='buttonSpan' onClick={decrease} > - </span>
                    <input id='inputNum'  type="text"  max={stock} min='0' readOnly value={number}/>
                    <span className='buttonSpan' onClick={increase}> + </span>
                </section>
                    <button onClick={addToCart}>agregar al carrito</button>
            </div>
        )
}

export default ItemCount