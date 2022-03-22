import React from 'react'
import { useState } from 'react'

const ItemCount = (props, onAdd) => {
    const [contador, setContador] = useState(props.initial)

    const restarClick = () =>{
        if(contador > 1){
            setContador(contador-1)
        }
    }
    const sumarClick = () => {
        if(contador < props.stock){
            setContador(contador+1)
        }
    }
    const resetear =() => {
        setContador(props.initial)
    }
    const miOnAdd=()=>{
        onAdd(contador)
    }
    return ( 
        <>
            <p>Mi contador: {contador}</p>
            <div className='buttonContainer'>
                <button onClick={restarClick} disabled={contador===1}>-</button>
                <button onClick={sumarClick} disabled={contador===props.stock}>+</button>
            </div>
            <div className='buttonContainer'>
                <button onClick={miOnAdd}>confirmar</button>
                <button onClick={resetear} disabled={contador===props.initial}>descartar</button>
            </div>
        </>
    )
}

export default ItemCount   