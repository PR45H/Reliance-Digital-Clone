const UserModel = require("../../models/user.model")

const register = async (req,res) => {
    try {
        const { firstName, lastName, email, mobile, password } = req.body
        const isExistingUser = await UserModel.findOne({ email: email })
        if (isExistingUser) {
            return res.status(400).json({message:'User already exist!'})
        }
        const newUser = new UserModel({firstName, lastName, email, mobile, password})
        await newUser.save()
        res.status(200).json({message: 'User Registered!', user: newUser})
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

module.exports = register