import React from 'react'
import './clickeable.css'

function Clickeable({texto}) {
  return (
          
    <li className='clickeable'>
            <p>{texto}</p>
        </li>
    
  )
}

export default Clickeable