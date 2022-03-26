import React, { useState, createContext} from "react";

export const contexto = createContext()
const { Provider } = contexto

const CartContext=({ children })=>{
    const [cart, setCart] = useState([]);

    const borrarProducto = (id) => {

        const auxCart = cart.filter(articulo => articulo.producto.id !== id);
        setCart(auxCart);
    };
    const agregarProducto= (producto, cantidad)=> {
        const auxCart = [...cart];
        auxCart.push({ producto, cantidad });
        setCart(auxCart);
    }
    const clear = (id) => {
        setCart([]);
    };
    // if(cart.length > 0){
    //     setTotal(cart.reduce((total, product)=> total + product.price, 0))
    // }
    const valorDelProvider = {
        cart,
        setCart,
        borrarProducto,
        agregarProducto,
        clear,
    };
    return (
        <Provider value={{ valorDelProvider }}>
            {children}
        </Provider>
    );
}
// cart, total, addProduct, removeProduct, clear
export default CartContext;
