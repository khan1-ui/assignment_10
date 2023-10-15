const mongoose = require('mongoose');
const dataSchema =mongoose.Schema({
    firstName :{ type:String},
    lastName: {type:String},
    roll:{type:String},
    class:{type:String},
    emailAddress :{type: String},
    mobileNumber:{type:String},
    city:{type:String},
    userName:{type:String,unique:true},
    password:{type:String}
},{timestamps: true,versionKey:false})
const profileModel = mongoose.model('student',dataSchema);
module.exports = profileModel;