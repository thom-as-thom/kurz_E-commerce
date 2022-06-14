import { createContext, useContext, useState } from "react";

const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)




function ContextProvider({children}) {

//funcion para agregar items al cart
    const [cart, setCart] = useState([]) 
    let cartProductAux = []  
    const [FinalPrice, setFinalPrice] = useState(0)
    const [TotalQty, setTotalQty] = useState(0)
    function changeState(cart, prodQty, totalQty) {
        setCart (cart)
        setFinalPrice (prodQty)
        setTotalQty (totalQty )
    }
    


    const cartModification = (id, name, photo, price, qty) => {
        let totalprice = price*qty
        let cartProduct = {id, name, photo, price, qty, totalprice}
        const isInCart = cart.findIndex(producto => producto.id === id) //is in cart corresponde al index del producto en caso de ser encontrado. de no encontrarlo devuelve -1
            if(isInCart === -1 )
                cartProductAux = [...cart, cartProduct] 
            else {
                cartProduct = cart[isInCart]
                cartProduct.qty = cartProduct.qty + qty;
                cartProduct.totalprice = cartProduct.price * cartProduct.qty
                cartProductAux = [...cart]
            
            }
            changeState(cartProductAux, FinalPrice + totalprice, TotalQty + qty)
        }
        

    const emptyCart = () => {
            changeState([], 0, 0)
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
            cartModification,
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
