import React from 'react';
import './NavBar.css';
import Clickeable from '../clickeable/clickeable.jsx';
import Logo from '../logo/logo';
import CartWidget from '../cartWidget/cartWidget';
import { ImHome3 } from "react-icons/im";
import { Link } from 'react-router-dom';



function NavBar() {
  return (
   <nav>
    <div className='logo'>
      <Logo/>
    </div>
    <div id='itemContainer'>
      <ul>
        <Link to='/'>
        <Clickeable texto={< ImHome3 />}/> 
        </Link> 
         <Link to='/catalogo'>
         <Clickeable texto= 'Productos'/>
         </Link>
         <Clickeable texto='FAQ'/> 
         <Clickeable texto={<CartWidget/>} />
      </ul>
    </div>
    </nav>
  
  )
}

export default NavBar

