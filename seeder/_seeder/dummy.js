const mongoose = require('mongoose');
const users = mongoose.Schema({
    name:{
        type:String
    },
mobile:{
    type:Number
},
gender:{
    type:String
},
active:{
    type:Boolean
},
budget:{
    type:Number
},
skills:{
    type:String
},
})
module.exports=mongoose.model("dummydata",users);