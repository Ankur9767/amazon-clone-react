import React from 'react'
import { getBaskettotal } from '../Reducer';
import { useStateValue } from '../StateProvider'

import './subtotal.css'

const Subtotal = () => {
    const [{basket}]=useStateValue();
    return (
        <div className="subtotal">
        <div className="subtotal_head">
        <p>Subtotal({basket.length} items): ₹{getBaskettotal(basket)}
        </p>
        </div>
        <small className="checkbox2">
        <input   className='check' type="checkbox" /> 
         <p className='gift'> this order contains a gift </p></small>
        
        <button className="pay bg-warning" >proceed to pay</button>
    
        

        
            
        </div>
    )
}

export default Subtotal
