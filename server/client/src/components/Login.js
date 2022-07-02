import React ,{ useState, useEffect } from 'react'
import { Link ,useNavigate} from "react-router-dom";
import './Login.css';
import axios from "axios";
import { useStateValue } from '../StateProvider';


const Login = () => {

  const [state , dispatch ]= useStateValue();
    const navigate=useNavigate();
     
     const [email, setEmail]= useState();
     const [password,setPassword] =useState();
     console.log(email);
     console.log(password);
       
     const postLogin= async (e)=>{
         e.preventDefault();
                
     const res= await fetch("/signin",
    {
       method:"POST",
       headers:{
         "content-type":"application/json"
       },
       body:JSON.stringify({
         email,
         password
        

       })
     });
     const data = await res.json()
     if(res.status == 400 || !res ){
       window.alert("invalid credentials try again")
     }
     else{
       
     
       window.alert("loginsuccessfully") ;   
       dispatch({
        type:"SET_USER",
        user:res,

      }); 
       navigate('/', {replace: true});
     }
     console.log(res);
     console.log("data",data)
    
     }
    //  useEffect(() => {
    //    const subscribe=(res)=>{
    //     if(res){
    //       dispatch({
    //          type:"SET_USER",
    //          user:res
    //        });
    //       }
    //       else{
    //         dispatch({
    //           type:"SET_USER",
    //           user:null
    //         });
    //       }
    //     }
     
    //    return () => {
    //      subscribe();
    //    }
    //  }, []);
     
     
      
     
     
    return (
        <div className='wrap'>
        <Link to="/">
           <img className="logo" src={process.env.PUBLIC_URL + '/logo.png'}  height="80px" />
           </Link>
        <div className="login">
        
        <div className=" card_login">
        
            <form className="form_group"  method="POST">
             <h1 className="signup">Sign in</h1>
             <div className="input_values">
             <label>Email</label>
             <input type="email" name="email" className="input" value={email} onChange={event=>setEmail(event.target.value)}
                 placeholder="Enter your email ........" /> 
                 </div>
                 <div className="input_values">
             <label>Password</label>
             <input type="password" className="input" value={password} onChange={event=> setPassword(event.target.value)}
             name="password" placeholder="Enter password .... "/> 
             </div>   
             
             <button className="login_btn bg-warning mt-5" onClick={ postLogin }>Login</button>
                     
             <p className='terms'>By continuing, you agree to Amazon's Conditions <br />of Use and Privacy Notice.</p>
             <div className="dline"><hr className="line" /><p classname="new">New to amazon </p><hr className="line2" />
             </div>
             <Link to="/signup" className="register_link">
              <button className="reg_button">Register</button>
             </Link>
            </form>
        </div>
        
        </div>
        </div>
    )
}

export default Login;

