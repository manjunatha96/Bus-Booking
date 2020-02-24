const express=require('express');
const router=express.Router();
const {booking,validate}=require('../Shared/Database/Booking')
var dateFormat = require('dateformat');
/* Here you get booking deatils */
router.get('/get',async(req,res)=>{
    let result=await booking.find({$and: [{ is_active: true } ]})
    .populate('seat_id')
    .select('booking_date first_name last_name mobile_no seat_id')
    res.send(result)
})
router.post('/post',async(req,res)=>{
         
        let {error} =validate(req.body)
        if(error) return res.status(400).send(error.details[0].message)

        const validseat=await booking.findOne({seat_id:req.body.seat_id,booking_date:req.body.booking_date,is_active:req.body.is_active})
        if(validseat) res.status(400).send('This seat already booked..')

        const result= new booking({
            first_name:req.body.first_name,
            last_name:req.body.last_name,
            email:req.body.email,
            mobile_no:req.body.mobile_no,
            age:req.body.age,
            amount:req.body.amount,
            seat_id:req.body.seat_id,
            is_active:req.body.is_active,
            booking_date:req.body.booking_date
        })
        await result.save(res.send(result)) 
})

router.put('/delete/:id', async(req,res)=>{
    const validseat=await booking.findOne({_id:req.params.id})
    if(validseat.is_active===false){
        if(validseat) res.status(400).send('This seat does not exits')
    }
    else{
    await booking.findByIdAndUpdate({_id:req.params.id},{$set:
        {is_active:req.body.is_active}
    })
    res.send('Booking cancelled successfully..')
}
})

module.exports=router;