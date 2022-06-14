import React from 'react'
import { useState } from 'react'
import './itemCount.css'


function ItemCount({stock, initial, onAdd, id, onChange}) {

    const  [number, setNumber] = useState(Number(initial))
    function increase(){
        if(number<stock)
        {
            setNumber(Number(number) + 1)
            if (onChange) {
                onChange(+1)
            }
        }
        
    }
    function decrease (){
        if (number > 1) {
            setNumber(number - 1)
            if (onChange) {
                onChange(-1)
            }
        }
    }
    function addToCart (){
        onAdd(number)
    }
    

        return (


            <div className='centered'>
                <section id='counter'>
                    <span className='buttonSpan' onClick={decrease} > - </span>
                    <input id='inputNum'  type="text"  max={stock} min='1' readOnly value={number}/>
                    <span className='buttonSpan' onClick={increase}> + </span>
                </section>
                {
                    onAdd ?
                        <button onClick={addToCart}>agregar al carrito</button>
                        :
                        <></>
                }
            </div>
        )
}

export default ItemCount