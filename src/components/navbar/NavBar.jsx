import {React, useState} from 'react';
import { Link } from 'react-router-dom';

import Logo from '../logo/logo';
import { ImMenu } from "react-icons/im";
import { ImHome3 } from "react-icons/im";

import Clickeable from '../clickeable/clickeable.jsx';
import CartWidget from '../cartWidget/cartWidget';

import './NavBar.css';




function NavBar() {
	const [IsClicked, setIsClicked] = useState(false);
	
	function click() {
			setIsClicked(!IsClicked)
		}
	return (
		<nav>
			<Link to='/'>
				<div className='logo'>
					<Logo/>
				</div>
			</Link> 
		<div id='itemContainer'>
					<h1 onClick={click} className='menu'><ImMenu/></h1>
				<ul className={IsClicked ? "active" : "inactive"}>
				<Link onClick={click}  to='/'>
						<Clickeable  texto={< ImHome3 />}/> 
				</Link> 
					<Link onClick={click} to='/catalogo'>
					<Clickeable  texto= 'PRODUCTOS'/>
					</Link>
					<Link onClick={click} to='/category/10 g'>
						<Clickeable  texto= 'presentacion 10g'/>
						</Link>
						<Link onClick={click} to='/category/65 g'>
						<Clickeable  texto= 'presentacion 65g'/>
						</Link>
					<Clickeable  texto='FAQ'/> 
					<Link onClick={click} to='/cart'>
					<Clickeable texto={<CartWidget/>} />
					</Link>
				</ul>
		</div>
		</nav>
	
	)
}

export default NavBar

