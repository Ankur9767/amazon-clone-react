const express= require("express");
const router = express.Router();
const bcrypt=require("bcrypt");
const jwt =require("jsonwebtoken");


require('../db/conn')
const User  = require('../model/userSchema')



router.post('/register', async(req, res) => {


    const { name, email, phone,  password, cpassword } = req.body;//getting data by object destructuring
    
    if (!name || !email || !phone || !password || !cpassword) { //user should fill all feild
       return res.status(422).json({ error: "plz fill all feild" })
    }
    
    try {
       const userExist = await User.findOne({ email: email })//this connects email from userschema.js to this email from auth.js
 
       if (userExist) {
          return res.status(422).json({ error: "email already exists" })
       } else if (password != cpassword) {
          return res.status(422).json({ error: "password didnt match" })
       } else {
          const user = new User({ name, email, phone, password, cpassword })// adding data to database || if both key and value and are same no need to write twice 
          //hashing done before save
          await user.save() //saving data in user constant 
          res.status(201).json({ message: "user registetred sucessfully" })
       }
    } catch (error) {
       console.log(error);
       
    }
    
 })

 router.post("/signin", async (req, res) => {
    
   console.log(req.body);
    try {
       const {email, password} =req.body;
      
        if(!email || !password){
         res.status(400).json({error:"plzz filled data"})
      }   
      const userLogin =await User.findOne({ email });
      if(userLogin){
      const isMatch =await bcrypt.compare(password, userLogin.password)
      let token=userLogin.generateAuthToken();
      console.log(token);
      res.cookie("jwttoken",token,{
         expires:new Date(Date.now()+25892000000),
         httpOnly:true
      })
      console.log(userLogin);
      if(!isMatch){
         res.status(400).json({message:"invalid credential hai"});
      }
      else{
         res.json({message:"user signin successfully"});
      }
   }
   else{
      res.json({message:"invalid credential"});
   }
} 
    catch (err) {
       console.log(err)
    }

 })

 router.get("/logout",(req,res)=>{
    console.log("this is logout page")
    res.clearCookie('jwtoken',{path:'/'})
    res.status(200).send('user logout')
 })

module.exports=router