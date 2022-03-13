import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons';
const CartWidget = () => {
  return (
    <div className='cartWidget'>
        <FontAwesomeIcon icon={faShoppingCart}/>
        <p>2</p>
    </div>
  )
}

export default CartWidget