const express = require('express');
const colors = require('colors');
const app=express();
const user=require("./route/user");
const db=require("./config/db");
const auth = require('./route/auth');
// const dummy = require('./route/dummy');
const env=require("dotenv");
env.config({path:"./config/.env"})
db();
// ../ parsal
app.use(express.json());
app.use("/api/v1",user);
// app.use("/api/v1/dummy",dummy);
app.use("/api/v1/auth",auth);
const port=process.env.PORT || 4500;
app.listen(port,console.log(`server running on http://localhost:${port}`.bgGreen));
// c c m m r 