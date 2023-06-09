const userRepo = require('../repo/user_repo')

class UserController {
    async createUser(req, res) {
        await userRepo.createUser(req.body)
        .then(res.send("1"))
        .catch(err => res.send("-1"))
    }

    async findUserById(req, res){
        const user = await userRepo.findById(req.params['id'])
        console.log(user)
        res.send(user)
    }
}

module.exports = new UserController()