const express = require('express');
const userController=require('../controller/UserController')
const authentication=require('../middleware/AuthMiddleware')
const taskcontroller=require("../controller/TaskController")

const router = express.Router();
// user section
router.post("/regester",userController.register)
router.post("/login",userController.login)
router.get("/RecoverVerifymail/:email",userController.verifyEmail)
router.get("/RecoververifyOTP/:email/:otp",userController.verifyOTP)
router.get("/verifypassword/:email/:otp/:password",userController.passwordReset)
//before verify
router.post("/profileUpdate",authentication,userController.profileUpdate)
router.get("/profileDetails",authentication,userController.profileDetails)

//task section
router.post("/createtask",authentication,taskcontroller.createtask)
router.post("/updateTask/:id",authentication,taskcontroller.taskupdate)
router.get("/taskread",authentication,taskcontroller.taskread)
router.delete("/taskdelete/:id",authentication,taskcontroller.taskdelete)

module.exports=router;
