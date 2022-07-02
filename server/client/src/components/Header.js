import React,{ useState} from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { useStateValue } from '../StateProvider';
import Login from './Login';






const Header = () => {
    const [{basket,  user}] =useStateValue();
    
    

   console.log("user is",user)

   
     
    
    
   
    
    
   
    return (    
       <div className='wrapper'>
         <nav className="header">
         
             <Link to="/">
             <h2 className='text-white logoo text-decoration-none'>Techzon</h2>
             </Link>
             <div className="search_bar">
                 <input type="text" className="searchinput" />                   
                 
                 <svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                 <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                 </svg>       
          </div>
            <div   className="headernav">
          
              <Link to="/login" className="nav_link">
              <div className="nav_option">
                  
                  <span className="nav1" >Hello</span>
                  <span className="nav2">{user ? 'Sign Out' :'Sign in'}</span>
                  
                  </div>
                </Link>
                {/* {
                  user && 
                    <div>
                     <Link to="/SignOut" className="nav_link">
                     <div className="nav_option">
                  
                  <span className="nav1" >Hello</span>
                  <span className="nav2">Sign Out</span>
                  
                  </div>
                </Link>

                    </div>
                  
      
                } */}
                
            </div>
            <Link  to="/checkout" className="nav_link" id='return'> 
              <div className="nav_option">
                  <span className="nav1" >Returns &</span>
                  <span className="nav2">Orders</span>
                  </div>
                </Link>
            <Link to="/" className="nav_link">
              <div className="nav_option" id='prime'>
                  <span className="nav1">Your</span>
                  <span className="nav2">Prime</span>
                  </div>
                </Link>
                <Link to="/checkout" className="nav_link">
                <div className="basket">
                <span className="basket2"> {basket?.length} </span>
                    <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="30" fill="currentColor" class="bi bi-cart4" viewBox="0 0 16 16">
                   <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>
                    </svg></span>                    
                </div>
                </Link>
                </nav>
                <div className="search_bar2">
                 <input type="text" placeholder='Search Items' className="searchinput2" />                   
                 
                 <svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                 <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                 </svg>       
          </div> 
                
                </div>

               
                
         

              
        
        
            
       
    )
}

export default Header

