const express = require('express');
const router =express.Router();
const {getuser,getSingleUser, createUser, updatauser, deleteuser}=require("../controller/user");
const {protector}=require("../middleware/auth");
router.route("/user").get(getuser).post(createUser);
router.route("/user/:id").get(protector,getSingleUser).put(protector,updatauser).delete(protector,deleteuser);
module.exports=router;