const { Model, DataTypes } = require('sequelize')
const { sequelize } = require('../utils')
const Note = require('./note.model')

class Person extends Model {
}

Person.init(
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
)

Person.hasMany(Note, {
    foreignKey: 'author',
    onDelete: 'CASCADE'
})

module.exports = Person