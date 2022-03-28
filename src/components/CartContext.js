import React, { useState, createContext} from "react";

export const contexto = createContext()
const { Provider } = contexto

const CartContext=({ children })=>{
    const [carrito, setCarrito] = useState([]);

    const borrarProducto = (id) => {

        const auxCart = carrito.filter(articulo => articulo.producto.id !== id);
        setCarrito(auxCart);
    };
    const agregarProducto=(producto, cantidad)=> {
        const auxCart = [...carrito];
        auxCart.push({ producto, cantidad });
        setCarrito(auxCart);
        console.log("funcion de cartcontext");
    }
    function clear() {
        setCarrito([]);
    }
    // if(cart.length > 0){
    //     setTotal(cart.reduce((total, product)=> total + product.price, 0))
    // }
    const valorDelProvider = {
        carrito,
        setCarrito,
        borrarProducto,
        agregarProducto,
        clear,
    };
    return (
        <Provider value={ valorDelProvider }>
            {children}
        </Provider>
    );
}
// cart, total, addProduct, removeProduct, clear
export default CartContext;
