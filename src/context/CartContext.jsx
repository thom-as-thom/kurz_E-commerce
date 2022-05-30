import { createContext, useContext, useState } from "react";

const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)




function ContextProvider({children}) {
   const [cart, setCart] = useState([]) 

    const addToCart = (id, name, photo, price, qty) => {
      const isInCart = cart.findIndex(producto => producto.id === id)
        if(isInCart === -1 )
        setCart ( [...cart, {id, name, photo, price, qty }])
        else {

          const prevQty = cart[isInCart].qty
          const NewQty = Number(prevQty) + Number(qty)
         
          setCart ([cart[isInCart].qty = NewQty])
          
        }
        
      } 
      
    

  return (
    <CartContext.Provider value={{addToCart, cart}}>
        {children}
    </CartContext.Provider>
  )
}

export default ContextProvider
