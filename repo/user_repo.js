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

    async findByNickname(nickname){
        return await User.findOne({where: {nickname: nickname}})
            .then(user => user)
            .catch(err => console.error(err))
    }
}

module.exports = new UserRepo()