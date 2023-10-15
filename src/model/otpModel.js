const mongoose = require('mongoose');
const otpSchema = mongoose.Schema({
    email:{type:String},
    otp:{type:String},
    status:{type: Number,default:0}
},{timestamps: true,versionKey:false})
const otpModel = mongoose.model('otpInfo',otpSchema);
module.exports = otpModel;