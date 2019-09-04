const Sequelize = require('sequelize')
const db = require('./database')

const Project = db.define('project', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  description: {
    type: Sequelize.TEXT
  }
})

module.exports = Project
