const mongoose = require('mongoose');
const users = mongoose.Schema({
    name:{
        type:String,
        required:[true,"plz provide name"]
    },
    email:{
        type:String,
        unique:[true,"plz provide email"]
    },
    password:{
        type:String,
        required:[true,"plz provide password"]
    }
})
module.exports=mongoose.model("user",users);