const User = require("../models/user")
const bcrypt = require('bcrypt');
const saltRounds = 10;
const jwt = require('jsonwebtoken');


const registerNewUSer = async (req, res) => {
   
    const phoneCheck = await User.exists({phone: req.body.phone})
    if(phoneCheck){
        res.status(409).json({"msg": "user already exits"})
     }
     else {
        const hashPass = await bcrypt.hash(req.body.password, saltRounds)
        req.body.password= hashPass
      const data =  await User.create(req.body)
      if(data){
       res.json({"msg": "user created successfully"})
      }
     }
   
     
    
    }
    

    const LoginUser = async (req, res) => {
        // phonenumber exist
        const phoneCheck = await User.findOne({phone: req.body.phone})
        if(!phoneCheck) {
            return res.status(404).json()
        }else{
        const isMatch =   await bcrypt.compare( req.body.password,phoneCheck.password)
        if(isMatch){
            const token = await jwt.sign({ phone: req.body.phone }, process.env.SECRET_KEY);
            res.json({isLoggedIn : true, msg: "login successfully",token})

          }else{

            res.status(401).json({msg : "creds error"})
        }
    }
    }

const userEditById = async (req, res) => {
    const data = await User.findByIdAndUpdate(req.params.id, req.body)
    if(data){
        res.json({data})
       }
   }

   const userDeleteById = async (req, res) => {
    await User.findByIdAndDelete(req.params.id, req.body)
     }

     const userGetByID = async (req, res) => {
       const data= await User.findById(req.params.id)   
  res.json({data}) 
      }
   module.exports = {LoginUser, registerNewUSer, userEditById, userDeleteById, userGetByID}