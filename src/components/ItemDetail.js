import React from "react";
import ItemCount from "./ItemCount";
import { contexto } from "./CartContext";
import { useContext } from "react";
function ItemDetail({ producto }) {
  const carritoContext = useContext(contexto);
  console.log(carritoContext);

  function onAdd(cantidadElegida) {
    carritoContext.agregarProducto(producto, cantidadElegida)
    console.log("funcion de item detail");
    console.log(carritoContext);
  }

  return (
    <div className="itemDetail">
      <h3>{producto.nombre}</h3>
      <p>{producto.precio}</p>
      <p>{producto.detalle}</p>
      {/* <img src={producto.img} /> */}
      <ItemCount initial={1} stock={producto.stock} onAdd={onAdd} />
      <p></p>
    </div>
  );
}

export default ItemDetail;
