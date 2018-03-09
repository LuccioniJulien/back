var express = require('express')
var router = express.Router()

/* GET index */
router.get('/', function(req, res, next) {
  res.json({ hi: 'Hello world, this is a test with git and heroku' })
})

module.exports = router
