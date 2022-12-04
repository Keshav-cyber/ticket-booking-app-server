const jwt = require("jsonwebtoken")



const authenticate = function (req, res, next) {
    try {
      //checking if token is available
      //console.log(req.body)
      let token = req.headers["authorization"]
    //  console.log(token)
      if (!token) return res.status(400).send({ status: false, msg: "token must be present" })
  
      //decoding token
      let decodedToken = jwt.verify(token, 'TicketBookingApp@9649', function (err, decodedToken) {
        if (err) return res.status(400).send({ status: false, msg: "token is not valid or expired" })
        req.userId = decodedToken.userId
        next()
      })
  
    } catch (err) {
      console.log(err)
      return res.status(500).send({ status: false, Error: err.message })
    }
  }


  module.exports = { authenticate }