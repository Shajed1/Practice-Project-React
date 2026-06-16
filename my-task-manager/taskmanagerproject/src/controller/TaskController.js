const Taskmodel=require("../model/TaskModel")


exports.createtask = async (req, res) => {
    try {

        console.log("EMAIL:", req.headers.email);   // 👈 এখানে
        console.log("BODY:", req.body);             // 👈 এখানে

        let reqBody = req.body;

        reqBody.email = req.headers.email;

        let data = await Taskmodel.create(reqBody);

        console.log("CREATED:", data);              // 👈 এখানে

        res.json({ status: "success", data: data });

    } catch (e) {
        console.log("ERROR:", e);                   // 👈 এখানে
        res.json({ status: "fail", message: e.message });
    }
};

exports.taskupdate =async (req, res)=> {
    try{
        let email=req.headers["email"]
        let reqBody=req.body;
        let {id} = req.params;
        await  Taskmodel.updateOne({_id:id,email:email},reqBody)
        res.json({status:"success",massage:"regestration successfully"})
    }catch(e){
        res.json({status:"fail",massage:e})
    }
}
exports.taskread =async (req, res)=> {
    try{
        let email=req.headers["email"]
        let {id} = req.params;
       let data= await Taskmodel.find({email:email})
        res.json({status:"success",data:data})
    }catch(e){
        res.json({status:"fail",massage:e})
    }
}
exports.taskdelete =async (req, res)=> {
    try{
        let email=req.headers["email"]
        let {id} = req.params;
        await  Taskmodel.deleteOne({_id:id,email:email})
        res.json({status:"success",massage:"delete successfully"})
    }catch(e){
        res.json({status:"fail",massage:e})
    }
}