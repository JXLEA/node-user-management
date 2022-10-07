const Sequelize = require('sequelize')
const { db } = require('../config')

const url = `${db.dialect}://${db.host}:${db.port}/${db.name}`

const sequelize = new Sequelize(url, { dialect: db.dialect })

module.exports = sequelize