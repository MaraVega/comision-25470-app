import React from 'react'
import {Link} from 'react-router-dom'

const Item = ({producto}) => {
  return (
    <div className='item'>
        <h3>{producto.nombre}</h3>
        <p>{producto.precio}</p>
        <p>{producto.detalle}</p>
        <Link to={`/item/${producto.id}`}><button>Mas informacion</button></Link>
      </div>  
  )
}

export default Item