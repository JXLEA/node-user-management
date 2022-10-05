const UserManagementAppError = require('./UserManagementAppError')

module.exports = class UserCreationError extends UserManagementAppError {

    constructor(name,
                statusCode = 500,
                isOperational = true,
                message = 'User creation error',
    ) {
        super(name, statusCode, isOperational, message);
    }
}