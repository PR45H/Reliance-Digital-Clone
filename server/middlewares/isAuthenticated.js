const jwt = require('jsonwebtoken')
require('dotenv').config()

const isAuthenticated = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1]
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET_KEY, (err) => {
            if (err) {
                return res.status(401).json({
                    message: "Unauthorized"
                })
            }
            if (decodedToken) {
                req.user = decodedToken.userId
                next()
            }
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}
