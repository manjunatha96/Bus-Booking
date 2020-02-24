const mongoose=require('mongoose');
const Joi=require('joi')
const BusDetails=require('./BusDetails')
const bookingSchema=mongoose.Schema({
    first_name:{
        type:String,
        require:true
    },
    last_name:{
        type:String,
        require:true
    },
    mobile_no:{
        type:String,
        require:true,
        minlength:10,
        maxlength:12,
    },
    email:{
        type:String,
        require:true
    },
    age:{
        type:Number,
        require:true   
    },
    amount:{
        type:String,
        require:true
    },
    is_active:{
        type:Boolean,
        default:true
    },
    created_date:{
        type:Date,
        default:Date.now
    },
    seat_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'BusDetails',
        require:true,
    },
    booking_date:{
        type:Date,
        require:true
    }
})
const booking=mongoose.model('BookingDetails',bookingSchema)

const validatebooking=function(bookingvalidate){
    const bookdeatils={
        first_name:Joi.string().required(),
        last_name:Joi.string().required(),
        mobile_no:Joi.string().min(10).max(12).required(),
        email:Joi.string().required().email(),
        age:Joi.number().required(),
        seat_id:Joi.string().required(),
        is_active:Joi.boolean().required(),
        booking_date:Joi.string().required(),
        amount:Joi.number().required()        
    }
    return Joi.validate(bookingvalidate,bookdeatils)
}

module.exports.validate=validatebooking;
module.exports.booking=booking;