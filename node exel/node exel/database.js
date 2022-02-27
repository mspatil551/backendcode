const db=require("./db");
db();
const user=require("./dbmodel");
const reader=require("xlsx");
myfun=async(req,res)=>{
    var data=await user.find();
    // console.log(data);
    var arr=data;
     
    console.log(data);
    // console.log(newdata);
    const filename="database.xlsx";
  const ws=reader.utils.json_to_sheet(arr);

  console.log(ws);
  const wb=reader.utils.book_new();
  reader.utils.book_append_sheet(wb,ws,"dd");
  reader.writeFile(wb,filename);
}
myfun();
