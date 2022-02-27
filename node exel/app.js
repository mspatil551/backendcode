const reader=require("xlsx");
const file=reader.readFile("./Book1.xlsx");
// console.log(file);
const sheet = file.SheetNames[0];
// console.log(sheet);
//  console.log(file.Sheets);
const data=reader.utils.sheet_to_json(file.Sheets[sheet]);
// console.log(file.Sheets[sheet]);
console.log(data);
console.clear();
const arr=[
    { 'name of sudent ': 'manish', rolno: 50 },
    { 'name of sudent ': 'rushi', rolno: 70 },
    { 'name of sudent ': 'mahesh', rolno: 80 },
    { 'name of sudent ': 'vaibhav', rolno: 100 },
    { 'name of sudent ': 'manish', rolno: 115 },
    { 'name of sudent ': 'rushi', rolno: 131 }
  ]
  console.log(arr);
  const filename="dd.xlsx";
  const ws=reader.utils.json_to_sheet(arr);
  const wb=reader.utils.book_new(arr);
  reader.utils.book_append_sheet(wb,ws,"dd");
  reader.writeFile(wb,filename);
  
