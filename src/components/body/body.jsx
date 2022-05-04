import React from 'react'
import ItemListContainer from '../itemListContainer/itemListContainer'
import './body.css'

function Body() {
  return (
      <main className='body'>
          <ItemListContainer greeting={"Hola soy un greeting"}/>
      </main>
  )
}

export default Body