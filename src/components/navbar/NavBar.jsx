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
      <Link to='/'>
        <div className='logo'>
          <Logo/>
        </div>
      </Link> 
    <div id='itemContainer'>
      <ul>
        <Link to='/'>
        <Clickeable texto={< ImHome3 />}/> 
        </Link> 
          <Link to='/catalogo'>
          <Clickeable className="productos" texto= 'PRODUCTOS'/>
          </Link>
          <Link to='/category/10 g'>
            <Clickeable texto= 'presentacion 10g'/>
            </Link>
            <Link to='/category/65 g'>
            <Clickeable texto= 'presentacion 65g'/>
            </Link>
          <Clickeable texto='FAQ'/> 
          <Link to='/cart'>
          <Clickeable texto={<CartWidget/>} />
          </Link>
      </ul>
    </div>
    </nav>
  
  )
}

export default NavBar

