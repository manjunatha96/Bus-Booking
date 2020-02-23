require('express-async-errors')
const error=require('../Middleware/error')
const registrationUser=require('../Controllers/registrations')
const busmaster=require('../Controllers/busDetailsEentry')
const bookingMaster=require('../Controllers/BookingDetail')
module.exports=function(app){
    app.use('/register',registrationUser)
    app.use('/BusMaster',busmaster)
    app.use('/Booking',bookingMaster)
    app.use(error)
}