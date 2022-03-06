import React from 'react'
import ItemCount from './ItemCount'

const ItemListContainer = (props) => {
  return (
    <>
      <div className='saludo'>{props.greeting}</div>
      <ItemCount initial={1} stock={5}/>
    </>
  )
}

export default ItemListContainer