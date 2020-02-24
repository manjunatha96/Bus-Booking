require('express-async-errors')
const error=require('../Middleware/error')
const busmaster=require('../Controllers/busDetailsEentry')
const bookingMaster=require('../Controllers/BookingDetail')
module.exports=function(app){
    app.use('/BusMaster',busmaster)
    app.use('/Booking',bookingMaster)
    app.use(error)
}