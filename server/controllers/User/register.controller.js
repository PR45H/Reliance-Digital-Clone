const UserModel = require("../../models/user.model")

const register = async (req,res) => {
    try {
        const { firstName, lastName, email, password, mobile } = req.body
        const lowerCase  = firstName.toLowerCase()
        const isExistingUser = await UserModel.findOne({ email: email })
        if (isExistingUser) {
            return res.status(400).json({message:'User already exist!'})
        }
        const newUser = new UserModel({firstName:lowerCase, lastName, email, mobile, password})
        await newUser.save()
        res.status(201).json({message: 'User Registered!', user: newUser})
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

module.exports = register