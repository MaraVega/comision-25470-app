import React, { useEffect, useState } from 'react'
import ItemCount from './ItemCount'
import ItemList from './ItemList'

const productos = [
  {
    id: "1",
    nombre: "lapicera",
    precio: 200,
    stock: 10,
    detalle: "boligrafo marca bic"
  },
  {
    id: "2",
    nombre: "cuaderno",
    precio: 300,
    stock: 10,
    detalle:"cuaderno de 48 hojas, rivadavia"
  },
  {
    id: "3",
    nombre: "lapiz",
    precio: 100,
    stock: 10,
    detalle:"lapiz negro hb estadler"
  }
]
const productPromise = new Promise((res)=>{
  setTimeout(() => {
    
    res(productos)
  }, 2000);
})

const ItemListContainer = (props) => {
  const [productos, setProductos] = useState([])

  useEffect(()=>{

    productPromise
    .then((data)=> setProductos(data))
    .catch((err)=> console.log(err))
  })

  return (
    <>
      <div className='saludo'>{props.greeting}</div>
      <ItemCount initial={1} stock={5}/>
      <ItemList productos={productos}/>
    </>
  )
}

export default ItemListContainer