import React from 'react'
import './Product.css'
import { useStateValue } from '../StateProvider'

function Product({id,tittle,ratings,price, image}) {
    const [ basket , dispatch] =useStateValue();
    const addToBasket = (e)=>{
    

        dispatch({
            type:"ADD_TO_BASKET",
            item: {
            id:id,
            tittle:tittle,
            ratings:ratings,
            price:price,
            image:image
            },

        })
    }
    return (
       
        <div className="cart">
        <div className="pro_card  m-2">
        <h5>{tittle}</h5>
        <h6 className="pro_price">

            price -{price}
            <small>Rs</small></h6>
        
        
        <div className="rating">
          rating-: {
            
            Array(ratings)
            .fill()
            .map((_) => (
                <p>⭐ </p>            
            )
            )}
            </div>

        
        <img src={image} className="figure-img" />
        <button className="btn bg-warning text-white" onClick={addToBasket}>Add to Cart </button>
        </div>  
        </div>   
         
                   
        
    )
}

export default Product
