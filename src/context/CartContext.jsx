import { createContext, useContext, useState } from "react";

const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)




function ContextProvider({children}) {
    const saludar = () => {
        console.log('hola')
    }
    const saludo = "hola"

  return (
    <CartContext.Provider value={{saludar, saludo}}>
        {children}
    </CartContext.Provider>
  )
}

export default ContextProvider
