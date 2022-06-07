import {React} from 'react'
import { useCartContext } from '../../context/CartContext'
import CartItem from '../CartItem/CartItem'
import './cart.css'
import { Link } from 'react-router-dom'

function Cart() {
  const { cart, emptyCart, FinalPrice } = useCartContext()

  function generateBuyOrder() {
    let order = {}
    order.buyer = { name: 'thomas', lastname: 'kurz', adress: 'falkner 3566', phone: '2235136325' }
    order.total = FinalPrice
    order.products = cart.map(item => {
      const id = item.id
      const title = item.name
      const price = item.totalprice
      return {id, title, price}
    })
    console.log(order)
  }
  




  return (
    (cart.length > 0 ) ? 
      <div className='cart'>
        {cart.map((prod)=> <CartItem key={prod.id} id={prod.id} title={prod.name} imgUrl={prod.photo} price={prod.price} qty={prod.qty} totalPrice={prod.totalprice}/>)}

          <div> 
            total: $ {FinalPrice}
          </div>
          <button onClick={emptyCart}> VACIAR CARRITO </button>
          <button onClick={generateBuyOrder()}>FINALIZAR COMPRA</button>
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