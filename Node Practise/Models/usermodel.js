const mongoose = require('mongoose');

const Userschema = new mongoose.Schema({
    name:{type:String},
    age:{type:Number},
    email:{type:String},
    phone_number:{type:String},
    gender:{type:String,enum:['male','female','others']},
    // joined_date:{type:Date, default:Date.now},
    user_type:{type:String,enum:['self','bussiness','community'],default:'self'}
})

module.exports = mongoose.model('UserCollection',Userschema)