import { createContext, useContext, useState } from "react";

const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)




function ContextProvider({children}) {

  //funcion para agregar items al cart
      const [cart, setCart] = useState([]) 
      let cartProductAux = []  
      const [FinalPrice, setFinalPrice] = useState(0)
      const [TotalQty, setTotalQty] = useState(0)
            
      


        const addToCart = (id, name, photo, price, qty) => {
          let totalprice = price*qty
          let cartProduct = {id, name, photo, price, qty, totalprice}
          const isInCart = cart.findIndex(producto => producto.id === id) //is in cart corresponde al index del producto en caso de ser encontrado. de no encontrarlo devuelve -1
            if(isInCart === -1 )
            cartProductAux = [...cart, cartProduct] 
            else {
              cartProduct = cart[isInCart]
              cartProduct.qty = cartProduct.qty+qty;
              cartProductAux = [...cart]
              
            }
            setCart (cartProductAux)
            setFinalPrice (FinalPrice + totalprice)
            setTotalQty (TotalQty + cartProduct.qty)

          }



          const emptyCart = () => {
              setCart ([])
              setFinalPrice (0)
              setTotalQty (0)
           } 



           const deleteItem = (id) =>{
            
            const isInCart = cart.findIndex(producto => producto.id === id) //is in cart corresponde al index del producto en caso de ser encontrado. de no encontrarlo devuelve -1
            setFinalPrice (FinalPrice - cart[isInCart].totalprice)
            setTotalQty (TotalQty - cart[isInCart].qty)
            cart.splice(isInCart, 1)
            
            cartProductAux = [...cart]
            setCart( cartProductAux)
           }
      
    

  return (
    <CartContext.Provider value={{
      addToCart, 
      cart,
      emptyCart,
      deleteItem,
      FinalPrice,
      TotalQty
      }}>
        {children}
    </CartContext.Provider>
  )
}

export default ContextProvider
