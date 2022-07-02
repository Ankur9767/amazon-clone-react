import React from 'react'
import { useStateValue } from '../StateProvider';
import './Chekout.css';
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';
import Header from './Header';


const Chekout = () => {
    const [{basket}] =useStateValue();
    return (
        <>
        <Header />
        
        <div className="chekout">
         <div className="conatiner -fluid">
        <img className="checkout_ad" src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/October/ElectronicsGiftGuide/HOL_21_Electronics_GG_en_US.jpg" 
        alt="add"
        width="100%"
        height="200px"
        
        />
        {basket?.length==0 ?(
            <div><h2> your basket is Empty</h2>
            <p> you have no items in your basket . to buy one or more things do click on "Add to Basket" </p> </div>
        ) :(
            <div><h2> your basket</h2> 
            {basket.map(item =>(
            <CheckoutProduct 
            id={item.id}
            tittle={item.tittle}
            image={item.image}
            price={item.price}
            rating={item.rating}
             />    
            
            ))}
            
            </div>

        )
        }
        </div>
        <div className="proceed">
        <Subtotal />
        </div>
    
            
        </div>
        </>
    )
}

export default Chekout;
