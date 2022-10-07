const { userModel } = require('../models')

class UserRepository {

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
        return userModel.update(user, {
            where: {
                id: user.id
            }
        })
    }

    deleteById(id) {
        return userModel.destroy({
            where: {
                id: id
            }
        })
    }
}

module.exports = new UserRepository()