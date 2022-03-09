import React from 'react'

const Item = ({producto}) => {
  return (
    <div className='item'>
        <h3>{producto.nombre}</h3>
        <p>{producto.precio}</p>
        <p>{producto.detalle}</p>
      </div>  
  )
}

export default Item