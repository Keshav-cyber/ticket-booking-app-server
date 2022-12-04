const ticketModel = require("../models/ticketModel")
const orderModel = require("../models/orderModel")



const bookTicket = async function (req,res){
    try{
        console.log("bookticket")
       
        let  { quantity,ticketId} = req.body
        console.log(quantity)
        quantity = +quantity
        console.log(ticketId)
        if(quantity<1) return res.status(404).send({msg:"enter quantity"})
        let ticket = await ticketModel.findById(ticketId)
        if(!ticket) return res.status(404).send({msg:"ticket not fount"})
        if(quantity > ticket.available_quantity) return res.status(400).send({msg: "not available"})

        let deductQuantity = await ticketModel.findByIdAndUpdate({_id:ticketId},{ $inc: {available_quantity: -quantity } },{new:true})
        console.log(ticket)

        let order ={
            owner : req.userId,
            ticket: ticket._id,
            eventId : ticket.eventId,
            purchase_date : new Date(),
            total_price : quantity * ticket.price,
            satus : "confirmed"
        }
        let createdOrder = await orderModel.create(order)

        res.status(201).send({msg:"booked successfully"})

    }
    catch (error) {
        console.log(error)
        res.status(500).send({ msg: error.message })
    }
}

const  getAllBookedTickets = async function(req,res){
    try{
        
        let myBookings = await orderModel.find({owner:req.userId}).populate("eventId")
        res.status(200).send({myBookings})

    }
    catch (error) {
        res.status(500).send({ msg: error.message })
    }
}


const getAllEventTicket = async function(req,res){
    try{
        let id = req.params.id
        let allTickets = await ticketModel.find({eventId:id}).populate("eventId")
        res.status(200).send({allTickets})

    }
    catch (error) {
        res.status(500).send({ msg: error.message })
    }
}

const createTicket = async function(req,res){
    try{
        let {}= req.body
        let Ticket = await ticketModel.create(req.body)
        res.status(200).send({Ticket})

    }
    catch (error) {
        res.status(500).send({ msg: error.message })
    }
}




module.exports = { bookTicket ,getAllBookedTickets ,getAllEventTicket,createTicket}