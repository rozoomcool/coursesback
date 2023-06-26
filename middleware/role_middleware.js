const {verifyToken} = require('../service/jwt_service')

module.exports = (roles) => {
    return (req, res, next) => {
        if(req.method === "OPTIONS"){
            next()
        }

        try{
            const token = req.headers.authorization.split(' ')[1]

            if(!token){
                return res.status(403).json({message: "user has not authenticated"})
            }
            
            const {role: userRole} = verifyToken(token)
            let hasRole = false

            if(roles.includes(userRole)){
                hasRole = true
            }
            

            if(!hasRole){
                return res.status(403).json({message: "user has not authorities"})
            }

            next()

        } catch (e) {
            console.log(e)
            return res.status(403).json({message: "user has not authenticated"})
        }
    }
}