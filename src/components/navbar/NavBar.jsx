import React from 'react';
import './NavBar.css';
import Clickeable from '../clickeable/clickeable.jsx';
import Logo from '../logo/logo';


function NavBar() {
  return (
  <div>
    <nav>
    <div className='logo'>
      <Logo/>
    </div>
      <ul>
         <Clickeable texto='Inicio'/> 
         <Clickeable texto= 'Productos'/>
         <Clickeable texto='FAQ'/> 
         <Clickeable texto='Carrito'/>
      </ul>
    </nav>
  </div>
  )
}

export default NavBar

