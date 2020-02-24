Bus Booking

Step1)Need to enter the Master seat details.
Link-> http://localhost:3000/BusMaster/post
Details:
{
"seat_name":"Seat4",
"seat_no":4
}

Setp2) Enter seat id along with passenger details.
Link -> http://localhost:3000/Booking/post
Details:
{	
       "first_name":"Manju",
        "last_name":"hubballi",
        "email":"ma@gmail.com",
        "mobile_no":9611323824,
        "age":25,
        "amount":600,
        "is_active":true,
        "seat_id":"5e5349707653751124b444cf",
        "booking_date":"2020-02-24"
}

Step3) Mention which seat you want to cancel.
Link -> http://localhost:3000/Booking/delete/5e53676645fd944994c81be0
Details:
{
	"is_active":"false"
}

Setp4) Paste link to get passenger’s details.
Link -> http://localhost:3000/Booking/get
