import React,{ useEffect }from 'react';
import Header from './components/Header';
import './App.css';
import Login from './components/Login'
import Home from './components/Home';



import {BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Chekout from './components/Chekout';
import { useStateValue } from './StateProvider';
import Register from './components/Register';
import Logout from './components/Logout';



function App() {
  
return (
    
    <Router>
    <div className="App">
    <Routes>
       
      <Route path="/checkout" element={<Chekout />}>      
         
      </Route>
      <Route path="/login" element={<Login />}>

                
      </Route>            
          <Route path="/" element={<Home />}>            
      </Route>
      <Route path="/signup" element={ <Register />}>

      </Route> 
      <Route path="/SignOut" element={<Logout />}>                
      </Route>    
           
    </Routes>
  
        </div>
      
    </Router>
    
      
    
  );
}

export default App;
