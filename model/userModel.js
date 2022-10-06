let {Model, DataTypes} = require('sequelize')
const sequelize = require('../util/connection')
const {Note} = require('./noteModel')

class Person extends Model {
}

module.exports = Person.init(
    {
        id: {
            type: DataTypes.UUIDV1,
            primaryKey: true,
            autoIncrement: true
        },
        firstName: {
            field: 'first_name',
            type: DataTypes.TEXT,
            allowNull: false,
        },
        lastName: {
            field: 'last_name',
            type: DataTypes.TEXT,
            allowNull: false,
        },
        age: {
            field: 'age',
            type: DataTypes.NUMBER,
            allowNull: false,
        }
    },
    {
        sequelize,
        modelName: 'persons',
        timestamps: false
    }
).hasMany(Note, {
    onDelete: 'CASCADE'
})