const mongoose = require("mongoose")
const objectId = mongoose.Schema.Types.ObjectId

const orderSchema = new mongoose.Schema({

    owner: {
        type: objectId,
        required: true,
        ref : 'user'
    },
    // _id, owner (user), event (foreign key to events table), ticket(foreign key to tickets table), purchase_date, total_price, status (confirmed, cancelled).


    eventId: {
        type: objectId,
        required: true,
        ref : 'event'
    },

    ticket: {
        type: objectId,
        required: true,
        ref:"ticket"
    },

    purchase_date: {
        type: Date,
        required: true
    },

    total_price: {
        type: Number,
        required: true
    },
    status:{
        type:String,
        enum :["confirmed", "cancelled"]
    }
},
{ timestamps: true });

module.exports = mongoose.model('order', orderSchema)