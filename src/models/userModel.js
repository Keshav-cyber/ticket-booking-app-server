const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({

    fullName: {
        type: String,
        required: true,
    },                     // _id, mobile number, email, password, full name, role (normal_user, admin_user)
    mobileNumber:{
        type : String,
        required:true,
        unique : true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role:{
        type:String,
        default: "normal_user",
    }
},
    { timestamps: true });

module.exports = mongoose.model('user', userSchema)