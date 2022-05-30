import { createContext, useContext, useState } from "react";

const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)




function ContextProvider({children}) {
   const [cart, setCart] = useState([]) 

    const addToCart = (id, name, photo, price, qty) => {
        setCart ( [...cart, {id, name, photo, price, qty }])
    }
    

  return (
    <CartContext.Provider value={{addToCart, cart}}>
        {children}
    </CartContext.Provider>
  )
}

export default ContextProvider
