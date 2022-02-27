 const fs = require('fs');
 const dummy=require("./dummy");
 const mongoose = require('mongoose');
 const colors=require("colors");

 const db= async ()=>{
  await mongoose.connect('mongodb+srv://mahesh:0QLm88pImPJc8cnV@cluster0.2d5yp.mongodb.net/tododatabase?retryWrites=true&w=majority',{
  });
  console.log('mongo json'.america);
 }
 db();

const addData=async()=>{
try {
  let data=await fs.readFileSync("./data.json").toString();
data=JSON.parse(data);
await dummy.create(data);
console.log("data is inserted".bgGreen.white);
process.exit();
} catch (error) {
  console.log("sometheing went wrong".bold+error);
}
}
const deleteData=async()=>{
  try {
    await dummy.deleteMany();
  console.log("data is deleted".bgRed.black);
  process.exit();
  } catch (error) {
    console.log("sometheing went wrong".bold+error);

  }
}
if(process.argv[2]=="i"){
  addData();
}else if(process.argv[2]=="r"){
  deleteData();
}else{
  console.log(`
  please use following command:
  to insert data use i
  to delete data use r
  `);
  process.exit();
}