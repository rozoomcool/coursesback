const {verifyToken} = require('../service/jwt_service')

module.exports = (req, res, next) => {
    if(req.method === "OPTIONS"){
        next()
    }

    try{
        const token = req.headers.authorization.split(' ')[1]

        if(!token){
            return res.status(403).json({message: "user has not authenticated"})
        } else {
            const decodeData = verifyToken(token)
            req.user = decodeData
            next() 
        }
    } catch (e) {
        console.log(e)
        return res.status(403).json({message: "user has not authenticated"})
    }
}