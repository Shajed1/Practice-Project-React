const mongose=require("mongoose")


const databasescema=mongose.Schema({
    email:{type:String},
    title:{type:String},
    description:{type:String},
    status:{type:String},

},{versionKey:false,timestamps:true});

const Taskmodel=mongose.model("tasks",databasescema);

module.exports = Taskmodel;