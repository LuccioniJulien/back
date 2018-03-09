var express = require('express')
var router = express.Router()

var db = require('../models/index')

/* GET index */
router.get('/', function(req, res, next) {
  db.user.sync().then(() => {
    db.user
      .create({
        firstName: 'julien',
        lastName: 'luccioni',
        email: 'julien.luccioni@2014gmail.com'
      })
      .then(user => res.json({ user: user }))
  })
})
module.exports = router
