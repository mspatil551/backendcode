const jwt=require("jsonwebtoken");
const colors = require('colors');
const users=require("../model/User");
exports.protector=async(req,res,next)=>{
  try {
    console.log("protector run..🔞".magenta);
    console.log(req.headers.authrization);
    const token=req.headers.authrization;
    if(!token){
        return res.status(500).json({
            success:false,
            message:"please provide token",
            data:null
        })
    }
    // mytoken
    //eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxMmRlNGFiYzVmMzU1MjlhOTI0NGJkZSIsImlhdCI6MTYzMDQ4MjU2MX0.FmZw4heMC5e--jgSV7i961sW6CJppde1OD2Jc50tnZk
    const match=await jwt.verify(token,"skillhub");
    if(!match){
        return res.status(500).json({
            success:false,
            message:"cracked token permitted",
            data:null
        })
    }
    next();
  } catch (error) {
      res.status(500).json({
          success:false,
          message:"sometheing went wrong ",
        data:error
      })
  }
}