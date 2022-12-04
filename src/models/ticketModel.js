const mongoose = require("mongoose")
let objectId = mongoose.Schema.Types.ObjectId

const ticketSchema = new mongoose.Schema({

    eventId: {
        type: objectId,
        required: true,
        ref : 'event'
    },
            
    name: {
        type: String,
        required: true
    },

    purchase_date: {
        type: Date,
        required: true
    },
    description:{
        type:String
    },
    price: {
        type: Number,
        required: true
    },
    total_quantity:{
        type: Number,
        required: true
    },
    available_quantity:{
        type: Number,
        required: true
    }

    
},
{ timestamps: true });

module.exports = mongoose.model('ticket', ticketSchema)