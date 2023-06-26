const Student = require('../models').user

class StudentRepo{
    async createStudent(student) {
        await Student.create(student)
        .catch(err => console.error("ERROR CREATE USER"))
    }

    async findById(id){
        let student = await Student.findByPk(id)
            .catch(err => console.log(err))

        return user
    }

}

module.exports = new UserRepo()