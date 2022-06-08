import {React, useState} from 'react'
import { useCartContext } from '../../context/CartContext'
import CartItem from '../CartItem/CartItem'
import './cart.css'
import { Link } from 'react-router-dom'
import { addDoc, collection, getFirestore } from 'firebase/firestore'
import Form from '../form/form'


function Cart() {
  const { cart, emptyCart, FinalPrice } = useCartContext()
  const [orderSent, setOrderSent] = useState();
  const [user, setUser] = useState({ fullName: '', email: '', phoneNumber: '' })
    const handleChange = (event) => {
        setUser({ ...user, [event.target.name]: event.target.value });
    }
    const handleSubmit = (event) => {
        event.preventDefault()
    }

  
  function GenerateBuyOrder() {
    let order = {}
    order.buyer = { user }
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
      <h1>Gracias por tu compra {user.fullName}.<br/> El id de tu pedidos es {orderSent}.<br/> Te estaremos enviando la facturacion a {user.email} </h1>
      :
        (cart.length > 0) ? 
    
        <div className='cart'>
          {cart.map((prod)=> <CartItem key={prod.id} id={prod.id} title={prod.name} imgUrl={prod.photo} price={prod.price} qty={prod.qty} totalPrice={prod.totalprice}/>)}
            <div> 
              total: $ {FinalPrice}
            </div>
            <button onClick={emptyCart}> VACIAR CARRITO </button>
            <form onSubmit={handleSubmit}>
            <label htmlFor="fullName">Full Name</label>
            <input type="text" name="fullName" onChange={handleChange}>
            </input><label htmlFor="email">Email</label>
            <input type="text" name="email" onChange={handleChange}></input>
            <label htmlFor="phoneNumber"> Phone Number </label>
            <input type="text" name="phoneNumber" onChange={handleChange}></input>
            <button onClick={GenerateBuyOrder}>FINALIZAR COMPRA</button>
        </form>
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