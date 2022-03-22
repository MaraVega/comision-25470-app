import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail';
import utiles from '../Utiles';
import {useParams} from 'react-router-dom'

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState([])
    const { id } = useParams()

    useEffect(() => {
        const promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(utiles.find((item) => {
                    return item.id.toString() === id            
                }));
            }, 2000);
        }).then((productos) => {
            setProducto(productos);
        });
    });
    return (
        <div className='itemDetailContainer'>
        <ItemDetail producto={producto}/>
    </div>
    )
}

export default ItemDetailContainer