const workModel = require('../model/workModel');
exports.createWork = async(req,res) =>{
  try{
    let reqBody = req.body;
    reqBody.email = headers['email'];
    let result = await workModel.create(reqBody).count();
    if(result === 1){
        res.status(200).json({ status:"success",data:result})
    }else{
        res.status(400).json({ status:"failed",data:"data is not created"})
    }
  }catch(e){
    res.status(400).json({ status:"error",data:r})
  }

}

exports.readWork = async (req,res)=>{
    try {
        let query = {};
        let items = "Title Description";
        let result =await workModel.find(query,items);
        if(result===1){
            res.status(200).json({sattus:"Success" ,data:result})
        }else{
            res.status(400).json({ status:"failed",data:"data is not found"})
        }
    } catch (error) {
        res.status(400).json({ status:"failed",data:error})
    }
}
exports.deleteWork =async (req,res)=>{
    try {
        let id = req.params.id;
        let query = {_id:id};
        const result = await workModel.deleteOne(query)
        if(result===1){
            res.status(200).json({ status:"success",data:result})
        }else{
            res.status(400).json({ status:"failed",data:"data is not deleted"})
        }
    } catch (error) {
            res.status(400).json({ status:"failed",data:error})
    }
}
exports.updateWork = async (req,res)=>{
    try {
        let id = req.params.id;
        let query={_id:id};
        let status = req.params.status;
        let reqBody ={status:status};
        const result = await workModel.updateOne(query,reqBody);
        if(result===1){
            res.status(200).json({ status:"success",data:result})
        }else{
            res.status(400).json({ status:"failed",data:"data is not updated"})
        }
    } catch (error) {
        res.status(400).json({ status:"failed",data:error})
    }
}