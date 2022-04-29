import React from 'react'
import './clickeable.css'

function Clickeable({texto}) {
  return (
          
    <li className='clickeable'>
            <a href='/'>{texto}</a>
        </li>
    
  )
}

export default Clickeable