const express=require('express');
const router=express.Router();
const {bus,validate}=require('../Shared/Database/BusDetails')

router.get('/get',async(req,res)=>{
    let result=await bus.find()
    .select('seat_name seat_no')
    res.send(result)
})

router.post('/post',async(req,res)=>{
    let {error} = validate(req.body)
    if(error) return res.status(400).send(error.details[0].message)

    const validseat=await bus.findOne({seat_name:req.body.seat_name})
    if(validseat) res.status(400).send('This seat name already exits..')

    const validseatno=await bus.findOne({seat_no:req.body.seat_no})
    if(validseatno) res.status(400).send('This seat order number already exits..')

    const result= new bus({
        seat_name:req.body.seat_name,
        seat_no:req.body.seat_no
    })
    await result.save(res.send(result)) 
})
module.exports=router;