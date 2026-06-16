const usermodel=require("../model/userModel")
const jwt = require("jsonwebtoken");
const SendEmailUtility=require('../utility/EmailSend')
const Otpmodel=require("../model/OTPmodel")

exports.register =async (req, res)=> {
try{
    let reqBody=req.body;
  await  usermodel.create(reqBody)
    res.json({status:"success",massage:"regestration successfully"})
}catch(e){
    res.json({status:"fail",massage:e})
}
}

exports.login = async (req, res)=> {
    try{
        let reqBody=req.body;
        let user= await usermodel.find(reqBody)
        if(user.length>0){
           let payload={exp:Math.floor(Date.now() / 1000)+(24*60*60),data:reqBody['email']}
            let token=jwt.sign(payload,'123-ABC')
            res.json({status:"success",token:token})
        }else{
            res.json({status:"fail",massage:"User not found"})
        }

    }catch(e){
        res.json({status:"fail",massage:e})
    }
}

exports.profileUpdate = async (req, res)=> {
    try {

        let email = req.headers['email'];
        let reqBody = req.body;
        await usermodel.updateOne({email: email}, reqBody)
        res.json({status: "success", massage: "update successfully"})
    } catch (e) {
        res.json({status: "fail", massage: e})
    }
}

exports.profileDetails = async (req, res)=> {
    try{
        let email=req.headers["email"];
         let reqBody=req.body;
       let details= await  usermodel.find({email:email},reqBody)
        res.json({status:"success",data:details})
    }catch(e){
        res.json({status:"fail",massage:e})
    }
}

exports.verifyEmail = async (req, res)=> {
    try{
      const {email} = req.params;
      let user= await usermodel.find({email:email})
        if(user.length>0){
            let otp=Math.floor(1000000*Math.random()+900000);
          await  SendEmailUtility(email,`Your PIN=${otp}`,"Task Manager Project Verification")
          await Otpmodel.create({email:email,otp:otp,status:"Active"})
            res.json({status:"success",massage:"Email Successfully verified"})
        }else{
            res.json({status:"fail",massage:"User not found"})
        }
    }catch(e){
        res.json({status:"fail",massage:e})
    }
}

exports.verifyOTP = async (req, res)=> {
    try{
        const {email,otp} = req.params;
        let user= await Otpmodel.find({email:email,otp:otp,status:"Active"})
        if(user.length>0){
            await Otpmodel.updateOne({email:email,otp:otp},{status:"verfied"})
            res.json({status:"success",massage:"OTP Successfully verified"})
        }else{
            res.json({status:"fail",massage:"User not found"})
        }
    }catch(e){
        res.json({status:"fail",massage:e})
    }
}

exports.passwordReset = async (req, res)=> {
    try{
        const {email,otp,password} = req.params;
        let user= await Otpmodel.find({email:email,otp:otp,status:"verfied"})
        if(user.length>0){
            await Otpmodel.deleteOne({email:email,otp:otp})
            await usermodel.updateOne(
  { email: email },
  { password: password }
);
            res.json({status:"success",massage:"password reset successfully"})
        }else{
            res.json({status:"fail",massage:"User not found"})
        }
    }catch(e){
        res.json({status:"fail",massage:e})
    }
}