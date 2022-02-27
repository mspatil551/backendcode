const mongoose = require('mongoose');
const db= async ()=>{
 await mongoose.connect('mongodb+srv://mahesh:0QLm88pImPJc8cnV@cluster0.2d5yp.mongodb.net/tododatabase?retryWrites=true&w=majority',{
 });
 console.log('mongo json');
}
module.exports=db;