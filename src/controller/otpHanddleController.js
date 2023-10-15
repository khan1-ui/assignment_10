const studentModel = require('../model/studentModel');
const otpModel = require('../model/otpModel');

 // Verification Email
exports.emailVerify = async(req,res)=>{
try{
    let email = req.params.email;
    let otpCode = Math.floor(100000 + Math.random() * 900000);
    let emailText = "your varification code is =" +otpCode;
    let emailSubject = "Task manager verification code";
    let result = await studentModel.find({email:email}).count();
    if(result === 1){ 
       await SendEmailUtility(email,emailText,emailSubject);
       await otpModel.create({email:email,otp:otpCode});
        res.status(200).json({status:"success",data:"6 Digit Verification Code has been send"})
    }else{
        res.status(401).json({status:"fail",data:"No User Found"})
    }
}catch(error){
    res.status(401).json({status:"fail",data:error})
}

}

//RecoveryVerify OtpCode
exports.recoveryVerifyOtp = async (req,res)=>{
    try {
        let email = req.params.email;
        let otp = req.params.otp;
        let status = 0;
        let statusUpdate = 1;
        let result = await otpModel.find({email:email,otp:otp,status:status}).count();
        if(result === 1){
         await otpModel.updateOne({email:email,otp:otp,status:status},{status:statusUpdate});
          res.status(200).json({status:"success",data:"Verification Completed"})
        }else{
            res.status(400).json({status:"fail",data:"Invalid Verification"})
        }
    } catch (error) {
        res.status(400).json({status:"fail",data:error})
    }
}


//Recover Reset Password
exports.recoverResetPassword = async (req,res)=>{
    try {
        let email = req.body['email'];
        let otpCode = req.body['otp'];
        let newPassword =req.body['password'];
        let statusUpdate = 1;

        let result = await otpModel.find({email:email,otp:otpCode,status:statusUpdate}).count();
        if(result === 1){
          await  studentModel.updateOne({email:email},{password:newPassword})
            res.status(200).json({status:"success",data:"Password Reset Success"})
        }else{
            res.status(400).json({status:"failed",data:"Password Reset Not Success"})
        }
    } catch (error) {
        res.status(400).json({status:"failed",data:error})
    }
}