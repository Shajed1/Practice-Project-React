const mongose=require("mongoose")

const databasescema=mongose.Schema({
    email:{type:String,required:true},
    otp:{type:String,required:true},
    status:{type:String,required:true},

},{versionKey:false,timestamps:true});

const Otpmodel=mongose.model("otps",databasescema);

module.exports = Otpmodel;