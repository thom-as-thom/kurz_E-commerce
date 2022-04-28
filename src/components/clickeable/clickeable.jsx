import React from 'react'
import './clickeable.css'

function Clickeable({texto}) {
  return (
    <div className='clickeable'>
        <li>
            <a href='/'>{texto}</a>
        </li>
    </div>
  )
}

export default Clickeable