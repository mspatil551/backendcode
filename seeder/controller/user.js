// const users=require("../model/User");
const users=require("../_seeder/dummy");
const bcrypt = require('bcryptjs');
exports.getuser=async(req,res)=>{
    // const data=await users.find().select("name");
    // const data=await users.find().select("name gender");
    // const data=await users.find().select("name gender").limit(5);
    // const data=await users.find().sort({budget:-1});
    // const data=await users.find({active:true, gender:"femele"});
    // const data=await users.find({budget:{$gt:5000}});
    // const data=await users.find({budget:{$lte:5000}});
    // const data=await users.find({budget:{$lte:5000,$gte:10000}});
    // const data=await users.find({skills: { $in:["angular"]}});
    // const data=await users.find({gender:"male",$gt:5000});
    // const data=await users.find({skills:["html","css","typescript","react"]});
    // const data=await users.find({skills:"php" , skills:"angular" });
    // const data=await users.find({$and: [{skills:"php" , skills:"angular"}]});
    // const data=await users.find({budget:{$not:{$eq:5000}}});
    const data=await users.find({budget:{$ne:5000}});
    // const data=await users.find()
    res.status(200).json({
        success:true,
        msg:"getdata success",
        count:data.length,
        data:data
    })
}
 exports.createUser=async(req,res)=>{
   
    // console.log(req.body);
   try {
       const salt=await bcrypt.genSalt(10);
       req.body.password=await bcrypt.hash(req.body.password,salt);
       const data = await users.create(req.body);
    // console.log(req.body.password);
    res.status(200).json(
        {
            success:true,
            message:"user created",
            data:data
        }
    );
   } catch (error) {
    res.status(400).json(
        {
            success:false,
            message:"Error",
            data:error
        }
    );
   }
}
exports.updatauser=async(req , res)=>{
    const data=await users.findByIdAndUpdate({_id:req.params.id},req.body);
res.status(200).json({
success:true,
 message:'update product',
 data:data
})
console.log(data);
 }
exports.deleteuser=async(req , res)=>{
    const data=await users.findByIdAndDelete( {_id:req.params.id});
res.status(200).json({
success:true,
 message:'update product',
 data:data
})
console.log(data);
 }
exports.getSingleUser=async(req,res)=>{
    console.log(req.params.id);
   const data=await users.findById({_id:req.params.id});
    res.status(200).json({
        success:true,
        msg:"getdata singleuse data",
        data:data
    })
    console.log(data.name);
}