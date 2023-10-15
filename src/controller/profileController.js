const studentModel = require('../model/studentModel');



// Registration
exports.createProfile = async(req,res)=>{
const reqBody = req.body;
try{
    const result = await studentModel.create(reqBody )
res.status(200).json({
    status:"success",data: result
})
}catch(error){
    res.status(400).json({
        status:"success",data: error
    })
}
}

//Read Profile
exports.readProfile =async (req,res)=>{
    const query = {};
    const items = "userName roll class mobile  emailAddress";
    try{
     const result = await studentModel.find(query,items);
     res.status(200).json({status:"success",data:result})

    }catch(e){
    res.status(400).json({status:"failed",data:e})
    }

}
 //UpdateProfile
 exports.updateProfile =async (req,res)=>{
    const reqBody = req.body;
    const id = req.params.id;
    const query = {_id:id};
    try{
    const result = await studentModel.update(query,reqBody);
    res.status(200).json({status:"success",data:result})
    }catch(e){
    res.status(400).json({status:"failed",data:e})
    }
 }
 //deleteProfile
 exports.deleteProfile =async (req,res)=>{
    const id = req.params.id;
    const query = {_id:id };
    try{
    const result = await studentModel.remove(query);
    res.status(200).json({status:"success",data:result})
    
    }catch(error){
    res.status(400).json({status:"failed",data:e})
    }
 }