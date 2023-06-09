const User = require('../models').user

class UserRepo{
    async createUser(user) {
        await User.create(user)
        .catch(err => console.error("ERROR CREATE USER"))
    }

    async findById(id){
        let user = await User.findByPk(id)
            .catch(err => console.log(err))

        return user
    }
}

module.exports = new UserRepo()