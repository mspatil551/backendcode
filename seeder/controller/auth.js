const users=require("../model/User");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
exports.login=async (req,res)=>{
    try {
        const {email,password}=req.body;
    const data=await users.findOne({email});
    if(!data){
       return res.status(400).json({
            message:"invalid gmail",
            success:false,
            data:null
        })    
    }
    const match=await bcrypt.compare(password,data.password);
    if(!match){
      return  res.status(400).json({
            message:"invalid password",
            success:false,
            data:null
        })
    }
     // login
     const token=await jwt.sign({id:data._id},"skillhub");
     res.status(200).json({
        message:"gmail bhetala",
        success:true,
        data:data,
        token:token
    })
    } catch (error) {
        res.status(400).json({
            message:"sometheing went wrong",
            success:false,
            data:error
        })
    }
}