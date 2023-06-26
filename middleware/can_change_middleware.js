const {verifyToken} = require('../service/jwt_service')
const userRepo = require('../repo/user_repo')

module.exports = (req, res, next) => {
    try{
        const token = req.headers.authorization.split(' ')[1]

        if(!token){
            return res.status(403).json({message: "user has not authenticated"})
        } else {

            const user = userRepo.findById(token.id)

            if(token.role === 'ADMIN' || token.id === user.id){
                next()
            }
        }

        return res.status(403).json({message: "you has not access to modify this user"})

    } catch (e) {
        console.log(e)
        return res.status(403).json({message: "user has not authenticated"})
    }
}