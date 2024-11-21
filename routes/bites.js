const express = require('express')
const router = express.Router()
const bitesCtrl = require('../controllers/bites')

router.get('/', bitesCtrl.index)

module.exports = router