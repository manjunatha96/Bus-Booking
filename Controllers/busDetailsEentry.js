const express=require('express');
const router=express.Router();
const {bus,validate}=require('../Shared/Database/BusDetails')
const _=require('lodash')

router.get('/get',async(req,res)=>{
 console.log('hii');
 
})

router.post('/post',async(req,res)=>{
    console.log('hello');
    const validseat=await bus.findOne({seat_name:req.body.seat_name})
    if(validseat) res.status(400).send('This seat name already exits..')

    const validseatno=await bus.findOne({seat_no:req.body.seat_no})
    if(validseatno) res.status(400).send('This seat order number already exits..')

    const result= new bus({
        seat_name:req.body.seat_name,
        seat_no:req.body.seat_no
    })
    await result.save((err,docs)=>{
        if(!err) res.send(result)
        else console.error('Error while sendinf the data...',JSON.stringify(err,undefined,2))        
    }) 
})
module.exports=router;