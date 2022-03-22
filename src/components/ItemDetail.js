import React from 'react'
import ItemCount from './ItemCount'

const ItemDetail = ({producto}) => {

  const onAdd = (cantidadElegida)=>{
    const cantidadALlevar= cantidadElegida

    console.log("la cantidad añadida es: " + cantidadALlevar)
  }

  return (
    <div className='itemDetail'>
        <h3>{producto.nombre}</h3>
        <p>{producto.precio}</p>
        <p>{producto.detalle}</p>
        <img src={producto.img}/>
        <ItemCount initial={1} stock={producto.stock} onAdd={onAdd}/>
    </div>  
  )
}

export default ItemDetail