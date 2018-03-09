var express = require('express')
var router = express.Router()
const db = require('../models/index')

/* GET / */
router.get('/', function(req, res, next) {
  db.user.sync().then(() => {
    db.user
      .create({
        firstName: 'julien',
        lastName: 'luccccc',
        email: 'email'
      })
      .then(user => {
        res.json({ user: user })
      })
  })
})

module.exports = router
