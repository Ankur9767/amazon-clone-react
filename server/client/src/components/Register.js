import React, { useState } from 'react';
import  './Register.css';
import { useNavigate } from "react-router-dom";
import Axios from 'axios'
import Header from './Header';

const Register = () => {
  const navigate=useNavigate();
  const [User, setUser] = useState({
    name:"",
    email:"",
    phone:"",
    password:"",
    cpassword:""
  });
  const handleInput=e=>{
    const { name, value }=e.target
  
    setUser({
      ...User,
      [name]:value
    }

    )

  }
 
  

  const PostData = async (e)=>{
     const { name, email, phone, password, cpassword }=User;
     const res= await fetch(`/register`,
     {
       method:"POST",
       headers:{
         "content-type":"application/json"
       },
       body:JSON.stringify({
         name, email, phone, password, cpassword 
        

       })
     });
     
     if(res.status == 422){
       window.alert("invalid registration")
     }
     else{
       window.alert("registered successfully") ;     
       navigate('../login', {replace: true});
     }
   
    // const res=Axios.post(`http://localhost:5000/register`, User)
    // .then(res => {
    //   console.log(res);
    //   window.alert("registered Succesfully")
    //   console.log(res.data);
    // })
    
    
    

  }
  return (<div>
     <Header />
   <div className="Registration">
   {
     console.log("User is",User)
   }
       <form className="container form" method="POST" onSubmit={ ()=> navigate('../login', {replace: true})} >
       <h3 className="Register_head">Create Account</h3>
            <div className="input_form">
             <label className="labels"> Name</label>
             <input type="text" className="inputvalues" name="name" value={User.name} onChange={ handleInput } placeholder="Enter your Name ........" /> 
             </div>
             <div className="input_form">
             <label className="labels">Email</label>
             <input type="email" className="inputvalues" name="email" value={User.email} onChange={ handleInput } placeholder="Enter email.... "/>  
             </div>
            <div className="input_form">
             <label className="labels">Phone no</label>
             <input type="number" name="phone" className="inputvalues" value={User.phone} onChange={ handleInput } placeholder="Enter your phone no........" /> 
             </div>
             <div className="input_form">
             <label className="labels">Password</label>
             <input type="password" name="password" className="inputvalues" value={User.password} onChange={handleInput } placeholder="Enter your password ........" /> 
             </div>
             <div className="input_form">
             <label className="labels">Confirm Password</label>
             <input type="password" name="cpassword" className="inputvalues" value={User.cpassword} onChange={ handleInput } placeholder="Enter your Name ........" /> 
              </div>
              <div className="ragister_btn mt-4 mb-4">
                <button className="reg_btn bg-warning p-1" onClick={ PostData }>Continue</button>
              </div>
       </form>
   </div>

  </div>
  );
};

export default Register;