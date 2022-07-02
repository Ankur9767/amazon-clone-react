import React,{useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import { useStateValue } from '../StateProvider';

function Logout() {

    const navigate =useNavigate();
    const {state, dispatch} =useStateValue() 
    useEffect(() => {
        fetch('/logout',{
            method:"GET",
            headers:{
                Accept: "applicatiom/json",
                "content-type":"application/json"
            },
            credentials:"include"
        }).then((res)=>{
            dispatch({
                type:"SET_USER",
                user:null,
            })
             navigate("../login", {replace:true})
            
        }).catch((err)=>{
            console.log(err);
        })
    
    });
    
  return (
    <>
        
    </>
  )
}

export default Logout