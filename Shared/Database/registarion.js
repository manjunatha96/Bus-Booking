const mongoose=require('mongoose')
const Joi=require('joi');

const registerSchema=mongoose.Schema({
    first_name:{
        type:String,
        minlength:5,
        maxlength:50,
        require:true
    }
})

module.exports.registerSchema=registerSchema;