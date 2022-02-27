 const express = require('express');
 const colors = require('colors');
 const app=express();
 const productinfo=require("./route/productinfo");
 const productinfocon=require("./config/productinfocon");
 const productlogin=require("./route/productauth");
 productinfocon();
//  body parsal 
app.use(express.json());
 app.use("/api/v1",productinfo);
 app.use("/api/v1/auth",productlogin);
 app.listen(4500,console.log("server running on http://localhost:4500/api/v1/productinfo".cyan));