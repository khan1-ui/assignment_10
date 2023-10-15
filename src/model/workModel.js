const mongoose = require('mongoose');
const workSchema = mongoose.Schema({
    Title:{type:String},
    classNote:{type:String},
    Description:{type:String},
    Status:{type:String},
    Email:{type:String},

},{timestamps: true,versionKey:false})
const workModel = mongoose.model('studentWork',workSchema);
module.exports = workModel;