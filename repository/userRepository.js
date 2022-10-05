const userModel = require('../model/userModel')

module.exports = class UserRepository {

    findAll() {
        return userModel.findAll()
    }

    findById(id) {
        return userModel.findOne({
            where: {
                id: id
            }
        })
    }

    create(user) {
        return userModel.create(user)
    }

    update(user) {
        return userModel.update(user)
    }

    deleteById(id) {
        return userModel.destroy({
            where: {
                id: id
            }
        })
    }
}