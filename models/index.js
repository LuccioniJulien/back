require('dotenv').config()
let Sequelize = require('sequelize')

//postgres://user:pass@example.com:5432/dbname
let db = {}
db.sequelize = new Sequelize(process.env.DATABASE_URL)
//INIT MODEL
db.user = db.sequelize.define('user', {
  firstName: Sequelize.STRING,
  lastName: Sequelize.STRING,
  email: Sequelize.STRING
})

db.sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.')
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err)
  })

module.exports = db
