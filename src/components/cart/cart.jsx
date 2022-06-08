import {React, useState} from 'react'
import { useCartContext } from '../../context/CartContext'
import CartItem from '../CartItem/CartItem'
import './cart.css'
import { Link } from 'react-router-dom'
import { addDoc, collection, getFirestore } from 'firebase/firestore'


function Cart() {
  const { cart, emptyCart, FinalPrice } = useCartContext()
  const [orderSent, setOrderSent] = useState();

  
  function GenerateBuyOrder() {
    let order = {}
    order.buyer = { name: 'martin', lastname: 'lopez', adress: 'falkner 3566', phone: '2235136325' }
    order.total = FinalPrice
    order.products = cart.map(item => {
      const id = item.id
      const title = item.name
      const price = item.totalprice
      return {id, title, price}
    })
    const db = getFirestore()
    const queryCollection = collection(db, 'orders')
    addDoc(queryCollection, order)
      .then(resp => setOrderSent(resp.id))
      .catch(err => console.log(err))
      .finally (emptyCart)
  }

  return (
    orderSent ?
      <h1>El id de tu pedidos es {orderSent}. Gracias por tu compra </h1>
      :
        (cart.length > 0) ? 
    
        <div className='cart'>
          {cart.map((prod)=> <CartItem key={prod.id} id={prod.id} title={prod.name} imgUrl={prod.photo} price={prod.price} qty={prod.qty} totalPrice={prod.totalprice}/>)}
            <div> 
              total: $ {FinalPrice}
            </div>
            <button onClick={emptyCart}> VACIAR CARRITO </button>
            <button onClick={GenerateBuyOrder}>FINALIZAR COMPRA</button>
            </div>
      : 
          <div className='cart'> 
            <h1>El carrito esta vacio</h1>
            <Link to='/catalogo'>
            <button>Ir a comprar</button>
            </Link>
          </div>
    
  )



  
}

export default Cart