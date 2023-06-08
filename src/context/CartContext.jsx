import { createContext, useState } from "react";

export const CartContext = createContext({
    cart:[]
})

export const CartProvider = ({ children }) => {
 const [cart, setCart] = useState([])

 console.log(cart);

 const addItem = (item, quantity) => {
    if (!isInCart(item.id)){
        setCart(prev => [...prev, {...item, quantity}])
    } else {
        console.log('Producto ya agregado')
    }
 }

 const removeItem = (itemId) => {
    const updatedCart = cart.filter(prod => prod.id !== itemId)
    setCart(updatedCart)
 }

 const clearCart = () => {
    setCart([])
 }

 const isInCart = (itemId) => {
    return cart.some(prod => prod.id === itemId)
 }

 return (
    <CartContext.Provider value={{cart, addItem, removeItem, clearCart}}>
        { children }
    </CartContext.Provider>
 )
}