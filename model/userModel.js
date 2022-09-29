let { Sequelize, Model, DataType} = require('sequelize')
const sequelize = require('../util/connection')

class Person extends Model {
}

module.exports = Person.init(
    {
        id: {
            type: Sequelize.NUMBER,
            primaryKey: true
        },
        firstName: {
            field: 'first_name',
            type: Sequelize.TEXT,
            allowNull: false,
        },
        lastName: {
            field: 'last_name',
            type: Sequelize.TEXT,
            allowNull: false,
        },
        age: {
            field: 'age',
            type: Sequelize.NUMBER,
            allowNull: false,
        }
    },
    {
        sequelize,
        modelName: 'persons',
        timestamps: false
    }
)