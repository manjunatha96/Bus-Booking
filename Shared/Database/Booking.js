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
        type:Number,
        require:true
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
        mobile_no:Joi.string().required(),
        email:Joi.string().require(),
        age:Joi.string().require(),
        seat_id:Joi.string().require(),
        booking_date:Joi.string().require()        
    }
    return Joi.validate(bookingvalidate,bookdeatils)
}

module.exports.validate=validatebooking;
module.exports.booking=booking;