const mongoose = require('mongoose');
const uri ="mongodb://127.0.0.1:27017/School";
const option ={user:'',pass:''};
const result =async(req,res)=>{
    mongoose.connect(uri,option)
    console.log("connection success")


}

module.exports = result;