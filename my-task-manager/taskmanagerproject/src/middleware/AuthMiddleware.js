const jwt = require("jsonwebtoken");
module.exports=(req,res,next)=>{
    let token = req.headers['token'];
    jwt.verify(token, '123-ABC', (err, decoded) => {
        if(err){
            res.status(401).json({status:"error"});
        }else{

            req.headers.email=decoded['data'];
            next();
        }
    })
}