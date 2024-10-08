const UserModel = require("../../models/user.model")
const jwt = require('jsonwebtoken')
require('dotenv').config();
const privateKey = process.env.JWT_SECRET_KEY

const login = async (req,res) => {
    try {
        const {email, password} = req.body
        // console.log(email)
        // Checking if user exist
        const isEmailCorrect = await UserModel.findOne({ email: email })
        if (!isEmailCorrect) {
            return res.status(404).json({message:'User does not exist!'})
        }
        // checking password
        const isPasswordCorrect = isEmailCorrect.password === password
        if (!isPasswordCorrect) {
            return res.status(401).json({message:'incorrect password!'})
        }
        // Token creation and sending userId in the token
        const token = jwt.sign({ userId: isEmailCorrect._id }, privateKey)
        res.status(200).json({message: 'Login Successfull!', token:token})
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

module.exports = login