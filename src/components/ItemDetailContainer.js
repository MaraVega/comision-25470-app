import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail';


const producto ={
      id: "1",
      nombre: "lapicera",
      precio: 200,
      stock: 10,
      detalle: "boligrafo marca bic",
      img: "http://d3ugyf2ht6aenh.cloudfront.net/stores/001/275/036/products/e0211-f1f5456c7f35cb58d315950828674051-640-0.jpg"
    }
    const productPromise = new Promise((res)=>{
        setTimeout(() => {
          
          res(producto)
        }, 4000);
      })
const ItemDetailContainer = () => {
    const [producto, setProducto] = useState([])

  useEffect(()=>{

    productPromise
    .then((data)=> setProducto(data))
    .catch((err)=> console.log(err))
  })
  return (
    <div className='itemDetailContainer'>
        <ItemDetail producto={producto}/>
    </div>
  )
}

export default ItemDetailContainer