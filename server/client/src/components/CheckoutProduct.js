import React from 'react'
import './checkuotProduct.css';
import { useStateValue } from '../StateProvider';

const CheckoutProduct = ({id,tittle,image,price,rating}) => {
    const [{basket}, Dispatch] =useStateValue();

    const removefromBasket =()=>{
        Dispatch({
            type:"REMOVE_FROM_BASKET",
            id:id,
        });
    }

    return (
        <div>
        <div className="product_basket">
        <div className="image me-5">
        <img src={image}  height="200px" width="180px"/>
        </div>
        <div className="info">
        <p className="tittle">{tittle}</p>
        <h4 className="price ms-3">{price} Rs</h4>
        <div className="rating">
           {
            
            Array(rating)
            .fill()
            .map((_) => (
                <p>⭐⭐⭐⭐⭐</p>            
            )
            )}
            </div> 
            <button className="btn bg-warning h-25" onClick={removefromBasket}>Remove from Cart</button>
            </div>
          
        </div>

            
        </div>
    )
}

export default CheckoutProduct;
