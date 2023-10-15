const studentModel = require('../model/studentModel');
const jwt = require('jsonwebtoken');
exports.loginProfile=(req,res)=>{
const reqBody = req.body;
try{
let result = studentModel.find(reqBody).count()
if(result === 1){

     // Create Token
    let Payload={
        exp:Math.floor(Date.now()/1000)+(24*60*60),
        data:reqBody['email']
    }
    let token=jwt.sign(Payload,"SecretKey24680");
    res.status(200).json({status:"success",data:token})
}else{
     // Login fail
     res.status(400).json({status:"fail",data:"No User Found"})
}
}catch(e){
    res.status(200).json({status:"fail",data:e})

}


          }
