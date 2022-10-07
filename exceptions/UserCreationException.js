const UserManagementAppError = require('./UserManagementAppException')

class UserCreationError extends UserManagementAppError {

    constructor(name,
                statusCode = 500,
                isOperational = true,
                message = 'User creation exceptions',
    ) {
        super(name, statusCode, isOperational, message);
    }
}

module.exports = UserCreationError