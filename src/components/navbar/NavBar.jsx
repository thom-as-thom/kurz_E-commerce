import React from 'react';
import './NavBar.css';
import Clickeable from '../clickeable/clickeable.jsx';
import Logo from '../logo/logo';
import CartWidget from '../cartWidget/cartWidget';
import { ImHome3 } from "react-icons/im";



function NavBar() {
  return (
   <nav>
    <div className='logo'>
      <Logo/>
    </div>
      <ul>
         <Clickeable texto={< ImHome3 />}/> 
         <Clickeable texto= 'Productos'/>
         <Clickeable texto='FAQ'/> 
         <Clickeable texto={<CartWidget/>} />
      </ul>
    </nav>
  
  )
}

export default NavBar

