import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom'
const CartWidget = () => {
  return (
    <div className='cartWidget'>
        
        <Link to="/carrito">
          <FontAwesomeIcon icon={faShoppingCart}/>
        </Link>
        <p>2</p>
    </div>
  )
}

export default CartWidget