import React, { useEffect, useState } from 'react'
import ItemList from './ItemList'
import {useParams} from 'react-router-dom'
import utiles from '../Utiles'


const ItemListContainer = (props) => {
  const [productos, setProductos] = useState([])
  const {categoria}=useParams();
  useEffect(() => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(
                categoria?
                    utiles.filter((item)=>
                    item.categoria===categoria
                ):utiles);
        }, 2000);
    }).then((productos) => {
        setProductos(productos);
    });
},[categoria]);
  return (
    <>
      <div className='saludo'>{props.greeting}</div>
      {/* <ItemCount initial={1} stock={5}/> */}
      <ItemList productos={productos}/>
    </>
  )
}

export default ItemListContainer