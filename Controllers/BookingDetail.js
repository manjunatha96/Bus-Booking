const express=require('express');
const router=express.Router();
const {booking,validate}=require('../Shared/Database/Booking')
const _=require('lodash')

router.get('/get',async(req,res)=>{
    console.log('hii');
    let result=await booking.find({
        $and: [
          { is_active: false }
        ]
      })
    .populate('seat_id')
    // .select('is_present attendance_date punch_in punch_out')
    res.send(result)
})

router.post('/post',async(req,res)=>{
    console.log('hello');
    const validseat=await booking.findOne({seat_id:req.body.seat_id})
    if(validseat) res.status(400).send('This seat already booked..')

    // const validseatno=await bus.findOne({seat_no:req.body.seat_no})
    // if(validseatno) res.status(400).send('This seat order number already exits..')

    const result= new booking({
        first_name:req.body.first_name,
        last_name:req.body.last_name,
        email:req.body.email,
        mobile_no:req.body.mobile_no,
        age:req.body.age,
        amount:req.body.amount,
        seat_id:req.body.seat_id,
        booking_date:req.body.booking_date
    })
    await result.save((err,docs)=>{
        if(!err) res.send(result)
        else console.error('Error while sendinf the data...',JSON.stringify(err,undefined,2))        
    }) 
})
module.exports=router;