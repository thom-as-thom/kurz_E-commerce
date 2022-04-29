import React from 'react'
import ItemListContainer from '../itemListContainer/itemListContainer'
import './body.css'

function Body() {
  return (
      <section className='body'>
          <ItemListContainer greeting={"Hola soy un greeting"}/>
      </section>
  )
}

export default Body