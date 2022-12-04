const userModel = require("../models/userModel");
const jwt = require('jsonwebtoken')
const {isValid,isValidName,isValidEmail,isValidPassword,isValidMobile}  = require("./validations/validations")


const registerUser = async function (req, res) {
    try {
        let {fullName,mobileNumber,email,password,} = req.body;
        
        if (Object.keys(req.body).length<1) return res.status(400).send({ msg: "Insert Data : BAD REQUEST" })

        if (!isValid(fullName)) {
            return res.status(400).send({ msg: "Enter Full Name" })
        }
        if (!isValidName(fullName)) {
            return res.status(400).send({ msg: "fname only take alphabets" })
        }
        if (!isValid(email)) {
            return res.status(400).send({ msg: "Enter Email-Id" })
        }
        if (!isValidEmail(email)) {
            return res.status(400).send({ msg: "enter valid email" })
        }

        //checking for uniqueness of mobile number 
        let checkEmail=await userModel.findOne({email:email})
        if(checkEmail) return res.status(400).send({msg :"Email Already Registered"})
        
        if (!isValid(mobileNumber)) {
            return res.status(400).send({ status: false, msg: "mobile number is required" })
        }

        //checking if entered mobile number is valid or not
        if (!isValidMobile(mobileNumber)) {
            return res.status(400).send({ status: false, msg: "enter valid mobile number" })
        }

        //checking for uniqueness of mobile number 
        let checkMobileNumber = await userModel.findOne({ mobileNumber: mobileNumber })
        if (checkMobileNumber) return res.status(400).send({
            status: false,
            msg: "mobile number is already exists"
        })
        if (!isValid(password)) {
            return res.status(400).send({ msg: "Create Password" })
        }
        if (!isValidPassword(password)) {
            return res.status(400).send({ msg: "Minimum eight characters, at least one letter and one number" })
        }
        let savedData = await userModel.create(req.body);
        console.log(savedData)
        return res.status(201).send({ status:true, data: savedData });
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }

};


//====================================================user Login Api=======================================================================


const loginUser = async function (req, res) {

    try {
        if (Object.keys(req.body).length<1) return res.status(400).send({ msg: "Insert Data : BAD REQUEST" })
        
        let email = req.body.email;
        if(!email) return res.status(400).send({status:false,msg:"enter email"})

        let password = req.body.password;
        if(!password) return res.status(400).send({status:false,msg:"enter password"})

        let user = await userModel.findOne({ $and:[{email: email}, {password: password }]});
        if (!user)  return res.status(401).send({
            
                status: false,
                msg: "email or the password is not correct",
            });
        let token = jwt.sign(
            {
                userId: user._id.toString(),
            },
            "TicketBookingApp@9649"
        );
        return res.status(200).send({ status: true, accessToken: token ,fullName:user.fullName,mobileNumber:user.mobileNumber});
    }
    catch (error) {
        res.status(500).send({ msg: error.message })
    }


}



module.exports.registerUser = registerUser
module.exports.loginUser = loginUser