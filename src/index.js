const express= require('express')

const route=require('./routes/route')
const mongoose = require('mongoose')
const cors = require('cors')
const admin = require('./controllers/adminController')

const app=express()

app.use(cors())
app.use(express.json())
app.use("/admin",admin)


//====================================================Data-Base Connection=================================================================


mongoose.connect("mongodb+srv://Keshav-cyber:7LizqrsG6tL39fuT@cluster0.ohm0bak.mongodb.net/ticketBookingApp?retryWrites=true&w=majority", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )


//========================================================================================================================================


app.use('/', route)  


app.listen(process.env.PORT || 5000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 5000))
});
