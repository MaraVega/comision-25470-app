import React from 'react'
import { useContext } from 'react'
import { contexto } from './CartContext'


const Cart = () => {
  const {cart, borrarProducto}=  useContext(contexto)

  return (
    <>
      <div>Carrito</div>
      {
      cart.map(articulo => (
          <div key={articulo.producto.id}>
            <p>{articulo.producto.nombre}</p>
            <p>{articulo.producto.precio}</p>
            <button onClick={()=> borrarProducto(articulo.producto.id)}></button>
          </div>
      ))
      }
    </>
  )
}

export default Cart