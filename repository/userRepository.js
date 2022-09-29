const userModel = require('../model/userModel')

module.exports = class UserRepository {

    findAll() {
        return userModel.findAll()
    }

    findAllBy(condition) {
        return userModel.findAll({
            where: {
                [condition.key]: [condition.value]
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