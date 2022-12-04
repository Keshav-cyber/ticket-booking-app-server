const eventModel = require("../models/eventModel")

const getAllEvents = async function(req,res){
    try{
       
        let events = await eventModel.find({published:true,isDeleted:false})
        
        res.status(200).send({events})

    }
    catch (error) {
        res.status(500).send({ msg: error.message })
    }
}

const getEventById = async function(req,res){
    try{

        let id = req.params.id
        let event = await eventModel.findById(id)
       
        res.status(200).send({event})

    }
    catch (error) {
        res.status(500).send({ msg: error.message })
    }
}

const createEvent = async function(req,res){
    try{

        let { poster, slug,name , start_date ,end_date,description,published } = req.body
        let event = await eventModel.create(req.body)
        res.status(200).send({event})

    }
    catch (error) {
        res.status(500).send({ msg: error.message })
    }
}

const getAllAdminEvents = async function(req,res){
    try{
        
        let events = await eventModel.find({isDeleted:false})
        res.status(200).send({events})

    }
    catch (error) {
        res.status(500).send({ msg: error.message })
    }
}

const deleteEvent = async function(req,res){
    try{
        id = req.params.id
        let events = await eventModel.findByIdAndUpdate({_id:id},{isDeleted:true},{new:true})
        res.status(200).send({msg:"deleted !!!"})

    }
    catch (error) {
        res.status(500).send({ msg: error.message })
    }
}

const updateEvent =  async function(req,res){
    try{
        id = req.params.id
        let events = await eventModel.findByIdAndUpdate({_id:id},{},{new:true})
        res.status(200).send({msg:"deleted !!!"})

    }
    catch (error) {
        res.status(500).send({ msg: error.message })
    }
}
module.exports = { getAllEvents,getEventById ,createEvent,getAllAdminEvents ,deleteEvent ,updateEvent}