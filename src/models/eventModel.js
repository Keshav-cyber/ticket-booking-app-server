const mongoose = require("mongoose")


const eventSchema = new mongoose.Schema({
    poster:{
        type:String,
        required:true
    },
    //_id,slug,  name, description, poster, start date, end date, published (only published events within the start_date and end_date range should be visible to normal users).
    slug: {
        type: String,
        required: true
    },                
    name: {
        type: String,
        required: true
    },

    start_date: {
        type: Date,
        required: true
    },
    end_date: {
        type: Date,
        required: true
    },
    description:{
        type:String
    },
    published:{
        type : Boolean,
        required:true,
        default:false
    },
    isDeleted :{
        type:Boolean,
        default:false
    }
    
},
{ timestamps: true });

module.exports = mongoose.model('event', eventSchema)