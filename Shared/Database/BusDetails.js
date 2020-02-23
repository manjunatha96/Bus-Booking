const mongoose=require('mongoose');
const Joi=require('joi')

const busSchema=mongoose.Schema({
    seat_name:{
        type:String,
        require:true
    },
    seat_no:{
        type:Number,
        require:true
    },
    is_active:{
        type:Boolean,
        default:true
    },
    created_date:{
        type:Date,
        default:Date.now
    }
})
const bus=mongoose.model('BusDetails',busSchema)

const validatebus=function(busvalidate){
    const busdeatils={
        seat_name:Joi.string().required(),
        seat_no:Joi.string().required()
    }
    return Joi.validate(busvalidate,busdeatils)
}

module.exports.validate=validatebus;
module.exports.bus=bus;