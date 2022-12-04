const express = require('express')
const router = express.Router()
const { authenticate } = require("../middleware/middleware")

const { registerUser,loginUser } = require('../controllers/userController')
const { getAllEvents,getEventById ,createEvent,getAllAdminEvents,deleteEvent,updateEvent } = require('../controllers/eventController')
const  { bookTicket , getAllBookedTickets,getAllEventTicket,createTicket } = require("../controllers/ticketController")



router.post("/register", registerUser)    
router.post("/login", loginUser)     

router.get("/events", authenticate, getAllEvents)
router.get("/events/:id", authenticate,getEventById )

router.get("/tickets/:id",authenticate,getAllEventTicket)
router.post("/ticket",authenticate, bookTicket)
router.get("/bookings",authenticate, getAllBookedTickets)



//admin routes

//event
 router.post("/admin/event",createEvent)
// router.get("/admin/events",getAllAdminEvents)
// router.delete("/event/:id",deleteEvent)
// router.put("/event/:id",updateEvent)


// //ticket
router.post("/admin/ticket",createTicket)




module.exports = router;