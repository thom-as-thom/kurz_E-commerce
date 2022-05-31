import { createContext, useContext, useState } from "react";

const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)




function ContextProvider({children}) {

  //funcion para agregar items al cart
      const [cart, setCart] = useState([]) 
      let cartProductAux = []  
      const [totalPrice, setTotalPrice] = 0

        const addToCart = (id, name, photo, price, qty) => {
          setTotalPrice (price*qty)
          let cartProduct = {id, name, photo, price, qty, totalPrice}
          const isInCart = cart.findIndex(producto => producto.id === id) //is in cart corresponde al index del producto en caso de ser encontrado. de no encontrarlo devuelve -1
            if(isInCart === -1 )
            cartProductAux = [...cart, cartProduct] 
            else {
              cartProduct = cart[isInCart]
              cartProduct.qty = cartProduct.qty+qty;
              cartProductAux = [...cart]
              
            }
            setCart (cartProductAux)

          }

          const emptyCart = () => {
              setCart ([])
           } 

           const deleteItem = (id) =>{
            
            const isInCart = cart.findIndex(producto => producto.id === id) //is in cart corresponde al index del producto en caso de ser encontrado. de no encontrarlo devuelve -1
            cart.splice(isInCart, 1)
            console.log(cart)
            console.log(isInCart)
            cartProductAux = [...cart]
            setCart( cartProductAux)
           }
      
    

  return (
    <CartContext.Provider value={{
      addToCart, 
      cart,
      emptyCart,
      deleteItem
      }}>
        {children}
    </CartContext.Provider>
  )
}

export default ContextProvider
