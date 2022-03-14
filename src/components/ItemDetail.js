import React from 'react'

const ItemDetail = ({producto}) => {
  return (
    <div className='itemDetail'>
        <h3>{producto.nombre}</h3>
        <p>{producto.precio}</p>
        <p>{producto.detalle}</p>
        <img src={producto.img}/>
      </div>  
  )
}

export default ItemDetail