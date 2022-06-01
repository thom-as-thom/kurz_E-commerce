import {React} from 'react'
import { useCartContext } from '../../context/CartContext'
import CartItem from '../CartItem/CartItem'
import './cart.css'
import { Link } from 'react-router-dom'

function Cart() {
   const {cart,emptyCart, FinalPrice} = useCartContext()

   
   
      return (
        (cart.length > 0 ) ? 

            <div className='cart'>
            {cart.map((prod)=> <CartItem key={prod.id} id={prod.id} title={prod.name} imgUrl={prod.photo} price={prod.price} qty={prod.qty} totalPrice={prod.totalprice}/>)}

            <div>total: {FinalPrice} </div>
            <button onClick={emptyCart}> VACIAR CARRITO </button>
            </div>
        : 
            <div className='cart'> 
              <h1>El carrito esta vacio. Por que no compras algo?</h1>
              <Link to='/catalogo'>
              <button>Ir a comprar</button>
              </Link>
            </div>
      )



  
}

export default Cart