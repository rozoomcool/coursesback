const userRepo = require('../repo/user_repo')
const {verifyToken} = require('../service/jwt_service')

class UserController {
    async createUser(req, res) {
        await userRepo.createUser(req.body)
        .then(res.send("1"))
        .catch(err => res.send("-1"))
    }

    async findUserById(req, res){
        try{
            const user = await userRepo.findById(req.params['id'])
            return res.send(user)
        } catch (e) {
            return res.status(400).json("some problems")
        }
    }

    async getCurrentUser(req, res){
        try{
            const token = req.headers.authorization?.split(' ')[1]
            const {id} = verifyToken(token)

            let user =  await userRepo.findById(id)

            return res.send(user)
        } catch (e) {
            return res.status(400).json("some problems")
        }
        
    }

    async updateUser (req, res) {
        try {
            const edited = await req.body

            const token = req.headers.authorization?.split(' ')[1]
            const {id} = verifyToken(token)

            let user =  await userRepo.findById(id)

            user.nickname = edited.nickname
            user.firstname = edited.firstname
            user.lastname = edited.lastname
            user.age = edited.age
            user.email = edited.email
            user.phone = edited.phone

            await userRepo.updateUser(user).then(() => res.send("1"))
        } catch (e) {
            return res.status(400).json("some problems")
        }
    }
}

module.exports = new UserController()