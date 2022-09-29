const UserRepository = require('../repository/userRepository')
const userRepository = new UserRepository()

module.exports = class UserService {
    
    findAll() {
        return userRepository.findAll();
    }

    findBy(condition) {
        return userRepository.findAllBy(condition)
    }

    create(user) {
        return userRepository.create(user)
    }
    
    update(user) {
        return userRepository.update(user);
    }

    deleteById(id) {
        return userRepository.deleteById(id)
    }
}